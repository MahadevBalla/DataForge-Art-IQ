# Art-IQ: Art Style Prediction and Transformation

**Art-IQ** is a full-stack web application that enables users to upload images to predict art styles using a deep learning model and transform images into various artistic styles. The project integrates a FastAPI backend for model inference and a Next.js frontend for a seamless user experience.

## Overview

The application leverages a pretrained ResNet50 model fine-tuned on the WikiArt dataset to classify images into 14 art styles (e.g., Romanticism, Renaissance, Realism). It also supports style transformation (e.g., Studio Ghibli style) using datasets like the Ghibli dataset. The frontend, built with Next.js and Tailwind CSS, provides an intuitive interface for users to interact with these features.

## Project Structure

```plaintext
art-iq/
├── backend/                # FastAPI backend for model inference
│   ├── best_model_epoch_10.pth  # Pretrained model checkpoint
│   ├── main.py             # FastAPI application
│   ├── pyproject.toml      # Dependency configuration
│   ├── uv.lock             # Dependency lock file
│   └── README.md           # Backend documentation
├── frontend/               # Frontend directory
│   └── art-app/           # Next.js application
│       ├── app/           # Pages and layouts
│       ├── components/    # React components
│       ├── public/        # Static assets
│       ├── styles/        # CSS styles
│       ├── config/        # Configuration files
│       ├── types/         # TypeScript types
│       └── README.md      # Frontend documentation
└── README.md              # General project overview
```

## Features

- **Art Style Prediction**: Upload images to predict the top-3 art styles with confidence scores.
- **Responsive UI**: Modern, mobile-friendly interface built with Next.js and Tailwind CSS.
- **RESTful API**: FastAPI backend with endpoints for predictions and transformations.

## Prerequisites

- **Python 3.11+**: For the backend.
- **Node.js 18+**: For the frontend.
- **PyTorch and torchvision**: For model inference.
- **CUDA-enabled GPU** (optional): For faster inference.
- **uv**: Python dependency manager.
- **npm**: Node.js package manager.

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/MahadevBalla/DataForge-Art-IQ
cd art-iq
```

### Backend Setup

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

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend/art-app
   ```

2. Install dependencies:
   ```bash
   npm i
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:3000`.

## Usage

1. Open `http://localhost:3000` in a browser.
2. Navigate to the **Analyze** page to upload an image and view top-3 art style predictions.
4. Explore the **Styles** and **About** pages for additional details.

## API Endpoints

- **GET /**: Returns API information.
  ```json
  {
    "message": "Art Style Prediction API",
    "version": "1.0.0",
    "endpoint": "/predict",
    "description": "Upload an image to get top-3 art style predictions"
  }
  ```

- **POST /predict**: Upload an image for top-3 art style predictions.
  - **Request**: Multipart form-data with `file` (jpg, jpeg, png).
  - **Response**: JSON with predictions.
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

## Technologies Used

- **Backend**:
  - FastAPI: RESTful API framework.
  - PyTorch: Deep learning framework for model inference.
- **Frontend**:
  - Next.js: React framework for server-side rendering.
  - Tailwind CSS: Utility-first CSS framework.
- **Model**:
  - ResNet50: Fine-tuned on WikiArt dataset for style classification.
  - Style Transfer: Based on datasets like Ghibli (if implemented).

## Dataset Sources

- [**WikiArt Dataset**](https://www.kaggle.com/datasets/wikiart/wikiart-art-movementsstyles)
- [**Real-to-Ghibli Paired Dataset**](https://www.kaggle.com/datasets/splcher/real-to-ghibli-image-dataset-5k-paired-images)
