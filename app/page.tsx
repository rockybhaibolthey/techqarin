// 'use client';
// import { motion } from 'framer-motion';
// import ServicesSection from '../components/ServicesSection';
// import DevelopmentProcess from '../components/Developmentprocess';
// import WebsiteFeatures from '../components/WebsiteFeatures';
// import AppDevelopmentSection from '../components/AppDevelopmentSection';
// import Mobile from '../components/mobile';
// import CTASection from '../components/CTASection';
// import HeroAnimatedText from '../components/HeroAnimatedText';
// import Link from "next/link";
// import Image from 'next/image';
// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gray-950 text-white">

//       {/* NAVBAR */}
//       <nav className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-gray-800">
//         <h1 className="text-2xl font-bold tracking-wide">
//           Tech<span className="text-blue-500">qarin</span>
//         </h1>
// {/* 
//         <div className="hidden md:flex items-center gap-8 text-gray-300">
//           <Link href="/" className="hover:text-white">Home</Link>
//           <Link href="/services" className="hover:text-white">Services</Link>
//           <Link href="/portfolio" className="hover:text-white">Portfolio</Link>
//           <Link href="/contact" className="hover:text-white">Contact</Link>
//         </div>

//         <button className="md:hidden bg-gray-800 px-3 py-2 rounded">
//           ☰
//         </button> */}
//       </nav>

//       {/* HERO */}



//   {/* Floating Stats */}
//   {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
//     <div>
//       <h3 className="text-4xl font-bold">120+</h3>
//       <p className="text-gray-400">Projects Delivered</p>
//     </div>

//     <div>
//       <h3 className="text-4xl font-bold">40+</h3>
//       <p className="text-gray-400">Global Clients</p>
//     </div>

//     <div>
//       <h3 className="text-4xl font-bold">10+</h3>
//       <p className="text-gray-400">Industries Served</p>
//     </div>

//     <div>
//       <h3 className="text-4xl font-bold">5+</h3>
//       <p className="text-gray-400">Years of Experience</p>
//     </div>
//   </div> */}

// <HeroAnimatedText />
//       {/* SERVICES */}
//        <ServicesSection />
//        <DevelopmentProcess />
//        <WebsiteFeatures />
//        <AppDevelopmentSection />
//        <Mobile />
//       {/* <section className="py-24 bg-gray-900">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-14">Our Services</h2>

//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               {
//                 title: "Web Development",
//                 desc: "High-performance, responsive, SEO-friendly websites powered by React, Next.js, and modern technologies."
//               },
//               {
//                 title: "Mobile App Development",
//                 desc: "Powerful iOS & Android apps built using Flutter and React Native for smooth cross-platform experiences."
//               },
//               {
//                 title: "Custom Software Solutions",
//                 desc: "Enterprise systems, SaaS platforms, dashboards, CRMs, ERPs, and automated business tools."
//               }
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-gray-800 p-8 rounded-xl hover:scale-105 transition border border-gray-700"
//               >
//                 <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
//                 <p className="text-gray-400">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* PROCESS */}
//       {/* <section className="py-24">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-14">
//             Our Development Process
//           </h2>

//           <div className="grid md:grid-cols-4 gap-10 text-center">
//             {[
//               ["Discovery", "Understanding your goals & planning the roadmap."],
//               ["Design", "Crafting UI/UX that aligns with your brand identity."],
//               ["Development", "Fast, secure, scalable engineering at its core."],
//               ["Launch", "Optimized deployment, monitoring & support."]
//             ].map(([title, desc], i) => (
//               <div key={i} className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">{title}</h3>
//                 <p className="text-gray-400">{desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

   
//       {/* <section className="py-24 bg-gray-900">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-10">Technology Stack</h2>

//           <div className="flex flex-wrap justify-center gap-4 text-gray-300 text-lg">
//             {[
//               "Next.js", "React", "Node.js", "Flutter",
//               "TypeScript", "Tailwind CSS", "MongoDB", "Firebase", "AWS"
//             ].map((tech, i) => (
//               <span
//                 key={i}
//                 className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

     
//       <section className="py-24">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-10">What Clients Say</h2>

//           <div className="grid md:grid-cols-3 gap-10">
//             {[
//               ["Techqarin transformed our entire online presence!", "John Carter"],
//               ["Exceptional quality, fast delivery, and great communication.", "Lina Ahmed"],
//               ["The best development team we've worked with!", "Michael Lee"]
//             ].map(([review, name], i) => (
//               <div
//                 key={i}
//                 className="bg-gray-900 p-8 rounded-xl border border-gray-800"
//               >
//                 <p className="text-gray-300 mb-4">“{review}”</p>
//                 <h4 className="font-semibold text-blue-400">{name}</h4>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* <section className="py-24 text-center bg-blue-600">
//         <h2 className="text-4xl font-bold mb-6 text-white">
//           Ready to Build Something Amazing?
//         </h2>

