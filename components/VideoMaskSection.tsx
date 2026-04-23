// "use client";

// import { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
// } from "framer-motion";

// export default function VideoMaskSection() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   // Fade in white overlay
//   const overlayOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

//   // Text reveal scale
//   const textScale = useTransform(scrollYProgress, [0.2, 0.6], [0.8, 1]);

//   // Video slight zoom for depth
//   const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

//   return (
//     <section ref={ref} className="h-[200vh] relative bg-black">

//       {/* Sticky container */}
//       <div className="sticky top-0 h-screen overflow-hidden">

//         {/* VIDEO */}
//         <motion.video
//           style={{ scale: videoScale }}
//           className="absolute inset-0 w-full h-full object-cover"
//           autoPlay
//           muted
//           loop
//           playsInline
//         >
//           <source src="../video/software.mp4" type="video/mp4" />
//         </motion.video>

//         {/* WHITE OVERLAY */}
//         <motion.div
//           style={{ opacity: overlayOpacity }}
//           className="absolute inset-0 bg-white"
//         />

//         {/* MASKED TEXT OVER VIDEO */}
//         <div className="absolute inset-0 flex items-center justify-center">

//           <motion.h1
//             style={{ scale: textScale }}
//             className="text-center text-5xl md:text-7xl font-bold leading-tight px-6
//                        text-transparent bg-clip-text bg-white mix-blend-difference"
//           >
//             Embrace the future of urban mobility
//           </motion.h1>

//         </div>

//       </div>
//     </section>
//   );
// }



"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function VideoMaskSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const sheetY = useTransform(scrollYProgress, [0, 0.6], ["100%", "0%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="h-[200vh] relative bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* 🎥 VIDEO */}
        <motion.video
          style={{ scale: videoScale }}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/software.mp4" type="video/mp4" />
        </motion.video>

        {/* ⚪ WHITE SHEET */}
        <motion.div
          style={{ y: sheetY }}
          className="absolute inset-0 z-10"
        >
          <svg
            viewBox="0 0 1000 600"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="cutout-mask">
                {/* White = visible */}
                <rect width="100%" height="100%" fill="white" />

                {/* Black = transparent cutout */}
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="120"
                  fontWeight="800"
                  fontFamily="Poppins, sans-serif"
                  fill="black"
                >
                  <tspan x="50%" dy="-0.6em">
                    Embrace the future of
                  </tspan>
                  <tspan x="50%" dy="1.2em">
                    urban mobility
                  </tspan>
                </text>
              </mask>
            </defs>

            {/* White overlay with cutout */}
            <rect
              width="100%"
              height="100%"
              fill="white"
              mask="url(#cutout-mask)"
            />
          </svg>
        </motion.div>

      </div>
    </section>
  );
}