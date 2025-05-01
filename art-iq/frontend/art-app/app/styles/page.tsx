"use client"

import React from 'react';
import { Card, CardBody, CardFooter, Button } from '@heroui/react';
import Link from 'next/link';

export default function StylesPage() {
    const artStyles = [
        {
            name: "Renaissance",
            description: "Characterized by balance, harmony, and the revival of classical learning",
            image: "/images/art-styles/renaissance.jpg",
        },
        {
            name: "Impressionism",
            description: "Focuses on capturing light and color in the moment rather than exact details",
            image: "/images/art-styles/impressionism.jpg",
        },
        {
            name: "Cubism",
            description: "Depicts objects from multiple viewpoints simultaneously",
            image: "/images/art-styles/cubism.jpg",
        },
        {
            name: "Surrealism",
            description: "Combines dreamlike imagery with realistic elements",
            image: "/images/art-styles/surrealism.jpg",
        },
    ];

    return (
        <div className="max-w-[100%] mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-center mb-16 text-4xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Explore Art Styles
            </h1>

            <div className="flex flex-wrap justify-center gap-6">
                {artStyles.map((style) => (
                    <Card
                        key={style.name}
                        className="border-none shadow-md flex-grow-0 flex-shrink-0 basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(25%-18px)] flex-wrap relative rounded-lg">
                        <CardBody className="overflow-hidden p-0">
                            <img
                                className="w-full h-56 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                                src={style.image}
                                alt={style.name}
                            />
                        </CardBody>
                        <CardFooter className="flex flex-col items-start bg-white dark:bg-gray-800 bg-opacity-95 absolute bottom-0 w-full border-t-1 border-zinc-100/50">
                            <h3 className="text-xl font-semibold text-slate-900">{style.name}</h3>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{style.description}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <Link href="/analyze">
                    <Button variant="bordered" color="primary" size="lg">
                        Analyze Your Art
                    </Button>
                </Link>
            </div>
        </div>
    );
}