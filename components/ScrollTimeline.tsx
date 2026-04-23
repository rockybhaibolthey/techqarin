// "use client";

// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
// } from "framer-motion";
// import { useRef } from "react";

// export default function ScrollTimeline() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   const smooth = useSpring(scrollYProgress, {
//     stiffness: 50,
//     damping: 20,
//   });

//   const width = useTransform(smooth, [0, 1], ["0%", "100%"]);
//   const height = useTransform(smooth, [0, 1], ["0%", "100%"]);

//   // Desktop progress
//   const step1 = useTransform(smooth, [0, 0.25], [0.3, 1]);
//   const step2 = useTransform(smooth, [0.25, 0.6], [0.3, 1]);
//   const step3 = useTransform(smooth, [0.6, 1], [0.3, 1]);

//   const scale1 = useTransform(smooth, [0, 0.25], [0.8, 1.1]);
//   const scale2 = useTransform(smooth, [0.25, 0.6], [0.8, 1.1]);
//   const scale3 = useTransform(smooth, [0.6, 1], [0.8, 1.1]);

//   return (
//     <section ref={ref} className="h-[300vh] bg-[#f8f5f2]">

//       <div className="sticky top-0 h-screen flex items-center">
//         <div className="w-full max-w-6xl mx-auto px-6">

//           {/* Header */}
//           <div className="text-center mb-20 md:mb-24">
//             <h2 className="text-3xl md:text-6xl font-semibold text-[#3b2f2f] mb-6">
//               149€/month & not a single worry
//             </h2>
//             <p className="text-[#6b5c5c] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
//               We don’t sell Yoda because it makes us accountable for the durability
//               of our fleet, avoiding the waste that comes with the traditional
//               buy-and-dispose cycle.
//             </p>
//           </div>

//           {/* ================= DESKTOP (HORIZONTAL) ================= */}
//           <div className="hidden md:block relative">

//             <div className="absolute top-5 left-0 w-full h-[3px] bg-[#e5ddd5] rounded-full" />

//             <motion.div
//               style={{ width }}
//               className="absolute top-5 left-0 h-[3px] bg-[#3b2f2f] rounded-full"
//             />

//             <div className="flex justify-between">

//               <motion.div style={{ opacity: step1, scale: scale1 }} className="text-center w-1/3">
//                 <div className="w-5 h-5 rounded-full border-2 border-[#3b2f2f] mx-auto bg-[#3b2f2f]" />
//                 <h3 className="mt-8 text-[#3b2f2f] font-semibold">We immatriculate</h3>
//                 <p className="text-sm text-[#7a6a6a] mt-3">
//                   We manage registration at fleet level.
//                 </p>
//               </motion.div>

//               <motion.div style={{ opacity: step2, scale: scale2 }} className="text-center w-1/3">
//                 <div className="w-5 h-5 rounded-full border-2 border-[#3b2f2f] mx-auto bg-[#3b2f2f]" />
//                 <h3 className="mt-8 text-[#3b2f2f] font-semibold">We insure</h3>
//                 <p className="text-sm text-[#7a6a6a] mt-3">
//                   Full insurance coverage for every rider.
//                 </p>
//               </motion.div>

//               <motion.div style={{ opacity: step3, scale: scale3 }} className="text-center w-1/3">
//                 <div className="w-5 h-5 rounded-full border-2 border-[#3b2f2f] mx-auto bg-[#3b2f2f]" />
//                 <h3 className="mt-8 text-[#3b2f2f] font-semibold">We maintain</h3>
//                 <p className="text-sm text-[#7a6a6a] mt-3">
//                   Fast maintenance & replacement.
//                 </p>
//               </motion.div>

//             </div>
//           </div>

//           {/* ================= MOBILE (VERTICAL) ================= */}
//           <div className="md:hidden relative flex flex-col items-start pl-6">

//             {/* vertical base line */}
//             <div className="absolute left-2 top-0 w-[3px] h-full bg-[#e5ddd5] rounded-full" />

//             {/* vertical progress line */}
//             <motion.div
//               style={{ height }}
//               className="absolute left-2 top-0 w-[3px] bg-[#3b2f2f] rounded-full"
//             />