//         <button className="bg-white text-blue-700 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100">
//           Contact Us Today
//         </button>
//       </section> */}
// <CTASection />
//       {/* FOOTER */}
//       <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
//         © {new Date().getFullYear()} Techqarin. All rights reserved.
//       </footer>

//     </main>
//   );
// }
// // 'use client';
// // import { motion } from 'framer-motion';
// // import Image from 'next/image';

// // export default function Home() {
// //   return (
// //     <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white overflow-hidden">

// //       {/* Hero Section */}
// //       <section className="relative h-screen flex items-center">
// //         <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center">

// //           {/* Text */}
// //           <motion.div
// //             initial={{ opacity: 0, x: -50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 1 }}
// //             className="md:w-1/2 text-center md:text-left"
// //           >
// //             <h1 className="text-4xl md:text-6xl font-bold mb-4">
// //               We Build Stunning Websites & Scalable Applications
// //             </h1>
// //             <p className="text-lg md:text-xl mb-6">
// //               From startups to enterprises, we deliver custom web and mobile solutions tailored to your business.
// //             </p>
// //             <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
// //               <a href="/contact" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
// //                 Get a Quote
// //               </a>
// //               <a href="/portfolio" className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
// //                 View Our Work
// //               </a>
// //             </div>
// //           </motion.div>

// //           {/* Image */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 1 }}
// //             className="md:w-1/2 mb-10 md:mb-0 flex justify-center"
// //           >
// //             <Image
// //               src="/hero-image.png" // Replace with your image
// //               alt="Hero Visual"
// //               width={500}
// //               height={500}
// //               className="rounded-xl shadow-2xl animate-float"
// //             />
// //           </motion.div>
// //         </div>

// //         {/* Animated Background Shapes */}
// //         <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
// //           <motion.div
// //             animate={{ y: [0, 20, 0] }}
// //             transition={{ duration: 5, repeat: Infinity }}
// //             className="absolute bg-white opacity-10 w-72 h-72 rounded-full top-20 left-10 blur-3xl"
// //           />
// //           <motion.div
// //             animate={{ y: [0, -20, 0] }}
// //             transition={{ duration: 6, repeat: Infinity }}
// //             className="absolute bg-white opacity-10 w-64 h-64 rounded-full bottom-10 right-20 blur-3xl"
// //           />
// //         </div>
// //       </section>

// //       {/* Services Section */}
// //       <section className="py-20 bg-white text-gray-800">
// //         <div className="container mx-auto px-6 text-center">
// //           <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Our Services</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// //             <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
// //               <h3 className="text-xl font-semibold mb-4">Web Development</h3>
// //               <p>Custom websites, e-commerce platforms, and CMS solutions tailored to your business.</p>
// //             </div>
// //             <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
// //               <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
// //               <p>iOS, Android, and cross-platform apps designed for performance and scalability.</p>
// //             </div>
// //             <div className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
// //               <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
// //               <p>Engaging, intuitive designs that enhance user experience and drive conversions.</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Portfolio Preview Section */}
// //       <section className="py-20 bg-gray-100 text-gray-900">
// //         <div className="container mx-auto px-6 text-center">
// //           <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Work</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             <Image src="/project1.png" alt="Project 1" width={400} height={300} className="rounded-lg shadow-md" />
// //             <Image src="/project2.png" alt="Project 2" width={400} height={300} className="rounded-lg shadow-md" />
// //             <Image src="/project3.png" alt="Project 3" width={400} height={300} className="rounded-lg shadow-md" />
// //           </div>
// //           <a href="/portfolio" className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">View All Projects</a>
// //         </div>
// //       </section>

// //       {/* Testimonials Section */}
// //       <section className="py-20 bg-white text-gray-800">
// //         <div className="container mx-auto px-6 text-center">
// //           <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">What Our Clients Say</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// //             <div className="p-6 rounded-xl shadow-lg">
// //               <p>“Amazing team! Our website traffic increased 3x in just 2 months.”</p>
// //               <h4 className="mt-4 font-semibold">John Doe, CEO</h4>
// //             </div>
// //             <div className="p-6 rounded-xl shadow-lg">
// //               <p>“Highly professional and delivered our mobile app on time.”</p>
// //               <h4 className="mt-4 font-semibold">Jane Smith, Founder</h4>
// //             </div>
// //             <div className="p-6 rounded-xl shadow-lg">
// //               <p>“Great UX/UI design and excellent support throughout the project.”</p>
// //               <h4 className="mt-4 font-semibold">Mike Johnson, CTO</h4>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Final Call-to-Action */}
// //       <section className="py-20 bg-blue-600 text-white text-center">
// //         <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
// //         <a href="/contact" className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition">Get in Touch</a>
// //       </section>

