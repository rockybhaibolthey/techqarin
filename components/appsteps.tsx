// "use client";

// import { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   MotionValue,
// } from "framer-motion";

// type Service = {
//   title: string;
//   desc: string;
//   img: string;
// };

// const services: Service[] = [
//   {
//     title: "Turn Ideas into Functional Apps",
//     desc: "We transform your ideas into fully functional, scalable mobile applications tailored to your needs.",
//     img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
//   },
//   {
//     title: "E-commerce Apps",
//     desc: "Robust online store apps with product listings, cart, secure checkout, and payment integration.",
//     img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
//   },
//   {
//     title: "Management Apps",
//     desc: "Efficient management solutions for orders, users, inventory, and business operations.",
//     img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
//   },
//   {
//     title: "AI-Powered Apps",
//     desc: "Smart applications with AI features like chatbots, recommendations, and automation.",
//     img: "https://images.unsplash.com/photo-1677442135136-760c813028c0",
//   },
//   {
//     title: "News Apps",
//     desc: "Real-time news apps with categories, notifications, and personalized content feeds.",
//     img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
//   },
//   {
//     title: "Educational Apps",
//     desc: "Interactive learning apps with courses, quizzes, progress tracking, and user engagement features.",
//     img: "https://wallpaperbat.com/img/374685-free-download-old-library-wallpaper-wall-decor-1500x1000.jpg",
//   },
// ];

// export default function Page() {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <main>
//       <section ref={containerRef} className="relative h-[500vh] bg-black">
//         <div className="sticky top-0 h-screen overflow-hidden">

//           {services.map((service, i) => (
//             <ServiceCard
//               key={i}
//               service={service}
//               index={i}
//               total={services.length}
//               scrollYProgress={scrollYProgress}
//             />
//           ))}

//         </div>
//       </section>
//     </main>
//   );
// }

// /* ✅ CHILD COMPONENT (same file, no hook violations) */
// type CardProps = {
//   service: Service;
//   index: number;
//   total: number;
//   scrollYProgress: MotionValue<number>;
// };
// function ServiceCard({
//   service,
//   index,
//   total,
//   scrollYProgress,
// }: CardProps) {

//   // Each card takes equal scroll chunk
//   const start = index / total;
//   const end = (index + 1) / total;

//   // Slide from bottom
//   const y = useTransform(
//     scrollYProgress,
//     [start, end],
//     ["100%", "0%"]
//   );

//   // Smooth fade
//   const opacity = useTransform(
//     scrollYProgress,
//     [start, start + 0.2],
//     [0, 1]
//   );

//   return (
//     <motion.div
//       style={{ y, opacity, zIndex: index }}
//       className="absolute inset-0"
//     >
//       {/* Background */}
//       <div
//         className="w-full h-full bg-cover bg-center"
//         style={{ backgroundImage: `url(${service.img})` }}
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* Content */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           {service.title}
//         </h1>
//         <p className="max-w-xl text-lg md:text-xl opacity-90">
//           {service.desc}
//         </p>
//       </div>
//     </motion.div>
//   );
// }

// "use client";

// import { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   MotionValue,
// } from "framer-motion";

// type Service = {
//   title: string;
//   desc: string;
//   img: string;
// };

// const services: Service[] = [
//   {
//     title: "Turn Ideas into Functional Apps",
//     desc: "We transform your ideas into fully functional, scalable mobile applications tailored to your needs.",
//     img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
//   },
//   {
//     title: "E-commerce Apps",
//     desc: "Robust online store apps with product listings, cart, secure checkout, and payment integration.",
//     img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
//   },
//   {
//     title: "Management Apps",
//     desc: "Efficient management solutions for orders, users, inventory, and business operations.",
//     img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
//   },
//   {
//     title: "AI-Powered Apps",
//     desc: "Smart applications with AI features like chatbots, recommendations, and automation.",
//     img: "https://images.unsplash.com/photo-1677442135136-760c813028c0",
//   },
//   {
//     title: "News Apps",
//     desc: "Real-time news apps with categories, notifications, and personalized content feeds.",
//     img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
//   },
//   {
//     title: "Educational Apps",
//     desc: "Interactive learning apps with courses, quizzes, progress tracking, and user engagement features.",
//     img: "https://wallpaperbat.com/img/374685-free-download-old-library-wallpaper-wall-decor-1500x1000.jpg",
//   },
// ];

