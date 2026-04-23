"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScrollSection() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // LOCK SCROLL
    document.body.style.overflow = "hidden";

    let start = 0;
    const speed = 1.2; // increase for faster loading

    const interval = setInterval(() => {
      start += speed;

      if (start >= 100) {
        start = 100;
        setDone(true);

        // UNLOCK SCROLL
        document.body.style.overflow = "auto";

        clearInterval(interval);
      }

      setCount(Math.floor(start));
    }, 20); // smooth speed

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (done) return null;

  return (
    <div className="fixed inset-0 bg-black text-white z-50 flex flex-col justify-center items-center overflow-hidden">

      {/* TOP LOADING BAR */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
        <div
          className="h-full bg-white transition-all duration-100"
          style={{ width: `${count}%` }}
        />
      </div>

      {/* CENTER TEXT */}
      <div className="text-4xl md:text-6xl font-bold text-center">
        {count < 50 ? "We build apps" : "We build websites"}
      </div>

      {/* BOTTOM RIGHT COUNTER */}
      <div className="absolute bottom-10 right-10 text-3xl font-mono">
        {count.toString().padStart(2, "0")}
      </div>

    </div>
  );
}