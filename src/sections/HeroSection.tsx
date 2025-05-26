"use client";
import Lottie from "lottie-react";
import animationData from "@/assets/animations/animation.json";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <section className="relative w-full py-15 px-10 text-center md:px-24 lg:flex lg:items-center">
      <div className="absolute inset-0 -z-10 lg:pl-[38rem] ">
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid justify-items-center gap-6 text-center w-full md:text-start md:gap-4 md:justify-items-start lg:w-1/2">
        <h1 className="relative text-4xl md:text-5xl lg:text-[3.3rem] w-full font-bold mb-6 text-black">
          Grow your brand with smart analytics
        </h1>
        <p className="relative text-[18px] lg:text-xl w-full text-gray-800 mb-8">
          Track customer behavior, analyze performance, and make data-driven
          decisions with ease.
        </p>
        <div className="flex gap-2 ">
          <button className="cursor-pointer relative px-6 py-3 bg-[#ff8e3a] text-white rounded-full font-semibold hover:bg-gray-800 transition">
            Try it free
          </button>
          <button
            onClick={handleLoginClick}
            className="cursor-pointer relative px-6 py-3 bg-gray-800 text-white rounded-full font-semibold"
          >
            Log in
          </button>
        </div>
      </div>
    </section>
  );
}