//             {/* Step 1 */}
//             <motion.div style={{ opacity: step1, scale: scale1 }} className="mb-16 pl-8">
//               <div className="absolute left-0 w-4 h-4 rounded-full bg-[#3b2f2f]" />
//               <h3 className="text-[#3b2f2f] font-semibold">We immatriculate</h3>
//               <p className="text-sm text-[#7a6a6a] mt-2">
//                 We manage registration at fleet level.
//               </p>
//             </motion.div>

//             {/* Step 2 */}
//             <motion.div style={{ opacity: step2, scale: scale2 }} className="mb-16 pl-8">
//               <div className="absolute left-0 w-4 h-4 rounded-full bg-[#3b2f2f]" />
//               <h3 className="text-[#3b2f2f] font-semibold">We insure</h3>
//               <p className="text-sm text-[#7a6a6a] mt-2">
//                 Full insurance coverage for every rider.
//               </p>
//             </motion.div>

//             {/* Step 3 */}
//             <motion.div style={{ opacity: step3, scale: scale3 }} className="pl-8">
//               <div className="absolute left-0 w-4 h-4 rounded-full bg-[#3b2f2f]" />
//               <h3 className="text-[#3b2f2f] font-semibold">We maintain</h3>
//               <p className="text-sm text-[#7a6a6a] mt-2">
//                 Fast maintenance & replacement.
//               </p>
//             </motion.div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
// } from "framer-motion";
// import { useRef } from "react";

// export default function ScrollTimeline() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   const smooth = useSpring(scrollYProgress, {
//     stiffness: 50,
//     damping: 20,
//   });

//   const width = useTransform(smooth, [0, 1], ["0%", "100%"]);
//   const height = useTransform(smooth, [0, 1], ["0%", "100%"]);

//   // Steps
//   const step1 = useTransform(smooth, [0, 0.25], [0.3, 1]);
//   const step2 = useTransform(smooth, [0.25, 0.6], [0.3, 1]);
//   const step3 = useTransform(smooth, [0.6, 1], [0.3, 1]);

//   const scale1 = useTransform(smooth, [0, 0.25], [0.8, 1.1]);
//   const scale2 = useTransform(smooth, [0, 0.25, 0.6], [0.8, 0.8, 1.1]);
//   const scale3 = useTransform(smooth, [0.6, 1], [0.8, 1.1]);

//   return (
//     <section ref={ref} className="h-[300vh] bg-[#f8f5f2]">

//       <div className="sticky top-0 h-screen flex items-center">
//         <div className="w-full max-w-6xl mx-auto px-6">

//           {/* Header */}
//           <div className="text-center mb-20 md:mb-24">
//             <h2 className="text-3xl md:text-6xl font-semibold text-[#3b2f2f] mb-6">
//               149€/month & not a single worry
//             </h2>
//             <p className="text-[#6b5c5c] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
//               We don’t sell Yoda because it makes us accountable for the durability
//               of our fleet, avoiding the waste that comes with the traditional
//               buy-and-dispose cycle.
//             </p>
//           </div>

//           {/* ================= DESKTOP + TABLET (UNCHANGED) ================= */}
//           <div className="hidden md:block relative">

//             {/* base line */}
//             <div className="absolute top-5 left-0 w-full h-[3px] bg-[#e5ddd5] rounded-full" />

//             {/* progress line */}
//             <motion.div
//               style={{ width }}
//               className="absolute top-5 left-0 h-[3px] bg-[#3b2f2f] rounded-full"
//             />

//             <div className="flex justify-between">

//               <motion.div style={{ opacity: step1, scale: scale1 }} className="text-center w-1/3">
//                 <div className="w-5 h-5 rounded-full border-2 border-[#3b2f2f] mx-auto bg-[#3b2f2f]" />
//                 <h3 className="mt-8 text-[#3b2f2f] font-semibold">We immatriculate</h3>
//                 <p className="text-sm text-[#7a6a6a] mt-3">
//                   We manage registration at fleet level.
//                 </p>
//               </motion.div>

//               <motion.div style={{ opacity: step2, scale: scale2 }} className="text-center w-1/3">
//                 <div className="w-5 h-5 rounded-full border-2 border-[#3b2f2f] mx-auto bg-[#3b2f2f]" />
//                 <h3 className="mt-8 text-[#3b2f2f] font-semibold">We insure</h3>
//                 <p className="text-sm text-[#7a6a6a] mt-3">
//                   Full insurance coverage for every rider.
//                 </p>
//               </motion.div>

