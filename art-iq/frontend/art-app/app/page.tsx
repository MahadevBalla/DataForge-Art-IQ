"use client";

import HeroSection from "@/components/sections/hero-section";
import Features from "@/components/sections/features";
import { Button, Card, CardBody, Divider } from "@heroui/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            How ArtIQ Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload Your Art",
                description: "Upload any painting or drawing you want analyzed",
              },
              {
                step: "02",
                title: "AI Analysis",
                description: "Our advanced model analyzes composition, color, and technique",
              },
              {
                step: "03",
                title: "Get Style Insights",
                description: "Receive detailed style analysis with artistic influence detection",
              },
            ].map(({ step, title, description }) => (
              <Card key={step} className="border-none shadow-md">
                <CardBody className="p-6">
                  <div className="rounded-full bg-primary-100 w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-lg font-semibold text-primary-500">{step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-default-500">{description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Features />

      <section className="py-20 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Ready to discover your art's style?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of artists who have unlocked new insights about their work
          </p>
          <Button
            as={Link}
            href="/analyze"
            size="lg"
            radius="full"
            className="bg-white text-purple-700 font-medium px-8"
          >
            Try ArtIQ Now
          </Button>
        </div>
      </section>
    </>
  );
}
