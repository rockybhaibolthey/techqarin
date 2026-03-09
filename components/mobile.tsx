// "use client";

// export default function Mobile() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-200">
//       {/* Mobile Frame */}
//       <div className="w-72 h-[600px] bg-white rounded-3xl shadow-xl border-4 border-black relative overflow-hidden flex flex-col">
        
//         {/* Top Camera / Notch */}
//         <div className="h-12 bg-gray-100 w-full flex justify-center items-center relative">
//           {/* Camera circle */}
//           <div className="w-4 h-4 bg-black rounded-full absolute left-1/2 transform -translate-x-1/2 top-2"></div>
//           {/* Notch */}
//           <div className="w-16 h-4 bg-black rounded-b-md absolute left-1/2 transform -translate-x-1/2 top-2"></div>
//         </div>

//         {/* Screen Content */}
//         <div className="flex-1 flex justify-center items-center">
//           <h1 className="text-lg font-semibold text-gray-800 text-center px-4">
//             This is mobile view
//           </h1>
//         </div>

//         {/* Bottom Buttons */}
//         <div className="h-16 bg-gray-100 w-full flex justify-around items-center border-t border-gray-300">
//           <button className="w-8 h-8 bg-black rounded-full"></button>
//           <button className="w-8 h-8 bg-black rounded-full"></button>
//           <button className="w-8 h-8 bg-black rounded-full"></button>
//         </div>

//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";import { Layout, ShieldCheck, MapPin, ShoppingCart, ClipboardList, Phone, Settings, Globe, LucideIcon } from "lucide-react";
// import { FeatureCard } from "./Featurecard"; // moved outside

// interface Feature {
//   icon: LucideIcon;
//   title: string;
//   desc: string;
// }

// export default function MobileSimulator() {
//   const features: Feature[] = [
//     { icon: Layout, title: "Custom Page Development", desc: "We design and develop the exact number of pages..." },
//     { icon: ShieldCheck, title: "Secure Authentication", desc: "User login and signup systems..." },
//     { icon: MapPin, title: "Location Based Services", desc: "We integrate maps and location features..." },
//     { icon: ShoppingCart, title: "E-commerce Functionality", desc: "Complete online store development..." },
//     { icon: ClipboardList, title: "Order Management", desc: "Customers can view order history..." },
//     { icon: Phone, title: "Contact & Inquiry System", desc: "Contact forms, enquiry management..." },
//     { icon: Settings, title: "Admin Dashboard", desc: "A powerful admin panel to manage content..." },
//     { icon: Globe, title: "Scalable & SEO Friendly", desc: "Fast, responsive and SEO-optimized websites..." },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const handleScroll = () => {
//       const { scrollTop, scrollHeight, clientHeight } = container;
//       const scrollFraction = scrollTop / (scrollHeight - clientHeight);
//       const newIndex = Math.min(features.length - 1, Math.floor(scrollFraction * features.length));
//       setCurrentIndex(newIndex);
//     };

//     container.addEventListener("scroll", handleScroll);
//     return () => container.removeEventListener("scroll", handleScroll);
//   }, [features.length]);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-200">
//       <div className="w-72 h-[600px] bg-white rounded-3xl shadow-xl border-4 border-black relative flex flex-col overflow-hidden">

//         {/* Top Camera / Notch */}
//         <div className="h-12 bg-gray-100 w-full flex justify-center items-center relative">
//           <div className="w-4 h-4 bg-black rounded-full absolute left-1/2 transform -translate-x-1/2 top-2"></div>
//           <div className="w-16 h-4 bg-black rounded-b-md absolute left-1/2 transform -translate-x-1/2 top-2"></div>
//         </div>

