# Art-IQ Frontend

The **Art-IQ Frontend** is a Next.js application built with TypeScript and Tailwind CSS, providing an interface for uploading images, viewing art style predictions, and applying style transformations. It communicates with the FastAPI backend to process images.

## 📂 Directory Structure

```plaintext
art-app/
├── app/                    # Next.js app directory
│   ├── about/              # About page
│   ├── analyze/            # Art style prediction page
│   ├── styles/             # Styles page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── providers.tsx       # Context providers
├── components/             # Reusable React components
│   ├── sections/           # Hero and feature sections
│   ├── DropzoneButton.tsx  # Image upload component
│   ├── navbar.tsx          # Navigation bar
│   └── theme-switch.tsx    # Theme toggle
├── public/                 # Static assets (images, favicon)
├── styles/                 # Global CSS
├── config/                 # Fonts and site metadata
├── types/                  # TypeScript types
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## 🛠️ Prerequisites

- Node.js 18+
- npm
- Backend API running at `http://localhost:8000`

## 🚀 Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend/art-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Ensure the backend API is running at `http://localhost:8000`.

4. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:3000`.

## ✨ Features

- **Home Page**: Introduces Art-IQ with a hero section and features overview.
- **Analyze Page**: Upload images to get top-3 art style predictions.
- **Analyze Page**: Upload images to get top-3 art style predictions.
- **About Page**: Project and team information.
- **Theme Switch**: Light/dark mode toggle.

## 📋 Usage

1. Open `http://localhost:3000` in a browser.
2. Go to the **Analyze** page to upload an image and view predictions.
4. Explore **Styles** and **About** pages for more information.

## ⚙️ Configuration

- **API Endpoint**: The frontend assumes the backend is at `http://localhost:8000`.
- **Styling**: Customize Tailwind CSS in `tailwind.config.js`.
- **Fonts**: Configure fonts in `config/fonts.ts`.