"use client";

import { Button, Card, CardBody, Image, Divider, Progress } from "@heroui/react";

export default function AnalyzePage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <h1 className="text-4xl font-bold text-center mb-4">Analyze Your Artwork</h1>
            <p className="text-center text-default-500 mb-12 max-w-2xl mx-auto">
                Upload your artwork to discover its artistic style influences and composition analysis.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <Card className="p-6 border-2 border-dashed border-default-200 bg-default-50">
                    <CardBody className="items-center justify-center min-h-[400px] flex flex-col gap-4">
                        <div className="rounded-full bg-default-100 p-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-default-500">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold">Drop your artwork here</h3>
                        <p className="text-default-500 text-center mb-4">
                            Supports JPG, PNG, WEBP files. Max file size: 10MB.
                        </p>
                        <Button color="primary" radius="full">
                            Browse Files
                        </Button>
                    </CardBody>
                </Card>

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
                                    Our advanced AI analyzes your artwork's composition, color palette, brushwork, and more.
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
                                    Get comprehensive insights about your artwork's style, influences, and composition.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <h2 className="text-3xl font-bold text-center mb-12">Sample Analysis Results</h2>

                <Card className="max-w-5xl mx-auto">
                    <CardBody className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6">
                                <Image
                                    src="images\art-styles\impressionism.jpg"
                                    alt="Sample artwork"
                                    className="rounded-lg w-full h-auto"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-4">Style Analysis</h3>

                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-medium">Impressionism</span>
                                            <span>72%</span>
                                        </div>
                                        <Progress value={72} color="primary" className="h-2" />
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-medium">Post-Impressionism</span>
                                            <span>48%</span>
                                        </div>
                                        <Progress value={48} color="secondary" className="h-2" />
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-medium">Expressionism</span>
                                            <span>35%</span>
                                        </div>
                                        <Progress value={35} color="success" className="h-2" />
                                    </div>

                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-medium">Fauvism</span>
                                            <span>23%</span>
                                        </div>
                                        <Progress value={23} color="warning" className="h-2" />
                                    </div>
                                </div>

                                <Divider className="my-6" />

                                <div>
                                    <h4 className="font-semibold mb-2">Analysis Summary</h4>
                                    <p className="text-default-500">
                                        This artwork shows strong Impressionist influences with its visible brushstrokes
                                        and focus on light. Elements of Post-Impressionism appear in the bold color
                                        choices and slight distortion of forms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