//         {/* Scrollable Feature Screen */}
//         <div ref={containerRef} className="flex-1 overflow-y-scroll snap-y snap-mandatory">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//               transition={{ duration: 0.5 }}
//               className="snap-start h-[600px] flex justify-center items-center"
//             >
//               <FeatureCard feature={features[currentIndex]} />
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Bottom Buttons */}
//         <div className="h-16 bg-gray-100 w-full flex justify-around items-center border-t border-gray-300">
//           <button className="w-8 h-8 bg-black rounded-full"></button>
//           <button className="w-8 h-8 bg-black rounded-full"></button>
//           <button className="w-8 h-8 bg-black rounded-full"></button>
//         </div>

//       </div>
//     </div>
//   );
// }"use client";


// "use client";

// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Layout, ShieldCheck, MapPin, ShoppingCart, ClipboardList, Phone, Settings, Globe, LucideIcon } from "lucide-react";
// import { FeatureCard } from "./Featurecard";

// interface Feature {
//   icon: LucideIcon;
//   title: string;
//   desc: string;
// }

// export default function MobileSimulator() {
//   const features: Feature[] = [
//     { icon: Layout, title: "Custom Page Development", desc: "We design and develop the exact number of pages..." },
//     { icon: ShieldCheck, title: "Secure Authentication", desc: "User login and signup systems..." },
//     { icon: MapPin, title: "Location Based Services", desc: "We integrate maps and location features..." },
//     { icon: ShoppingCart, title: "E-commerce Functionality", desc: "Complete online store development..." },
//     { icon: ClipboardList, title: "Order Management", desc: "Customers can view order history..." },
//     { icon: Phone, title: "Contact & Inquiry System", desc: "Contact forms, enquiry management..." },
//     { icon: Settings, title: "Admin Dashboard", desc: "A powerful admin panel to manage content..." },
//     { icon: Globe, title: "Scalable & SEO Friendly", desc: "Fast, responsive and SEO-optimized websites..." },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const isScrolling = useRef(false);

//   // Smooth snap scroll
//   const scrollToIndex = (index: number) => {
//     const container = containerRef.current;
//     if (!container) return;
//     const itemHeight = container.clientHeight;

//     container.scrollTo({
//       top: index * itemHeight,
//       behavior: "smooth",
//     });
//   };

//   // Wheel scroll handler
//   const handleWheel = (e: WheelEvent) => {
//     e.preventDefault();
//     if (isScrolling.current) return;
//     isScrolling.current = true;

//     if (e.deltaY > 0 && currentIndex < features.length - 1) {
//       setCurrentIndex(prev => prev + 1);
//     } else if (e.deltaY < 0 && currentIndex > 0) {
//       setCurrentIndex(prev => prev - 1);
//     }

//     setTimeout(() => {
//       isScrolling.current = false;
//     }, 500);
//   };

//   // Touch swipe support
//   const touchStartY = useRef(0);
//   const handleTouchStart = (e: TouchEvent) => {
//     touchStartY.current = e.touches[0].clientY;
//   };
//   const handleTouchMove = (e: TouchEvent) => {
//     e.preventDefault();
//   };
//   const handleTouchEnd = (e: TouchEvent) => {
//     const touchEndY = e.changedTouches[0].clientY;
//     const diff = touchStartY.current - touchEndY;

//     if (Math.abs(diff) < 20) return; // ignore tiny swipes

//     if (diff > 0 && currentIndex < features.length - 1) {
//       setCurrentIndex(prev => prev + 1);
//     } else if (diff < 0 && currentIndex > 0) {
//       setCurrentIndex(prev => prev - 1);
//     }
//   };

//   // Scroll to current index when it changes
//   useEffect(() => {
//     scrollToIndex(currentIndex);
//   }, [currentIndex]);

//   // Attach events
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     container.addEventListener("wheel", handleWheel, { passive: false });
//     container.addEventListener("touchstart", handleTouchStart, { passive: false });
//     container.addEventListener("touchmove", handleTouchMove, { passive: false });
//     container.addEventListener("touchend", handleTouchEnd, { passive: false });