// export default function Page() {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <main>
//       <section
//         ref={containerRef}
//         className="relative"
//         style={{ height: `${(services.length + 1) * 100}vh` }} // +1 for intro
//       >
//         <div className="sticky top-0 h-screen overflow-hidden">

//           {/* 🔥 INTRO SCREEN */}
//           <Intro scrollYProgress={scrollYProgress} />

//           {/* 🔥 SERVICE CARDS */}
//           {services.map((service, i) => (
//             <ServiceCard
//               key={i}
//               service={service}
//               index={i}
//               total={services.length}
//               scrollYProgress={scrollYProgress}
//             />
//           ))}

//         </div>
//       </section>
//     </main>
//   );
// }

// /* ✅ INTRO COMPONENT */
// function Intro({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
//   const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
//   const y = useTransform(scrollYProgress, [0, 0.15], ["0%", "-40%"]);

//   return (
//     <motion.div
//       style={{ opacity, y }}
//       className="absolute inset-0 flex items-center justify-center bg-white z-30"
//     >
//       <h1
//         className="text-4xl md:text-6xl font-bold text-black text-center"
//         style={{ fontFamily: "Poppins, sans-serif" }}
//       >
//         How we Build apps
//       </h1>
//     </motion.div>
//   );
// }

// /* ✅ SERVICE CARD */
// type CardProps = {
//   service: Service;
//   index: number;
//   total: number;
//   scrollYProgress: MotionValue<number>;
// };

// function ServiceCard({
//   service,
//   index,
//   total,
//   scrollYProgress,
// }: CardProps) {
//   // Shift because intro takes first slot
//   const start = (index + 1) / (total + 1);
//   const end = (index + 2) / (total + 1);

//   const y = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);

//   const opacity = useTransform(
//     scrollYProgress,
//     [start, start + 0.2],
//     [0, 1]
//   );

//   const scale = useTransform(scrollYProgress, [start, end], [0.95, 1]);

//   return (
//     <motion.div
//       style={{ y, opacity, scale, zIndex: index }}
//       className="absolute inset-0"
//     >
//       {/* Background */}
//       <div
//         className="w-full h-full bg-cover bg-center"
//         style={{ backgroundImage: `url(${service.img})` }}
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* Content */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           {service.title}
//         </h1>
//         <p className="max-w-xl text-lg md:text-xl opacity-90">
//           {service.desc}
//         </p>
//       </div>
//     </motion.div>
//   );
// }



// "use client";

// import { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   MotionValue,
// } from "framer-motion";

// type Service = {
//   title: string;
//   desc: string;
//   img: string;
// };

// const services: Service[] = [
//   {
//     title: "Turn Ideas into Functional Apps",
//     desc: "We transform your ideas into fully functional, scalable mobile applications tailored to your needs.",
//     img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
//   },
//   {
//     title: "E-commerce Apps",
//     desc: "Robust online store apps with product listings, cart, secure checkout, and payment integration.",
//     img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
//   },
//   {
//     title: "Management Apps",
//     desc: "Efficient management solutions for orders, users, inventory, and business operations.",
//     img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
//   },
//   {
//     title: "AI-Powered Apps",
//     desc: "Smart applications with AI features like chatbots, recommendations, and automation.",
//     img: "https://images.unsplash.com/photo-1677442135136-760c813028c0",
//   },
//   {
//     title: "News Apps",
//     desc: "Real-time news apps with categories, notifications, and personalized content feeds.",
//     img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
//   },
//   {
//     title: "Educational Apps",
//     desc: "Interactive learning apps with courses, quizzes, progress tracking, and user engagement features.",
//     img: "https://wallpaperbat.com/img/374685-free-download-old-library-wallpaper-wall-decor-1500x1000.jpg",
//   },
// ];

