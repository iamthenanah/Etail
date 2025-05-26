export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Emily Carter",
    role: "Product Manager at Acme",
    content:
      "Etail has transformed the way we run our online store. The UI is clean, and the features are exactly what we needed.",
    avatar: "/avatars/emily.jpg",
  },
  {
    name: "John Smith",
    role: "Founder of StartupX",
    content:
      "We doubled our conversions within a month of using Etail. It’s fast, responsive, and easy to use.",
    avatar: "/avatars/john.jpg",
  },
];
