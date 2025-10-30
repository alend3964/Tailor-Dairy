import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-white text-[#1e3a8a] min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-semibold mb-4 leading-tight">
        Welcome to <br />
        <span className="italic text-6xl font-bold">Saly&apos;s Needlecraft</span>
      </h1>
      <p className="text-lg mb-6 text-[#1e40af]">
        A simple and smart tailoring companion — designed for our boutique.
      </p>
      <button className="bg-[#1e3a8a] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1d4ed8] transition-all">
        Get Started
      </button>
    </section>
  );
}