// export default function Page() {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <main>
//       <section
//         ref={containerRef}
//         className="relative"
//         style={{ height: `${(services.length + 1) * 100}vh` }}
//       >
//         <div className="sticky top-0 h-screen overflow-hidden">
//           <Intro scrollYProgress={scrollYProgress} />

//           {services.map((service, i) => (
//             <ServiceCard
//               key={i}
//               service={service}
//               index={i}
//               total={services.length}
//               scrollYProgress={scrollYProgress}
//             />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// /* INTRO */
// function Intro({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
//   const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
//   const y = useTransform(scrollYProgress, [0, 0.15], ["0%", "-40%"]);

//   return (
//     <motion.div
//       style={{ opacity, y }}
//       className="absolute inset-0 flex items-center justify-center bg-white z-30"
//     >
//       <h1 className="text-4xl md:text-6xl font-bold text-black text-center">
//         How we Build apps
//       </h1>
//     </motion.div>
//   );
// }

// /* SERVICE CARD */
// type CardProps = {
//   service: Service;
//   index: number;
//   total: number;
//   scrollYProgress: MotionValue<number>;
// };

// function ServiceCard({
//   service,
//   index,
//   total,
//   scrollYProgress,
// }: CardProps) {
//   const start = (index + 1) / (total + 1);
//   const end = (index + 2) / (total + 1);

//   const mid = start + (end - start) * 0.5;

//   const y = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);
//   const scale = useTransform(scrollYProgress, [start, end], [0.95, 1]);

//   const overlayOpacity = useTransform(
//     scrollYProgress,
//     [start, mid, end],
//     [0.5, 0, 0]
//   );

//   return (
//     <motion.div
//       style={{ y, scale, zIndex: index }}
//       className="absolute inset-0 bg-black"
//     >
//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${service.img})` }}
//       />

//       {/* Overlay */}
//       <motion.div
//         style={{ opacity: overlayOpacity }}
//         className="absolute inset-0 bg-black"
//       />

//       {/* Content */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           {service.title}
//         </h1>
//         <p className="max-w-xl text-lg md:text-xl opacity-90">
//           {service.desc}
//         </p>
//       </div>
//     </motion.div>
//   );
// }




// "use client";

// import { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   MotionValue,
// } from "framer-motion";

// type Service = {
//   title: string;
//   desc: string;
//   img: string;
// };

// const services: Service[] = [
//   {
//     title: "Turn Ideas into Functional Apps",
//     desc: "We transform your ideas into fully functional, scalable mobile applications tailored to your needs.",
//     img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
//   },
//   {
//     title: "E-commerce Apps",
//     desc: "Robust online store apps with product listings, cart, secure checkout, and payment integration.",
//     img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
//   },
//   {
//     title: "Management Apps",
//     desc: "Efficient management solutions for orders, users, inventory, and business operations.",
//     img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
//   },
//   {
//     title: "AI-Powered Apps",
//     desc: "Smart applications with AI features like chatbots, recommendations, and automation.",
//     img: "https://images.unsplash.com/photo-1677442135136-760c813028c0",
//   },
//   {
//     title: "News Apps",
//     desc: "Real-time news apps with categories, notifications, and personalized content feeds.",
//     img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
//   },
//   {
//     title: "Educational Apps",
//     desc: "Interactive learning apps with courses, quizzes, progress tracking, and user engagement features.",
//     img: "https://wallpaperbat.com/img/374685-free-download-old-library-wallpaper-wall-decor-1500x1000.jpg",
//   },
// ];

// export default function Page() {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <main>
//       <section
//         ref={containerRef}
//         className="relative"
//         style={{ height: `${(services.length + 1) * 100}vh` }}
//       >
//         <div className="sticky top-0 h-screen overflow-hidden">
//           <Intro scrollYProgress={scrollYProgress} />