//     return () => {
//       container.removeEventListener("wheel", handleWheel);
//       container.removeEventListener("touchstart", handleTouchStart);
//       container.removeEventListener("touchmove", handleTouchMove);
//       container.removeEventListener("touchend", handleTouchEnd);
//     };
//   }, [currentIndex]);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-200">
//       <div className="w-72 h-[600px] bg-white rounded-3xl shadow-xl border-4 border-black relative flex flex-col overflow-hidden">

//         {/* Top Camera / Notch */}
//         <div className="h-12 bg-gray-100 w-full flex justify-center items-center relative">
//           <div className="w-4 h-4 bg-black rounded-full absolute left-1/2 transform -translate-x-1/2 top-2"></div>
//           <div className="w-16 h-4 bg-black rounded-b-md absolute left-1/2 transform -translate-x-1/2 top-2"></div>
//         </div>

//         {/* Scrollable Feature Screen */}
//         <div
//           ref={containerRef}
//           className="flex-1 overflow-hidden"
//         >
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIndex}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//               transition={{ duration: 0.5 }}
//               className="h-[600px] flex justify-center items-center"
//             >
//               <FeatureCard feature={features[currentIndex]} />
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Bottom Buttons */}
//         <div className="h-16 bg-gray-100 w-full flex justify-around items-center border-t border-gray-300">
//           <button className="w-8 h-8 bg-black rounded-full"></button>
//           <button className="w-8 h-8 bg-black rounded-full"></button>
//           <button className="w-8 h-8 bg-black rounded-full"></button>
//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Layout, ShieldCheck, MapPin, ShoppingCart, ClipboardList, Phone, Settings, Globe, LucideIcon } from "lucide-react";
// import { FeatureCard } from "./Featurecard";

// interface Feature {
//   icon: LucideIcon;
//   title: string;
//   desc: string;
// }

// export default function MobileSimulator() {
//   const features: Feature[] = [
//     { icon: Layout, title: "Custom Page Development", desc: "We design and develop the exact number of pages..." },
//     { icon: ShieldCheck, title: "Secure Authentication", desc: "User login and signup systems..." },
//     { icon: MapPin, title: "Location Based Services", desc: "We integrate maps and location features..." },
//     { icon: ShoppingCart, title: "E-commerce Functionality", desc: "Complete online store development..." },
//     { icon: ClipboardList, title: "Order Management", desc: "Customers can view order history..." },
//     { icon: Phone, title: "Contact & Inquiry System", desc: "Contact forms, enquiry management..." },
//     { icon: Settings, title: "Admin Dashboard", desc: "A powerful admin panel to manage content..." },
//     { icon: Globe, title: "Scalable & SEO Friendly", desc: "Fast, responsive and SEO-optimized websites..." },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   // Detect scroll and snap to nearest index
//   const handleScroll = () => {
//     const container = containerRef.current;
//     if (!container) return;
//     const scrollTop = container.scrollTop;
//     const itemHeight = container.clientHeight;
//     const newIndex = Math.round(scrollTop / itemHeight);
//     if (newIndex !== currentIndex) setCurrentIndex(newIndex);
//   };

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     container.addEventListener("scroll", handleScroll);

//     return () => container.removeEventListener("scroll", handleScroll);
//   }, [currentIndex]);

//   // Scroll to current index (snap)
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;
//     const itemHeight = container.clientHeight;
//     container.scrollTo({ top: currentIndex * itemHeight, behavior: "smooth" });
//   }, [currentIndex]);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-200">
//       <div className="w-72 h-[600px] bg-white rounded-3xl shadow-xl border-4 border-black relative flex flex-col overflow-hidden">

//         {/* Top Camera / Notch */}
//         <div className="h-12 bg-gray-100 w-full flex justify-center items-center relative">
//           <div className="w-4 h-4 bg-black rounded-full absolute left-1/2 transform -translate-x-1/2 top-2"></div>
//           <div className="w-16 h-4 bg-black rounded-b-md absolute left-1/2 transform -translate-x-1/2 top-2"></div>
//         </div>