// //       {/* Floating Animation CSS */}
// //       <style jsx>{`
// //         @keyframes float {
// //           0%, 100% { transform: translateY(0); }
// //           50% { transform: translateY(-15px); }
// //         }
// //         .animate-float {
// //           animation: float 4s ease-in-out infinite;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }




"use client";

import { motion } from "framer-motion";
import { useState } from "react";

/* ================= TYPES ================= */

type CardProps = {
  title: string;
  desc: string;
};

type StepProps = {
  title: string;
};

/* ================= PAGE ================= */

export default function Home() {
    const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    number: "",
    comments: "",
  });

const handleSubmit = async () => {
    try {
      const res = await fetch(
        "https://0gb8de1kda.execute-api.us-east-1.amazonaws.com/2order/2order/techqarin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      console.log(data);

      alert("Submitted successfully 🚀");
      setOpen(false);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };


  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
        >
          Techqarin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg md:text-xl max-w-2xl text-gray-300"
        >
          Building digital products that simplify everyday life — from smart
          utilities to AI-powered applications.
        </motion.p>
      </section>

      {/* PRODUCTS */}
     <section className="py-24 px-6 md:px-20 bg-white">
 <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 tracking-tight text-black">
  Our Products
</h2>

  <div className="max-w-4xl mx-auto divide-y divide-gray-200">

    <div className="py-8 group cursor-pointer transition-all duration-300 hover:translate-x-2">
      <h3 className="text-2xl font-medium text-gray-900 group-hover:text-black">
        Cyklze
      </h3>
     <p className="text-gray-500 mt-2 max-w-xl leading-relaxed">
  We designed this app keeping in mind the everyday challenges people face while selling scrap. Many aren’t aware of the right price they should get per kilogram, and often end up settling for less. On top of that, carrying scrap all the way to a shop can be inconvenient and time-consuming. Our solution makes the process transparent and effortless — giving users fair price visibility, easy pickup scheduling, and a smoother way to turn waste into value without the hassle.
</p>
    </div>

    <div className="py-8 group cursor-pointer transition-all duration-300 hover:translate-x-2">
      <h3 className="text-2xl font-medium text-gray-900 group-hover:text-black">
        News Recap App
      </h3>
      <p className="text-gray-500 mt-2 max-w-xl">
        Get daily summarized news in minutes without overload.
      </p>
    </div>

    <div className="py-8 group cursor-pointer transition-all duration-300 hover:translate-x-2">
      <h3 className="text-2xl font-medium text-gray-900 group-hover:text-black">
        AI Utility Apps
      </h3>
      <p className="text-gray-500 mt-2 max-w-xl">
        Smart tools to automate tasks and boost productivity.
      </p>
    </div>

  </div>
</section>

      {/* PROCESS */}
      {/* <section className="py-20 bg-zinc-900 px-6 md:px-20">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Our Approach
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <Step title="Problem First" />
          <Step title="Smart Design" />
          <Step title="Scalable Build" />
          <Step title="Continuous Growth" />
        </div>
      </section> */}

      {/* VISION */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-semibold mb-6">Our Vision</h2>
        <p className="max-w-2xl mx-auto text-gray-400">
          To create digital products that become part of everyday life —
          helping people save time, make better decisions, and live smarter.
        </p>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-semibold mb-6">
          Connect ?
        </h2>
       <button
  onClick={() => setOpen(true)}
  className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:scale-105 transition"
>
  lets connect
</button>
      </section>
{open && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white text-black rounded-2xl p-8 w-full max-w-md"
    >
      <h3 className="text-2xl font-semibold mb-6">Let’s Connect</h3>

      <input
        type="text"
        placeholder="Your Name"
        className="w-full mb-4 p-3 border rounded-lg"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Phone Number"
        className="w-full mb-4 p-3 border rounded-lg"
        onChange={(e) =>
          setForm({ ...form, number: e.target.value })
        }
      />

      <textarea
        placeholder="Comments"
        className="w-full mb-6 p-3 border rounded-lg"
        onChange={(e) =>
          setForm({ ...form, comments: e.target.value })
        }
      />

      <div className="flex justify-between">
        <button
          onClick={() => setOpen(false)}
          className="text-gray-500"
        >
          Cancel
        </button>

        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-black text-white rounded-lg hover:opacity-80"
        >
          Submit
        </button>
      </div>
    </motion.div>
  </div>
)}
    </main>
  );
}

/* ================= COMPONENTS ================= */

function Card({ title, desc }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800"
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </motion.div>
  );
}

function Step({ title }: StepProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-black rounded-xl border border-zinc-800"
    >
      <h3 className="text-lg font-medium">{title}</h3>
    </motion.div>
  );
}