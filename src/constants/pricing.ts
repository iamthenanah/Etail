export interface Plan {
  title: string;
  price: string;
  description: string;
  features: string[];
  isRecommended?: boolean;
}

export const pricing: Plan[] = [
  {
    title: "Starter",
    price: "$19",
    description: "Best for personal projects and small teams.",
    features: ["Basic analytics", "Email support", "10 projects"],
  },
  {
    title: "Pro",
    price: "$39",
    description: "Perfect for growing businesses.",
    features: ["Advanced analytics", "Priority support", "Unlimited projects"],
    isRecommended: true,
  },
  {
    title: "Enterprise",
    price: "Contact us",
    description: "Custom solutions for large organizations.",
    features: ["Custom integrations", "Dedicated support", "Unlimited users"],
  },
];
