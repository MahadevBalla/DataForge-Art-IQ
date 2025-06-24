# Art-IQ Backend

The **Art-IQ Backend** is a FastAPI application that provides a RESTful API for predicting art styles from uploaded images using a pretrained ResNet50 model. It processes images and returns the top-3 predicted art styles with confidence scores.

## 📂 Directory Structure

```plaintext
backend/
├── best_model_epoch_10.pth  # Pretrained ResNet50 model checkpoint
├── main.py                  # FastAPI application
├── pyproject.toml           # Dependency configuration for uv
├── uv.lock                  # Dependency lock file
└── README.md                # This file
```

## 🛠️ Prerequisites

- Python 3.11+
- PyTorch and torchvision
- CUDA-enabled GPU (Optional)
- uv (Python dependency manager)

## 🚀 Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   uv sync
   ```

3. Download the pretrained model (`best_model_epoch_10.pth`) from [this Kaggle Notebook](https://www.kaggle.com/code/mahadevballa/art-iq) and place it in the `backend` directory.

4. Run the FastAPI server:
   ```bash
   uv run main.py
   ```

   The API will be available at `http://localhost:8000`.

## 🌐 API Endpoints

- **GET /**: Returns API information.
  ```json
  {
    "message": "Art Style Prediction API",
    "version": "1.0.0",
    "endpoint": "/predict",
    "description": "Upload an image to get top-3 art style predictions"
  }
  ```

- **POST /predict**: Predicts top-3 art styles for an uploaded image.
  - **Request**: Multipart form-data with `file` (jpg, jpeg, png).
  - **Response**: JSON with top-3 predictions.
  - **Example**:
    ```bash
    curl -X POST -F "file=@path/to/image.jpg" http://localhost:8000/predict
    ```
    ```json
    {
      "predictions": [
        {"style": "Primitivism", "confidence": 36.11},
        {"style": "Symbolism", "confidence": 23.08},
        {"style": "Realism", "confidence": 11.29}
      ]
    }
    ```

## 🧠 Model Details

- **Architecture**: ResNet50 with a custom fully connected layer (`512 -> 14 classes`).
- **Training Data**: WikiArt dataset with 14 art styles (e.g., Romanticism, Renaissance, Realism, Other).
- **Preprocessing**: Images resized to 224x224, normalized with ImageNet mean (`[0.485, 0.456, 0.406]`) and std (`[0.229, 0.224, 0.225]`).