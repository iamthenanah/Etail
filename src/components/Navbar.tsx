"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-5 px-6 md:px-12 flex items-center justify-between bg-white shadow-sm relative z-50">
      <div className="text-2xl font-bold text-gray-900">Etail</div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-900 z-50"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div className="hidden md:flex gap-12 items-center">
        <nav className="flex gap-10 text-gray-700 font-medium">
          <Link href="#features" className="hover:text-[#ff8e3a]">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-[#ff8e3a]">
            Pricing
          </Link>
          <Link href="#testimonials" className="hover:text-[#ff8e3a]">
            Testimonials
          </Link>
          <Link href="#faq" className="hover:text-[#ff8e3a]">
            FAQ
          </Link>
        </nav>
        <Link
          href="#"
          className="px-5 py-2 rounded-full bg-black text-white font-semibold hover:bg-[#ff8e3a] transition"
        >
          Get Started
        </Link>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 gap-6 md:hidden animate-slide-down">
          <Link
            href="#features"
            className="hover:text-[#ff8e3a] text-gray-800 font-medium"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="hover:text-[#ff8e3a] text-gray-800 font-medium"
          >
            Pricing
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-[#ff8e3a] text-gray-800 font-medium"
          >
            Testimonials
          </Link>
          <Link
            href="#faq"
            className="hover:text-[#ff8e3a] text-gray-800 font-medium"
          >
            FAQ
          </Link>
          <Link
            href="#"
            className="px-5 py-2 rounded-full bg-black text-white font-semibold hover:bg-[#ff8e3a] transition"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