//               <motion.div style={{ opacity: step3, scale: scale3 }} className="text-center w-1/3">
//                 <div className="w-5 h-5 rounded-full border-2 border-[#3b2f2f] mx-auto bg-[#3b2f2f]" />
//                 <h3 className="mt-8 text-[#3b2f2f] font-semibold">We maintain</h3>
//                 <p className="text-sm text-[#7a6a6a] mt-3">
//                   Fast maintenance & replacement.
//                 </p>
//               </motion.div>

//             </div>
//           </div>

//           {/* ================= MOBILE ONLY (FIXED ONLY HERE) ================= */}
//           <div className="block md:hidden relative pl-10">

//             {/* base line */}
//             <div className="absolute left-3 top-0 w-[3px] h-full bg-[#e5ddd5] rounded-full" />

//             {/* progress line */}
//             <motion.div
//               style={{ height }}
//               className="absolute left-3 top-0 w-[3px] bg-[#3b2f2f] rounded-full"
//             />

//             {/* Step 1 */}
//             <motion.div style={{ opacity: step1, scale: scale1 }} className="relative mb-14">
//               <div className="absolute -left-[26px] top-1 w-4 h-4 rounded-full bg-[#3b2f2f]" />
//               <h3 className="text-[#3b2f2f] font-semibold">
//                 We immatriculate
//               </h3>
//               <p className="text-sm text-[#7a6a6a] mt-2">
//                 We manage registration at fleet level.
//               </p>
//             </motion.div>

//             {/* Step 2 */}
//             <motion.div style={{ opacity: step2, scale: scale2 }} className="relative mb-14">
//               <div className="absolute -left-[26px] top-1 w-4 h-4 rounded-full bg-[#3b2f2f]" />
//               <h3 className="text-[#3b2f2f] font-semibold">
//                 We insure
//               </h3>
//               <p className="text-sm text-[#7a6a6a] mt-2">
//                 Full insurance coverage for every rider.
//               </p>
//             </motion.div>

//             {/* Step 3 */}
//             <motion.div style={{ opacity: step3, scale: scale3 }} className="relative">
//               <div className="absolute -left-[26px] top-1 w-4 h-4 rounded-full bg-[#3b2f2f]" />
//               <h3 className="text-[#3b2f2f] font-semibold">
//                 We maintain
//               </h3>
//               <p className="text-sm text-[#7a6a6a] mt-2">
//                 Fast maintenance & replacement.
//               </p>
//             </motion.div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
// } from "framer-motion";
// import { useRef } from "react";

// export default function ScrollTimeline() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   const smooth = useSpring(scrollYProgress, {
//     stiffness: 50,
//     damping: 20,
//   });

//   const width = useTransform(smooth, [0, 1], ["0%", "100%"]);
//   const height = useTransform(smooth, [0, 1], ["0%", "100%"]);

//   // 7 steps (even distribution)
//   const step1 = useTransform(smooth, [0, 0.14], [0.3, 1]);
//   const step2 = useTransform(smooth, [0.14, 0.28], [0.3, 1]);
//   const step3 = useTransform(smooth, [0.28, 0.42], [0.3, 1]);
//   const step4 = useTransform(smooth, [0.42, 0.56], [0.3, 1]);
//   const step5 = useTransform(smooth, [0.56, 0.7], [0.3, 1]);
//   const step6 = useTransform(smooth, [0.7, 0.84], [0.3, 1]);
//   const step7 = useTransform(smooth, [0.84, 1], [0.3, 1]);

//   const scale1 = useTransform(smooth, [0, 0.14], [0.8, 1.1]);
//   const scale2 = useTransform(smooth, [0, 0.14, 0.28], [0.8, 0.8, 1.1]);
//   const scale3 = useTransform(smooth, [0.14, 0.28, 0.42], [0.8, 0.8, 1.1]);
//   const scale4 = useTransform(smooth, [0.28, 0.42, 0.56], [0.8, 0.8, 1.1]);
//   const scale5 = useTransform(smooth, [0.42, 0.56, 0.7], [0.8, 0.8, 1.1]);
//   const scale6 = useTransform(smooth, [0.56, 0.7, 0.84], [0.8, 0.8, 1.1]);
//   const scale7 = useTransform(smooth, [0.84, 1], [0.8, 1.1]);