//         {/* Scrollable Feature Screen */}
//         <div
//           ref={containerRef}
//           className="flex-1 overflow-y-auto snap-y snap-mandatory"
//           style={{ scrollSnapType: "y mandatory" }}
//         >
//           {features.map((feature, i) => (
//             <div key={i} className="h-[600px] flex justify-center items-center snap-start">
//               <AnimatePresence mode="wait">
//                 {i === currentIndex && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -50 }}
//                     transition={{ duration: 0.5 }}
//                     className="w-full flex justify-center items-center"
//                   >
//                     <FeatureCard feature={feature} />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Buttons */}
//         <div className="h-16 bg-gray-100 w-full flex justify-around items-center border-t border-gray-300">
//           <button className="w-8 h-8 bg-black rounded-full"></button>
//           <button className="w-8 h-8 bg-black rounded-full"></button>
//           <button className="w-8 h-8 bg-black rounded-full"></button>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Layout, ShieldCheck, MapPin, ShoppingCart, ClipboardList, Phone, Settings, Globe, LucideIcon } from "lucide-react";
// import { FeatureCard } from "./Featurecard";
// import React from "react";

// interface Feature {
//   icon: LucideIcon;
//   title: string;
//   desc: string;
// }

// export default function MobileSimulator() {
//   const features: Feature[] = [
//     { icon: Layout, title: "Custom Page Development", desc: "We design and develop the exact number of pages..." },
//     { icon: ShieldCheck, title: "Secure Authentication", desc: "User login and signup systems..." },
//     { icon: MapPin, title: "Location Based Services", desc: "We integrate maps and location features..." },
//     { icon: ShoppingCart, title: "E-commerce Functionality", desc: "Complete online store development..." },
//     { icon: ClipboardList, title: "Order Management", desc: "Customers can view order history..." },
//     { icon: Phone, title: "Contact & Inquiry System", desc: "Contact forms, enquiry management..." },
//     { icon: Settings, title: "Admin Dashboard", desc: "A powerful admin panel to manage content..." },
//     { icon: Globe, title: "Scalable & SEO Friendly", desc: "Fast, responsive and SEO-optimized websites..." },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const isScrolling = useRef(false);

//   const scrollToIndex = (index: number) => {
//     const container = containerRef.current;
//     if (!container) return;
//     const itemHeight = container.clientHeight;

//     container.scrollTo({
//       top: index * itemHeight,
//       behavior: "smooth",
//     });
//   };

//   // Handle wheel scroll (desktop)
//   const handleWheel = (e: WheelEvent) => {
//     e.preventDefault();
//     if (isScrolling.current) return;

//     isScrolling.current = true;

//     if (e.deltaY > 0 && currentIndex < features.length - 1) {
//       setCurrentIndex(prev => prev + 1);
//     } else if (e.deltaY < 0 && currentIndex > 0) {
//       setCurrentIndex(prev => prev - 1);
//     }

//     setTimeout(() => {
//       isScrolling.current = false;
//     }, 500); // duration matches scroll
//   };

//   // Touch events (mobile)
//   const touchStartY = useRef(0);

//   const handleTouchStart = (e: TouchEvent) => {
//     touchStartY.current = e.touches[0].clientY;
//   };

//   const handleTouchEnd = (e: TouchEvent) => {
//     const diff = touchStartY.current - e.changedTouches[0].clientY;
//     if (Math.abs(diff) < 20) return;

//     if (diff > 0 && currentIndex < features.length - 1) setCurrentIndex(prev => prev + 1);
//     if (diff < 0 && currentIndex > 0) setCurrentIndex(prev => prev - 1);
//   };

//   // Apply scrolling to current index
//   React.useEffect(() => {
//     scrollToIndex(currentIndex);
//   }, [currentIndex]);