//           {services.map((service, i) => (
//             <ServiceCard
//               key={i}
//               service={service}
//               index={i}
//               total={services.length}
//               scrollYProgress={scrollYProgress}
//             />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// /* INTRO */
// function Intro({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
//   const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
//   const y = useTransform(scrollYProgress, [0, 0.15], ["0%", "-40%"]);

//   return (
//     <motion.div
//       style={{ opacity, y }}
//       className="absolute inset-0 flex items-center justify-center bg-white z-30"
//     >
//       <h1 className="text-4xl md:text-6xl font-bold text-black text-center">
//         How we Build apps
//       </h1>
//     </motion.div>
//   );
// }

// /* SERVICE CARD */
// type CardProps = {
//   service: Service;
//   index: number;
//   total: number;
//   scrollYProgress: MotionValue<number>;
// };

// function ServiceCard({
//   service,
//   index,
//   total,
//   scrollYProgress,
// }: CardProps) {
//   const start = (index + 1) / (total + 1);
//   const end = (index + 2) / (total + 1);
//   const mid = start + (end - start) * 0.5;

//   // ✅ FIX: First card starts slightly visible instead of 100% off-screen
//   const y = useTransform(
//     scrollYProgress,
//     [start, end],
//     [index === 0 ? "20%" : "100%", "0%"]
//   );

//   const scale = useTransform(scrollYProgress, [start, end], [0.95, 1]);

//   // Optional smooth fade
//   const opacity = useTransform(
//     scrollYProgress,
//     [start, end],
//     [index === 0 ? 0.85 : 1, 1]
//   );

//   const overlayOpacity = useTransform(
//     scrollYProgress,
//     [start, mid, end],
//     [0.5, 0, 0]
//   );

//   return (
//     <motion.div
//       style={{ y, scale, opacity, zIndex: index }}
//       className="absolute inset-0"
//     >
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${service.img})` }}
//       />

//       {/* Overlay */}
//       <motion.div
//         style={{ opacity: overlayOpacity }}
//         className="absolute inset-0 bg-black"
//       />

//       {/* Content */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           {service.title}
//         </h1>
//         <p className="max-w-xl text-lg md:text-xl opacity-90">
//           {service.desc}
//         </p>
//       </div>
//     </motion.div>
//   );
// }



// "use client";

// import { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   MotionValue,
// } from "framer-motion";

// type Service = {
//   title: string;
//   desc: string;
//   img: string;
// };

// const services: Service[] = [
//   {
//     title: "Turn Ideas into Functional Apps",
//     desc: "We transform your ideas into fully functional, scalable mobile applications tailored to your needs.",
//     img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
//   },
//   {
//     title: "E-commerce Apps",
//     desc: "Robust online store apps with product listings, cart, secure checkout, and payment integration.",
//     img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
//   },
//   {
//     title: "Management Apps",
//     desc: "Efficient management solutions for orders, users, inventory, and business operations.",
//     img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
//   },
//   {
//     title: "AI-Powered Apps",
//     desc: "Smart applications with AI features like chatbots, recommendations, and automation.",
//     img: "https://images.unsplash.com/photo-1677442135136-760c813028c0",
//   },
//   {
//     title: "News Apps",
//     desc: "Real-time news apps with categories, notifications, and personalized content feeds.",
//     img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
//   },
//   {
//     title: "Educational Apps",
//     desc: "Interactive learning apps with courses, quizzes, progress tracking, and user engagement features.",
//     img: "https://wallpaperbat.com/img/374685-free-download-old-library-wallpaper-wall-decor-1500x1000.jpg",
//   },
// ];

// export default function Page() {
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <main className="bg-black">
//       <section
//         ref={containerRef}
//         className="relative"
//         style={{ height: `${services.length * 120}vh` }}
//       >
//         <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//           <div className="relative w-full max-w-6xl h-[80vh] perspective-[1200px]">
//             {services.map((service, i) => (
//               <TiltCard
//                 key={i}
//                 service={service}
//                 index={i}
//                 total={services.length}
//                 scrollYProgress={scrollYProgress}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// /* CARD */
// type CardProps = {
//   service: Service;
//   index: number;
//   total: number;
//   scrollYProgress: MotionValue<number>;
// };

// function TiltCard({
//   service,
//   index,
//   total,
//   scrollYProgress,
// }: CardProps) {
//   const start = index / total;
//   const end = (index + 1) / total;

//   // 3D Tilt Effects
//   const rotateX = useTransform(scrollYProgress, [start, end], [15, 0]);
//   const rotateY = useTransform(scrollYProgress, [start, end], [-10, 0]);

//   const scale = useTransform(scrollYProgress, [start, end], [0.85, 1]);
//   const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
//   const y = useTransform(scrollYProgress, [start, end], [100, 0]);

//   return (
//     <motion.div
//       style={{
//         rotateX,
//         rotateY,
//         scale,
//         opacity,
//         y,
//         zIndex: index,
//       }}
//       className="absolute inset-0 flex items-center justify-center"
//     >
//       <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
        
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${service.img})` }}
//         />

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/50" />