//   const steps = [
//     { title: "We immatriculate", desc: "We manage registration at fleet level.", step: step1, scale: scale1 },
//     { title: "We insure", desc: "Full insurance coverage for every rider.", step: step2, scale: scale2 },
//     { title: "We maintain", desc: "Fast maintenance & replacement.", step: step3, scale: scale3 },
//     { title: "We support", desc: "24/7 customer support & assistance.", step: step4, scale: scale4 },
//     { title: "You ride", desc: "Enjoy worry-free riding experience.", step: step5, scale: scale5 },
//  ];

//   return (
//     <section ref={ref} className="h-[300vh] bg-[#f8f5f2]">
//       <div className="sticky top-0 h-screen flex items-center">
//         <div className="w-full max-w-6xl mx-auto px-6">

//           {/* Header */}
//           <div className="text-center mb-20 md:mb-24">
//             <h2 className="text-3xl md:text-6xl font-semibold text-[#3b2f2f] mb-6">
//               149€/month & not a single worry
//             </h2>
//             <p className="text-[#6b5c5c] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
//               We don’t sell Yoda because it makes us accountable for the durability
//               of our fleet, avoiding the waste that comes with the traditional
//               buy-and-dispose cycle.
//             </p>
//           </div>

//           {/* DESKTOP */}
//           <div className="hidden md:block relative">

//             <div className="absolute top-5 left-0 w-full h-[3px] bg-[#e5ddd5] rounded-full" />

//             <motion.div
//               style={{ width }}
//               className="absolute top-5 left-0 h-[3px] bg-[#3b2f2f] rounded-full"
//             />

//             <div className="flex justify-between">
//               {steps.map((item, i) => (
//                 <motion.div
//                   key={i}
//                   style={{ opacity: item.step, scale: item.scale }}
//                   className="text-center w-1/7"
//                 >
//                   <div className="w-5 h-5 rounded-full border-2 border-[#3b2f2f] mx-auto bg-[#3b2f2f]" />
//                   <h3 className="mt-8 text-[#3b2f2f] font-semibold">{item.title}</h3>
//                   <p className="text-sm text-[#7a6a6a] mt-3">{item.desc}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* MOBILE */}
//           <div className="block md:hidden relative pl-14">

//             <div className="absolute left-3 top-0 w-[3px] h-full bg-[#e5ddd5] rounded-full" />

//             <motion.div
//               style={{ height }}
//               className="absolute left-3 top-0 w-[3px] bg-[#3b2f2f] rounded-full"
//             />

//             {steps.map((item, i) => (
//               <motion.div
//                 key={i}
//                 style={{ opacity: item.step, scale: item.scale }}
//                 className="relative mb-14"
//               >
//                 <div className="absolute -left-[26px] top-1 w-4 h-4 rounded-full bg-[#3b2f2f]" />
//                 <h3 className="text-[#3b2f2f] font-semibold">{item.title}</h3>
//                 <p className="text-sm text-[#7a6a6a] mt-2">{item.desc}</p>
//               </motion.div>
//             ))}

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }







// "use client";

// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
// } from "framer-motion";
// import { useRef } from "react";

// export default function ScrollTimeline() {
//   const ref = useRef<HTMLDivElement | null>(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   const smooth = useSpring(scrollYProgress, {
//     stiffness: 50,
//     damping: 20,
//   });

//   const width = useTransform(smooth, [0, 1], ["0%", "100%"]);
//   const height = useTransform(smooth, [0, 1], ["0%", "100%"]);

//   // Steps
//   const step1 = useTransform(smooth, [0, 0.14], [0.3, 1]);
//   const step2 = useTransform(smooth, [0.14, 0.28], [0.3, 1]);
//   const step3 = useTransform(smooth, [0.28, 0.42], [0.3, 1]);
//   const step4 = useTransform(smooth, [0.42, 0.56], [0.3, 1]);
//   const step5 = useTransform(smooth, [0.56, 0.7], [0.3, 1]);
//   const step6 = useTransform(smooth, [0.7, 0.84], [0.3, 1]);
//   const step7 = useTransform(smooth, [0.84, 1], [0.3, 1]);

