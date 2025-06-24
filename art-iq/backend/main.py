from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from PIL import Image
import torch
import torch.nn as nn
import torch.nn.functional as F
from torchvision import models, transforms
import io

app = FastAPI(title="Art Style Prediction API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Device configuration
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Image transformations
val_test_transforms = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

# Label to style mapping
label2style = {
    0: "Romanticism",
    1: "Renaissance",
    2: "Realism",
    3: "Baroque",
    4: "Neoclassicism",
    5: "Art_Nouveau",
    6: "Expressionism",
    7: "Rococo",
    8: "Japanese_Art",
    9: "Symbolism",
    10: "Primitivism",
    11: "Academic_Art",
    12: "Western_Medieval",
    13: "Other"
}

class CustomResNet(nn.Module):
    def __init__(self, num_classes):
        super(CustomResNet, self).__init__()
        self.backbone = models.resnet50(weights=None)
        in_features = self.backbone.fc.in_features
        self.backbone.fc = nn.Sequential(
            nn.Linear(in_features, 512),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(512, num_classes)
        )

    def forward(self, x):
        return self.backbone(x)

# Load the model
try:
    checkpoint = torch.load("best_model_epoch_10.pth", map_location=device, weights_only=False)
    model = CustomResNet(num_classes=len(label2style))
    
    state_dict = checkpoint['model_state_dict']
    new_state_dict = {}
    for key, value in state_dict.items():
        if 'num_batches_tracked' in key:
            continue
        new_key = f"backbone.{key}" if not key.startswith('backbone.') else key
        new_state_dict[new_key] = value
    
    model.load_state_dict(new_state_dict)
    model.to(device)
    model.eval()
except Exception as e:
    raise Exception(f"Failed to load model: {str(e)}")

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    """
    Predict the top-3 art styles for an uploaded image.
    
    Args:
        file: Uploaded image file (jpg, jpeg, png)
    
    Returns:
        JSON response with top-3 predictions and their confidence scores
    """
    # Validate file type
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Invalid file type. Please upload an image (jpg, jpeg, png).")
    
    try:
        # Read and preprocess image
        contents = await file.read()
        img = Image.open(io.BytesIO(contents)).convert('RGB')
        img_tensor = val_test_transforms(img).unsqueeze(0).to(device)
        
        # Make prediction
        with torch.no_grad():
            outputs = model(img_tensor)
            probabilities = F.softmax(outputs, dim=1)
            top3_probs, top3_indices = torch.topk(probabilities, k=3, dim=1)
        
        # Format predictions
        predictions = [
            {"style": label2style[idx.item()], "confidence": prob.item() * 100}
            for idx, prob in zip(top3_indices[0], top3_probs[0])
        ]
        
        return JSONResponse(content={"predictions": predictions})
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing image: {str(e)}")

@app.get("/")
async def root():
    """
    Root endpoint with basic API information
    """
    return {
        "message": "Art Style Prediction API",
        "version": "1.0.0",
        "endpoint": "/predict",
        "description": "Upload an image to get top-3 art style predictions"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)