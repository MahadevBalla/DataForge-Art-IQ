"use client";

import { title } from "@/components/primitives";
import { Card, CardBody, Button, Image, Divider, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { Github, Info, Cpu, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto py-8 md:py-16 px-4 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <h1 className={`${title()} text-center text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent px-2`}>
          About Art Style Predictor
        </h1>
        <p className="text-center text-default-600 max-w-2xl mx-auto mb-8 md:mb-12 text-base md:text-lg px-4">
          Discover the artistic soul of your images with my AI-powered art style prediction tool, built to identify styles from Romanticism to Primitivism with cutting-edge deep learning.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-full"
        >
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm h-full">
            <CardBody className="p-6 md:p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <Info className="w-6 h-6 md:w-8 md:h-8 text-primary-500 flex-shrink-0" />
                <h2 className="text-xl md:text-2xl font-bold text-primary-700">What This Does</h2>
              </div>
              <div className="flex-grow">
                <p className="text-default-600 mb-4 text-sm md:text-base leading-relaxed">
                  This app analyzes your uploaded artwork to predict its artistic style, leveraging a ResNet50 model trained on the WikiArt dataset. Upload an image, and the model identifies the top-3 styles (e.g., Baroque, Expressionism) with confidence scores.
                </p>
              </div>
              <div className="mt-auto">
                <Chip color="primary" variant="flat" size="sm">AI-Powered Art Analysis</Chip>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full h-full"
        >
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm h-full">
            <CardBody className="p-6 md:p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <Cpu className="w-6 h-6 md:w-8 md:h-8 text-primary-500 flex-shrink-0" />
                <h2 className="text-xl md:text-2xl font-bold text-primary-700">How It Works</h2>
              </div>
              <div className="flex-grow">
                <p className="text-default-600 mb-4 text-sm md:text-base leading-relaxed">
                  The frontend, built with <strong>Next.js</strong> and <strong>HeroUI</strong>, provides an interface for image uploads. It communicates with a <strong>FastAPI</strong> backend, which uses a PyTorch ResNet50 model fine-tuned on 13 art styles from the WikiArt dataset.
                </p>
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  <Chip color="secondary" variant="flat" size="sm">Next.js</Chip>
                  <Chip color="secondary" variant="flat" size="sm">FastAPI</Chip>
                  <Chip color="secondary" variant="flat" size="sm">PyTorch</Chip>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full h-full"
        >
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm h-full">
            <CardBody className="p-6 md:p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <ImageIcon className="w-6 h-6 md:w-8 md:h-8 text-primary-500 flex-shrink-0" />
                <h2 className="text-xl md:text-2xl font-bold text-primary-700">Dataset</h2>
              </div>
              <div className="flex-grow">
                <p className="text-default-600 mb-4 text-sm md:text-base leading-relaxed">
                  This model was trained on the <strong>WikiArt</strong> dataset, featuring over 30,000 images across 13 art styles, including Romanticism, Renaissance, and Japanese Art. This diverse dataset ensures robust predictions for a wide range of artistic expressions.
                </p>
              </div>
              <div className="mt-auto">
                <Chip color="primary" variant="flat" size="sm">WikiArt Dataset</Chip>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full h-full"
        >
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm h-full">
            <CardBody className="p-6 md:p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 md:gap-4 mb-4">
                <Github className="w-6 h-6 md:w-8 md:h-8 text-primary-500 flex-shrink-0" />
                <h2 className="text-xl md:text-2xl font-bold text-primary-700">Get Involved</h2>
              </div>
              <div className="flex-grow">
                <p className="text-default-600 mb-4 text-sm md:text-base leading-relaxed">
                  Curious about the code? Check out my repository on GitHub or try analyzing your own artwork on the Analyze page!
                </p>
              </div>
              <div className="mt-auto">
                <Button
                  as={Link}
                  href="/analyze"
                  color="primary"
                  radius="full"
                  size="md"
                  className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:scale-105 transition-transform duration-300"
                >
                  Try It Now
                </Button>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}