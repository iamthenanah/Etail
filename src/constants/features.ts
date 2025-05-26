import { ShieldCheck, ShoppingCart, Truck } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export const features: Feature[] = [
  {
    title: "Secure Payments",
    description: "All transactions are encrypted and protected.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Delivery",
    description: "We deliver your order in under 24 hours.",
    icon: Truck,
  },
  {
    title: "Easy Shopping",
    description: "A seamless and smooth shopping experience.",
    icon: ShoppingCart,
  },
];
