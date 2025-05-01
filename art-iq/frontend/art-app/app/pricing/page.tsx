"use client";

import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@heroui/react";
import { CheckIcon } from "@heroicons/react/24/solid";


export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for hobbyists and beginners",
      features: [
        "5 style analyses per month",
        "Basic style identification",
        "Limited result history (7 days)",
        "Email support"
      ],
      buttonText: "Get Started",
      buttonColor: "default",
      popular: false
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      description: "For dedicated artists seeking deeper insights",
      features: [
        "50 style analyses per month",
        "Detailed style breakdown",
        "Historical influence detection",
        "Unlimited result history",
        "Priority email support",
        "Style comparison tools"
      ],
      buttonText: "Upgrade to Pro",
      buttonColor: "primary",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$29.99",
      period: "per month",
      description: "For art schools, galleries and professional studios",
      features: [
        "Unlimited style analyses",
        "Advanced AI insights",
        "Custom style detection training",
        "Bulk upload capabilities",
        "API access",
        "Dedicated account manager",
        "24/7 priority support"
      ],
      buttonText: "Contact Sales",
      buttonColor: "secondary",
      popular: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-default-500 max-w-2xl mx-auto">
          Choose the plan that fits your artistic journey. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`h-full ${plan.popular ? 'border-2 border-primary shadow-lg scale-105' : 'border border-default-200'}`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0">
                <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader className="flex flex-col gap-2 pb-0">
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-small text-default-500 ml-1">/{plan.period}</span>
                )}
              </div>
              <p className="text-default-500 mt-2">{plan.description}</p>
            </CardHeader>
            <Divider className="my-4" />
            <CardBody className="py-4">
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-primary flex-shrink-0 mr-3 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <Button
                color={plan.buttonColor as any}
                size="lg"
                radius="md"
                className="w-full font-medium"
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-content1/50">
            <CardBody>
              <h3 className="text-xl font-semibold mb-2">Can I change plans later?</h3>
              <p className="text-default-500">
                Yes, you can upgrade, downgrade, or cancel your subscription at any time.
                Changes take effect at the start of your next billing cycle.
              </p>
            </CardBody>
          </Card>
          <Card className="bg-content1/50">
            <CardBody>
              <h3 className="text-xl font-semibold mb-2">How accurate are the style analyses?</h3>
              <p className="text-default-500">
                Our AI is trained on thousands of artworks across hundreds of styles.
                While accuracy varies by style, most analyses provide 85-95% accuracy for common styles.
              </p>
            </CardBody>
          </Card>
          <Card className="bg-content1/50">
            <CardBody>
              <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-default-500">
                We accept all major credit cards, PayPal, and select regional payment methods.
                Enterprise plans can also be paid via invoice.
              </p>
            </CardBody>
          </Card>
          <Card className="bg-content1/50">
            <CardBody>
              <h3 className="text-xl font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-default-500">
                We offer a 14-day money-back guarantee for new subscribers.
                If you're not satisfied, contact our support team within 14 days of your initial purchase.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="mt-24 text-center bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 p-12 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Ready to discover your artistic style?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of artists who have deepened their understanding of their work through ArtIQ's style analysis.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button color="primary" size="lg" radius="full">
            Get Started For Free
          </Button>
          <Button variant="bordered" color="primary" size="lg" radius="full">
            Checkout styles
          </Button>
        </div>
      </div>
    </div>
  );
}