//   React.useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     container.addEventListener("wheel", handleWheel, { passive: false });
//     container.addEventListener("touchstart", handleTouchStart, { passive: false });
//     container.addEventListener("touchend", handleTouchEnd, { passive: false });

//     return () => {
//       container.removeEventListener("wheel", handleWheel);
//       container.removeEventListener("touchstart", handleTouchStart);
//       container.removeEventListener("touchend", handleTouchEnd);
//     };
//   }, [currentIndex]);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-200">
//       <div className="w-72 h-[600px] bg-white rounded-3xl shadow-xl border-4 border-black relative flex flex-col overflow-hidden">

//         {/* Top Camera / Notch */}
//         <div className="h-12 bg-gray-100 w-full flex justify-center items-center relative">
//           <div className="w-4 h-4 bg-black rounded-full absolute left-1/2 transform -translate-x-1/2 top-2"></div>
//           <div className="w-16 h-4 bg-black rounded-b-md absolute left-1/2 transform -translate-x-1/2 top-2"></div>
//         </div>

//         {/* Feature Screen */}
//         <div
//           ref={containerRef}
//           className="flex-1 overflow-hidden relative"
//         >
//           {features.map((feature, i) => (
//             <div
//               key={i}
//               className="h-[600px] w-full absolute top-0 left-0 flex justify-center items-center"
//               style={{ transform: `translateY(${(i - currentIndex) * 100}%)`, transition: "transform 0.5s ease" }}
//             >
//               <FeatureCard feature={feature} />
//             </div>
//           ))}
//         </div>

