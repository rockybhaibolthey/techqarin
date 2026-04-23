// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function ScrollImageSection() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   // Scale animation
//   const scale = useTransform(scrollYProgress, [0, 0.6], [1, 3]);

//   // Move from right → center
//   const x = useTransform(scrollYProgress, [0, 0.6], ["0%", "-50%"]);

//   // Fade text out
//   const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

//   return (
//     <section ref={ref} className="h-[300vh] bg-black text-white">
//       <div className="sticky top-0 h-screen flex items-center justify-between px-10 overflow-hidden">
        
//         {/* LEFT CONTENT */}
//      <motion.div style={{ opacity }} className="w-1/2 space-y-6 z-10">
//   <h1 className="text-5xl font-bold">
//     Build. Launch. Grow.
//   </h1>

//   <h2 className="text-2xl text-gray-400">
//     Websites & Apps for Modern Businesses
//   </h2>

//   <p className="text-lg text-gray-300 max-w-md">
//     From idea to product — we create digital solutions that help you scale.
//   </p>
// </motion.div>

//         {/* IMAGE (starts on right) */}
//         <motion.div
//           style={{ scale, x }}
//           className="w-1/2 flex justify-center items-center"
//         >
//           <img
//             src="/images/techq.png"
//             alt="Scroll Visual"
//             className="w-[400px] h-auto rounded-2xl object-cover"
//           />
//         </motion.div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function ScrollImageSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // 📱 detect screen size
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 🎯 RESPONSIVE animation (same logic, adjusted intensity)
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6],
    isMobile ? [1, 1.6] : [1, 3]
  );

  const x = useTransform(
    scrollYProgress,
    [0, 0.6],
    isMobile ? ["0%", "-10%"] : ["0%", "-50%"]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section ref={ref} className="h-[300vh] bg-black text-white">

      <div className="
        sticky top-0 
        h-screen 
        flex flex-col md:flex-row 
        items-center justify-center md:justify-between 
        px-6 md:px-10 
        pt-24 md:pt-0
        overflow-hidden
      ">

        {/* LEFT CONTENT */}
        <motion.div
          style={{ opacity }}
          className="
            w-full md:w-1/2 
            space-y-4 md:space-y-6 
            z-10 
            text-center md:text-left
          "
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Build. Launch. Grow.
          </h1>

          <h2 className="text-lg md:text-2xl text-gray-400">
            Websites & Apps for Modern Businesses
          </h2>

          <p className="text-sm md:text-lg text-gray-300 max-w-md mx-auto md:mx-0">
            From idea to product — we create digital solutions that help you scale.
          </p>
        </motion.div>

        {/* IMAGE (SAME ANIMATION FOR ALL DEVICES) */}
        <motion.div
          style={{ scale, x }}
          className="
            w-full md:w-1/2 
            flex items-center justify-center 
            mt-8 md:mt-0
          "
        >
          <img
            src={
              isMobile
                ? "/images/techq_mobile.png"
                : "/images/techq.png"
            }
            alt="Scroll Visual"
            className="
              w-[220px] sm:w-[280px] md:w-[400px]
              h-auto 
              rounded-2xl 
              object-cover
              shadow-2xl
            "
          />
        </motion.div>

      </div>
    </section>
  );
}