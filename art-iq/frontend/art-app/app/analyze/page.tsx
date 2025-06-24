"use client";

import { useState, useRef } from "react";
import { Button, Card, CardBody, Image, Divider, Progress } from "@heroui/react";

export default function AnalyzePage() {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [dragActive, setDragActive] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [predictions, setPredictions] = useState<
        { style: string; confidence: number }[] | null
    >(null);

    // File validation
    function validateFile(selectedFile: File): boolean {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        if (!validTypes.includes(selectedFile.type)) {
            alert("Please select a valid image file (JPG, PNG, or WEBP).");
            return false;
        }

        if (selectedFile.size > 10 * 1024 * 1024) {
            alert("File size exceeds 10MB limit.");
            return false;
        }

        return true;
    }

    // Upload handler
    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const selectedFile = e.target.files?.[0] ?? null;
        if (selectedFile && validateFile(selectedFile)) {
            setFile(selectedFile);
            setPredictions(null);
            setError(null);
        }
        // Reset input value to allow selecting the same file again
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }

    // Handle drag events
    function handleDrag(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    }

    // Handle drop
    function handleDrop(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const droppedFile = e.dataTransfer.files[0];
            if (validateFile(droppedFile)) {
                setFile(droppedFile);
                setPredictions(null);
                setError(null);
            }
        }
    }

    // Trigger file input click
    function handleBrowseClick() {
        fileInputRef.current?.click();
    }

    // Submit handler to send file to backend API
    async function handleAnalyze() {
        if (!file) return;
        setLoading(true);
        setError(null);
        const formData = new FormData();
        formData.append("file", file);
        try {
            const res = await fetch("http://localhost:8000/predict", {
                method: "POST",
                body: formData,
            });
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            const data = await res.json();
            setPredictions(data.predictions);
        } catch (error: any) {
            setError(error.message || "Error analyzing artwork. Try again.");
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="container mx-auto py-6 px-4 bg-gradient-to-b from-background to-primary-100">
            <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Analyze Your Artwork</h1>
            <p className="text-center text-default-500 mb-12 max-w-2xl mx-auto">
                Upload your artwork to discover its artistic style influences and composition
                analysis.
            </p>

            <div className="max-w-6xl mx-auto">
                {/* Upload Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    <div className="space-y-6">
                        <Card
                            className={`p-6 border-2 border-dashed bg-default-50 transition-colors cursor-pointer ${dragActive ? 'border-primary bg-primary-50' : 'border-default-200'
                                }`}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                            onClick={handleBrowseClick}
                        >
                            <CardBody className="items-center justify-center min-h-[300px] flex flex-col gap-4">
                                <div className="rounded-full bg-default-100 p-6">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="48"
                                        height="48"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="text-default-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold">Drop your artwork here</h3>
                                <p className="text-default-500 text-center">
                                    Supports JPG, PNG, WEBP files. Max file size: 10MB.
                                </p>

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </CardBody>
                        </Card>

                        <div className="space-y-4">
                            <Button
                                color="primary"
                                radius="full"
                                className="w-full"
                                onClick={handleBrowseClick}
                            >
                                {file ? "Change File" : "Browse Files"}
                            </Button>

                            {file && (
                                <p className="text-center text-default-600 text-sm truncate">
                                    Selected file: {file.name}
                                </p>
                            )}

                            {error && (
                                <p className="text-center text-danger text-sm">
                                    {error}
                                </p>
                            )}

                            <Button
                                color="primary"
                                radius="full"
                                className="w-full"
                                disabled={!file || loading}
                                onClick={handleAnalyze}
                            >
                                {loading ? "Analyzing..." : "Analyze Artwork"}
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-6">How It Works</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary-500 font-semibold">1</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Upload Your Artwork</h4>
                                    <p className="text-default-500">
                                        Drag and drop or browse to upload your artwork in JPG, PNG, or WEBP format.
                                    </p>
                                </div>
                            </div>

                            <Divider className="my-6" />

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary-500 font-semibold">2</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">AI Analysis</h4>
                                    <p className="text-default-500">
                                        Our advanced AI analyzes your artwork's composition, color palette, brushwork, and
                                        more.
                                    </p>
                                </div>
                            </div>

                            <Divider className="my-6" />

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                                    <span className="text-primary-500 font-semibold">3</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">View Detailed Results</h4>
                                    <p className="text-default-500">
                                        Get comprehensive insights about your artwork's style, influences, and
                                        composition.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Preview and Analysis*/}
                {file && (
                    <div className="mt-12">
                        <h2 className="text-3xl font-bold text-center mb-8">Preview & Analysis</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Image Preview */}
                            <Card className="p-6">
                                <CardBody className="p-0">
                                    <div className="flex flex-col items-center">
                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt="Uploaded artwork preview"
                                            className="rounded-lg w-full h-auto max-h-[400px] object-contain shadow-lg"
                                        />
                                        <p className="mt-4 text-sm text-default-600 text-center font-medium">
                                            {file.name}
                                        </p>
                                    </div>
                                </CardBody>
                            </Card>

                            {/* Analysis Results */}
                            <Card className="p-6">
                                <CardBody className="p-0">
                                    <h3 className="text-2xl font-semibold mb-6">Style Analysis</h3>

                                    <div className="space-y-6">
                                        {predictions ? (
                                            predictions.map(({ style, confidence }) => (
                                                <div key={style}>
                                                    <div className="flex justify-between mb-2">
                                                        <span className="font-medium text-lg">{style}</span>
                                                        <span className="font-semibold text-primary-600">{confidence}%</span>
                                                    </div>
                                                    <Progress
                                                        value={confidence}
                                                        color="primary"
                                                        className="h-3"
                                                    />
                                                </div>
                                            ))
                                        ) : (
                                            <>
                                                <div>
                                                    <div className="flex justify-between mb-2">
                                                        <span className="font-medium text-lg">Impressionism</span>
                                                        <span className="font-semibold text-primary-600">72%</span>
                                                    </div>
                                                    <Progress value={72} color="primary" className="h-3" />
                                                </div>

                                                <div>
                                                    <div className="flex justify-between mb-2">
                                                        <span className="font-medium text-lg">Post-Impressionism</span>
                                                        <span className="font-semibold text-secondary-600">48%</span>
                                                    </div>
                                                    <Progress value={48} color="secondary" className="h-3" />
                                                </div>

                                                <div>
                                                    <div className="flex justify-between mb-2">
                                                        <span className="font-medium text-lg">Expressionism</span>
                                                        <span className="font-semibold text-success-600">35%</span>
                                                    </div>
                                                    <Progress value={35} color="success" className="h-3" />
                                                </div>

                                                <div>
                                                    <div className="flex justify-between mb-2">
                                                        <span className="font-medium text-lg">Fauvism</span>
                                                        <span className="font-semibold text-warning-600">23%</span>
                                                    </div>
                                                    <Progress value={23} color="warning" className="h-3" />
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <Divider className="my-8" />

                                    <div>
                                        <h4 className="font-semibold text-xl mb-4">Analysis Summary</h4>
                                        <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
                                            <p className="text-default-700 leading-relaxed">
                                                {predictions
                                                    ? "This artwork shows a unique blend of artistic styles based on our AI analysis. The confidence scores above indicate the likelihood of each style influence in your piece."
                                                    : "Click 'Analyze Artwork' to see detailed analysis results. Our AI will identify artistic styles, influences, and provide comprehensive insights about the composition, color palette, and brushwork techniques."}
                                            </p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}