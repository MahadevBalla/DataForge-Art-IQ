"use client"

import { Card, CardBody, CardFooter, Image } from "@heroui/react";

export default function Features() {
    const artStyles = [
        {
            name: "Renaissance",
            description: "Balance, perspective, and realistic human forms",
            image: "/images/art-styles/renaissance.jpg",
        },
        {
            name: "Impressionism",
            description: "Light, movement, and atmospheric effects",
            image: "/images/art-styles/impressionism.jpg",
        },
        {
            name: "Cubism",
            description: "Multiple viewpoints, geometric fragmentation",
            image: "/images/art-styles/cubism.jpg",
        },
        {
            name: "Art Nouveau",
            description: "Organic forms, flowing lines, and natural motifs",
            image: "/images/art-styles/art-nouveau.jpg",
        },
    ];

    return (
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4">
                    Art Styles We Detect
                </h2>
                <p className="text-center text-default-500 mb-12 max-w-2xl mx-auto">
                    Our AI can identify over 50+ artistic styles and movements, helping you
                    understand your artistic influences.
                </p>
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
            </div>
        </section>
    );
}