//   const scale1 = useTransform(smooth, [0, 0.14], [0.8, 1.1]);
//   const scale2 = useTransform(smooth, [0, 0.14, 0.28], [0.8, 0.8, 1.1]);
//   const scale3 = useTransform(smooth, [0.14, 0.28, 0.42], [0.8, 0.8, 1.1]);
//   const scale4 = useTransform(smooth, [0.28, 0.42, 0.56], [0.8, 0.8, 1.1]);
//   const scale5 = useTransform(smooth, [0.42, 0.56, 0.7], [0.8, 0.8, 1.1]);
//   const scale6 = useTransform(smooth, [0.56, 0.7, 0.84], [0.8, 0.8, 1.1]);
//   const scale7 = useTransform(smooth, [0.84, 1], [0.8, 1.1]);

//   const steps = [
//     { title: "We immatriculate", desc: "We manage registration at fleet level.", step: step1, scale: scale1 },
//     { title: "We insure", desc: "Full insurance coverage for every rider.", step: step2, scale: scale2 },
//     { title: "We maintain", desc: "Fast maintenance & replacement.", step: step3, scale: scale3 },
//     { title: "We support", desc: "24/7 customer support & assistance.", step: step4, scale: scale4 },
//     { title: "You ride", desc: "Enjoy worry-free riding experience.", step: step5, scale: scale5 },
//   ];

//   return (
//     <section
//       ref={ref}
//       className="bg-[#f8f5f2] relative z-20"
//       style={{ height: `${steps.length * 100 + 100}vh` }}
//     >
//       {/* ✅ Sticky container with background */}
//       <div className="sticky top-0 h-screen flex items-center bg-[#f8f5f2]">
//         <div className="w-full max-w-6xl mx-auto px-6">

//           {/* Header */}
//           <div className="text-center mb-20 md:mb-24">
//            <h2 className=" text-3xl md:text-6xl font-semibold text-[#3b2f2f] mb-6">
//   149€/month & not a single worry
// </h2>
//             <p className="text-[#6b5c5c] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
//               We don’t sell Yoda because it makes us accountable for the durability
//               of our fleet, avoiding the waste that comes with the traditional
//               buy-and-dispose cycle.
//             </p>
//           </div>

//           {/* DESKTOP */}
//           <div className="hidden md:block relative">

//             <div className="absolute top-5 left-0 w-full h-[3px] bg-[#e5ddd5]" />

//             <motion.div
//               style={{ width }}
//               className="absolute top-5 left-0 h-[3px] bg-[#3b2f2f]"
//             />

//             <div className="flex justify-between gap-4">
//               {steps.map((item, i) => (
//                 <motion.div
//                   key={i}
//                   style={{ opacity: item.step, scale: item.scale }}
//                   className="text-center flex-1"
//                 >
//                   <div className="w-5 h-5 rounded-full bg-[#3b2f2f] mx-auto" />
//                   <h3 className="mt-6 text-[#3b2f2f] font-semibold text-sm md:text-base">
//                     {item.title}
//                   </h3>
//                   <p className="text-xs md:text-sm text-[#7a6a6a] mt-2">
//                     {item.desc}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* MOBILE */}
//           <div className="block md:hidden relative pl-10">

//             <div className="absolute left-3 top-0 w-[3px] h-full bg-[#e5ddd5]" />

//             <motion.div
//               style={{ height }}
//               className="absolute left-3 top-0 w-[3px] bg-[#3b2f2f]"
//             />

//             {steps.map((item, i) => (
//               <motion.div
//                 key={i}
//                 style={{ opacity: item.step, scale: item.scale }}
//                 className="relative mb-14"
//               >
//                 <div className="absolute -left-[26px] top-1 w-4 h-4 rounded-full bg-[#3b2f2f]" />
//                 <h3 className="text-[#3b2f2f] font-semibold">{item.title}</h3>
//                 <p className="text-sm text-[#7a6a6a] mt-2">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>

//         </div>
//       </div>

//       {/* ✅ EXIT SPACE (prevents overlap completely) */}
//       <div className="h-[100vh]" />
//     </section>
//   );
// }