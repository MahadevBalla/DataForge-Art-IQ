"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Brush } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-primary-100 py-24 md:py-36">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5 bg-cover animate-slow-scroll" />
            <div className="container mx-auto px-4">
                <motion.div
                    className="flex flex-col items-center text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Analyze Your Art with{" "}
                        <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                            AI Precision
                        </span>
                    </h1>
                    <p className="text-xl mb-10 text-default-700 max-w-2xl">
                        Uncover the artistic style of your creations with our ResNet50 model trained on the WikiArt dataset.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Button
                                as={Link}
                                href="/analyze"
                                size="lg"
                                color="primary"
                                radius="full"
                                className="font-medium px-8 bg-gradient-to-r from-primary-500 to-secondary-500"
                            >
                                Analyze Your Art
                            </Button>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Button
                                as={Link}
                                href="/styles"
                                size="lg"
                                variant="bordered"
                                radius="full"
                                className="font-medium px-8 border-primary-500 text-primary-500"
                            >
                                Explore Art Styles
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
}