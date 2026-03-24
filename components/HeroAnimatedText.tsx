
"use client";
import { useEffect, useState } from "react";

export default function HeroAnimatedText() {
  const words = ["We Build", "Modern", "Digital Experiences"];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % words.length);
    }, 700); // 0.7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/software.png"
          alt="Software Background"
          className="w-full h-full object-cover brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      <div className="relative z-10 max-w-6xl px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white drop-shadow-lg">
          {words.map((word, index) => (
            <span
              key={index}
              className={`transition-colors duration-500 ${
                index === activeIndex ? "text-blue-400" : "text-white"
              }`}
            >
              {word}{" "}
            </span>
          ))}
        </h1>

        <p className="mt-6 text-gray-200 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-sm">
          Techqarin is a software engineering company helping brands
          craft world-class websites, high-performance mobile applications,
          and scalable cloud systems.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          {/* <button className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all duration-300 px-8 py-4 rounded-xl font-semibold text-lg text-white shadow-lg">
            Get a Free Quote
          </button> */}

          {/* <button className="bg-transparent border border-white/50 hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-xl font-semibold text-lg text-white shadow-md">
            Explore Portfolio
          </button> */}
        </div>
      </div>
    </section>
  );
}