//         {/* Content */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             {service.title}
//           </h1>
//           <p className="max-w-xl text-lg md:text-xl opacity-90">
//             {service.desc}
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }




"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";

type Service = {
  title: string;
  desc: string;
  img: string;
};

const services: Service[] = [

  {
    title: "E-commerce Apps",
    desc: "Robust online store apps with product listings, cart, secure checkout, and payment integration.",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
  },
  {
    title: "Management Apps",
    desc: "Efficient management solutions for orders, users, inventory, and business operations.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
  },
  {
    title: "AI-Powered Apps",
    desc: "Smart applications with AI features like chatbots, recommendations, and automation.",
    img: "https://images.unsplash.com/photo-1677442135136-760c813028c0",
  },
  {
    title: "News Apps",
    desc: "Real-time news apps with categories, notifications, and personalized content feeds.",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
  },
  {
    title: "Educational Apps",
    desc: "Interactive learning apps with courses, quizzes, progress tracking, and user engagement features.",
    img: "https://wallpaperbat.com/img/374685-free-download-old-library-wallpaper-wall-decor-1500x1000.jpg",
  },  {
    title: "Turn Ideas into Functional Apps",
    desc: "We transform your ideas into fully functional, scalable mobile applications tailored to your needs.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
  },
];

export default function Page() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main className="bg-black">
      <section
        ref={containerRef}
        className="relative"
        style={{ height: `${(services.length + 1) * 120}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-6xl h-[80vh] perspective-[1200px]">

            {/* ✅ INTRO */}
            <Intro scrollYProgress={scrollYProgress} />

            {/* ✅ CARDS */}
            {services.map((service, i) => (
              <TiltCard
                key={i}
                service={service}
                index={i}
                total={services.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= INTRO ================= */
function Intro({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15], ["0%", "-40%"]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center justify-center bg-black z-30"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
        Applications We Build
      </h1>
    </motion.div>
  );
}

/* ================= CARD ================= */
type CardProps = {
  service: Service;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
};

function TiltCard({
  service,
  index,
  total,
  scrollYProgress,
}: CardProps) {
  // ✅ SHIFT because intro occupies first slot
  const start = (index + 1) / (total + 1);
  const end = (index + 2) / (total + 1);

  // 🎯 3D Tilt
  const rotateX = useTransform(scrollYProgress, [start, end], [15, 0]);
  const rotateY = useTransform(scrollYProgress, [start, end], [-10, 0]);

  const scale = useTransform(scrollYProgress, [start, end], [0.85, 1]);

  // ✅ smoother entry for first card
  const y = useTransform(
    scrollYProgress,
    [start, end],
    [index === 0 ? "20%" : "100%", "0%"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    [index === 0 ? 0.85 : 0, 1]
  );

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        scale,
        y,
        opacity,
        zIndex: index,
      }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
        
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.img})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {service.title}
          </h1>
          <p className="max-w-xl text-lg md:text-xl opacity-90">
            {service.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}