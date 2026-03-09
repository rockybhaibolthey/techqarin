// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function ServicesSection() {
//   const services = [
//     {
//       title: "Web Development",
//       desc: "High-performance, responsive, SEO-friendly websites powered by React, Next.js, and modern technologies.",
//       img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&auto=format&fit=crop&q=60",
//     },
//     {
//       title: "Mobile App Development",
//       desc: "Powerful iOS & Android apps built using Flutter and React Native for smooth cross-platform experiences.",
//       img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
//     },
//     {
//       title: "Custom Software Solutions",
//       desc: "Enterprise systems, SaaS platforms, dashboards, CRMs, ERPs, and automated business tools.",
//       img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&auto=format&fit=crop&q=60",
//     },
//   ];

//   return (
//     <section className="py-24 bg-gray-900">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center mb-14 text-white">Our Services</h2>

//         <div className="grid md:grid-cols-3 gap-10">
//           {services.map((service, i) => (
//             <motion.div
//               key={i}
//               className="relative bg-gray-800 p-8 rounded-xl border border-gray-700 overflow-hidden flex items-center"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ duration: 0.8 }}
//               variants={{
//                 hidden: { opacity: 0, y: 50 },
//                 visible: { opacity: 1, y: 0 }
//               }}
//             >
//               {/* Image sliding from left */}
//               <motion.div
//                 className="flex-shrink-0 w-24 h-24 mr-6"
//                 initial={{ x: -100, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ type: "spring", stiffness: 80, damping: 12 }}
//               >
//                 <Image
//                   src={service.img}
//                   alt={service.title}
//                   width={96} // 24 * 4 = 96px
//                   height={96}
//                   className="object-cover rounded-lg"
//                 />
//               </motion.div>

//               {/* Text sliding from right */}
//               <motion.div
//                 initial={{ x: 100, opacity: 0 }}
//                 whileInView={{ x: 0, opacity: 1 }}
//                 transition={{ type: "spring", stiffness: 80, damping: 12 }}
//               >
//                 <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
//                 <p className="text-gray-400">{service.desc}</p>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// components/ServicesSection.jsx


import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60",
    description: "Building responsive and modern websites."
  },
  {
    title: "Mobile Apps",
    img: "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=600&auto=format&fit=crop&q=60",
    description: "Creating seamless mobile experiences."
  },
  {
    title: "UI/UX Design",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
    description: "Designing intuitive user interfaces."
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-black">
  Our Services
</h2>
    <p className="text-center text-gray-700 text-lg mb-12">
      Delivering modern web, mobile, and design solutions tailored for your business.
    </p>
        <div className="grid md:grid-cols-3 gap-8">
  {services.map((service, index) => (
  <motion.div
    key={index}
    className="relative h-72 rounded-lg overflow-hidden shadow-lg"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.4 }}
  >

    {/* Image from left */}
    <motion.img
      src={service.img}
      alt={service.title}
      variants={{
        hidden: { x: -120, opacity: 0 },
        visible: { x: 0, opacity: 1 }
      }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Stripe from right */}
    <motion.div
      variants={{
        hidden: { x: "100%", opacity: 0 },
        visible: { x: 0, opacity: 1 }
      }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/90 backdrop-blur-md p-4 rounded-l-lg shadow-2xl w-48 z-20"
    >
      <h3 className="font-bold text-xl text-gray-900">
        {service.title}
      </h3>

      <p className="text-gray-700 text-sm mt-1">
        {service.description}
      </p>
    </motion.div>

  </motion.div>
))}
        </div>
      </div>
    </section>
  );
}