//         {/* Bottom Buttons */}
//         <div className="h-16 bg-gray-100 w-full flex justify-around items-center border-t border-gray-300">
//           <button className="w-8 h-8 bg-black rounded-full"></button>
//           <button className="w-8 h-8 bg-black rounded-full"></button>
//           <button className="w-8 h-8 bg-black rounded-full"></button>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useEffect, useRef } from "react";
import { Layout, ShieldCheck, MapPin, ShoppingCart, ClipboardList, Phone, Settings, Globe, LucideIcon } from "lucide-react";
import { FeatureCard } from "./Featurecard";
import React from "react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export default function MobileSimulator() {
  const features: Feature[] = [
    { icon: Layout, title: "Custom Page Development", desc: "We design and develop the exact number of pages..." },
    { icon: ShieldCheck, title: "Secure Authentication", desc: "User login and signup systems..." },
    { icon: MapPin, title: "Location Based Services", desc: "We integrate maps and location features..." },
    { icon: ShoppingCart, title: "E-commerce Functionality", desc: "Complete online store development..." },
    { icon: ClipboardList, title: "Order Management", desc: "Customers can view order history..." },
    { icon: Phone, title: "Contact & Inquiry System", desc: "Contact forms, enquiry management..." },
    { icon: Settings, title: "Admin Dashboard", desc: "A powerful admin panel to manage content..." },
    { icon: Globe, title: "Scalable & SEO Friendly", desc: "Fast, responsive and SEO-optimized websites..." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isScrolling = useRef(false);
  const touchStartY = useRef(0);

  // Scroll / swipe handlers
  const handleWheel = (e: WheelEvent) => {
    const atStart = currentIndex === 0;
    const atEnd = currentIndex === features.length - 1;

    if ((e.deltaY < 0 && !atStart) || (e.deltaY > 0 && !atEnd)) {
      e.preventDefault(); // prevent parent scroll
    }

    if (isScrolling.current) return;
    isScrolling.current = true;

    if (e.deltaY > 0 && !atEnd) setCurrentIndex(prev => prev + 1);
    if (e.deltaY < 0 && !atStart) setCurrentIndex(prev => prev - 1);

    setTimeout(() => (isScrolling.current = false), 300);
  };



const handleTouchStart = (e: TouchEvent) => {
  touchStartY.current = e.touches[0].clientY;
};

const handleTouchMove = (e: TouchEvent) => {
  const currentY = e.touches[0].clientY;
  const diff = touchStartY.current - currentY;

  const atStart = currentIndex === 0;
  const atEnd = currentIndex === features.length - 1;

  if ((diff > 0 && !atEnd) || (diff < 0 && !atStart)) {
    e.preventDefault(); // stop page scroll
  }
};

const handleTouchEnd = (e: TouchEvent) => {
  const diff = touchStartY.current - e.changedTouches[0].clientY;
  const atStart = currentIndex === 0;
  const atEnd = currentIndex === features.length - 1;

  if (Math.abs(diff) < 40) return;

  if (diff > 0 && !atEnd) setCurrentIndex(prev => prev + 1);
  if (diff < 0 && !atStart) setCurrentIndex(prev => prev - 1);
};


  // const handleTouchStart = (e: TouchEvent) => {
  //   touchStartY.current = e.touches[0].clientY;
  // };

  // const handleTouchEnd = (e: TouchEvent) => {
  //   const diff = touchStartY.current - e.changedTouches[0].clientY;
  //   const atStart = currentIndex === 0;
  //   const atEnd = currentIndex === features.length - 1;

  //   if (Math.abs(diff) < 20) return;

  //   if ((diff > 0 && !atEnd) || (diff < 0 && !atStart)) e.preventDefault();

  //   if (diff > 0 && !atEnd) setCurrentIndex(prev => prev + 1);
  //   if (diff < 0 && !atStart) setCurrentIndex(prev => prev - 1);
  // };

  // Attach native listeners



  useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  container.addEventListener("wheel", handleWheel, { passive: false });
  container.addEventListener("touchstart", handleTouchStart, { passive: false });
  container.addEventListener("touchmove", handleTouchMove, { passive: false });
  container.addEventListener("touchend", handleTouchEnd);

  return () => {
    container.removeEventListener("wheel", handleWheel);
    container.removeEventListener("touchstart", handleTouchStart);
    container.removeEventListener("touchmove", handleTouchMove);
    container.removeEventListener("touchend", handleTouchEnd);
  };
}, [currentIndex]);


  // useEffect(() => {
  //   const container = containerRef.current;
  //   if (!container) return;

  //   container.addEventListener("wheel", handleWheel, { passive: false });
  //   container.addEventListener("touchstart", handleTouchStart, { passive: false });
  //   container.addEventListener("touchend", handleTouchEnd, { passive: false });

  //   return () => {
  //     container.removeEventListener("wheel", handleWheel);
  //     container.removeEventListener("touchstart", handleTouchStart);
  //     container.removeEventListener("touchend", handleTouchEnd);
  //   };
  // }, [currentIndex]);

  return (
   <div className="flex flex-col items-center min-h-screen bg-white">
      <h1 className="text-3xl font-bold text-black">Advance UI</h1>
<p className="text-gray-600 text-sm mt-2">Explore interactive features and smooth transitions</p>
      <div className="w-72 h-[600px] bg-white rounded-3xl shadow-xl border-4 border-black relative flex flex-col overflow-hidden">

        {/* Top Camera / Notch */}
        <div className="h-12 bg-gray-100 w-full flex justify-center items-center relative">
          <div className="w-4 h-4 bg-black rounded-full absolute left-1/2 transform -translate-x-1/2 top-2"></div>
          <div className="w-16 h-4 bg-black rounded-b-md absolute left-1/2 transform -translate-x-1/2 top-2"></div>
        </div>

        {/* Feature Screen */}
        <div ref={containerRef} className="flex-1 flex justify-center items-center">
          <FeatureCard feature={features[currentIndex]} />
        </div>

        {/* Bottom Buttons */}
        <div className="h-16 bg-gray-100 w-full flex justify-around items-center border-t border-gray-300">
          <button className="w-8 h-8 bg-black rounded-full"></button>
          <button className="w-8 h-8 bg-black rounded-full"></button>
          <button className="w-8 h-8 bg-black rounded-full"></button>
        </div>
      </div>
    </div>
  );
}