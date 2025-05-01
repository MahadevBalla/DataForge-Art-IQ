"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-primary-50 py-20 md:py-32">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Analyze Your Art with{" "}
                        <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                            AI Precision
                        </span>
                    </h1>
                    <p className="text-xl mb-10 text-default-700 max-w-2xl">
                        Discover the artistic style of your creations with our advanced AI
                        technology that analyzes composition, color theory, and technique.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            as={Link}
                            href="/analyze"
                            size="lg"
                            color="primary"
                            radius="full"
                            className="font-medium px-8"
                        >
                            Analyze Your Art
                        </Button>
                        <Button
                            as={Link}
                            href="/styles"
                            size="lg"
                            variant="bordered"
                            radius="full"
                            className="font-medium px-8"
                        >
                            Explore Art Styles
                        </Button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
}
