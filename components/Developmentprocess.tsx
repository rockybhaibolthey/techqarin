// import { motion } from "framer-motion";

// export default function DevelopmentProcess() {
//   const steps = [
//     {
//       title: "Discovery",
//       desc: "We analyze your goals, research the market & plan a precise roadmap.",
//       metadata: "Research & Strategy",
//       tooltip: "Market research, competitor analysis, requirement gathering",
//       img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2h8ZW58MHx8MHx8fDA%3D",
//     },
//     {
//       title: "Design",
//       desc: "Creating UI/UX that is intuitive, modern, and fully aligned with your brand.",
//       metadata: "UI/UX Excellence",
//       tooltip: "Wireframes, prototyping, branding consistency",
//       img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2h8ZW58MHx8MHx8fDA%3D",
//     },
//     {
//       title: "Development",
//       desc: "Fast, secure, scalable engineering for web and mobile applications.",
//       metadata: "Engineering & Coding",
//       tooltip: "Frontend, backend, APIs, cloud integration",
//       img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlY2h8ZW58MHx8MHx8fDA%3D",
//     },
//     {
//       title: "Launch",
//       desc: "Optimized deployment, monitoring, and ongoing support for growth.",
//       metadata: "Deployment & Support",
//       tooltip: "Deployment, CI/CD, monitoring, analytics",
//       img: "https://plus.unsplash.com/premium_photo-1683836722388-8643468c327d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
//     },
//   ];

//   return (
//     <section className="py-16 md:py-20 bg-gray-50 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
//           Our Development Process
//         </h2>

//         <div className="flex flex-col space-y-16">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.3 }}
//               className="flex flex-col md:flex-row items-center md:space-x-8"
//             >
//               {/* Text Content (Left) */}
//               <motion.div
//                 className="md:flex-1"
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7, delay: index * 0.3 + 0.1 }}
//               >
//                 <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
//                   {step.title}
//                 </h3>
//                 <span className="text-gray-400 text-sm mb-2 block">
//                   {step.metadata}
//                 </span>
//                 <div className="text-gray-300 text-xs mb-3">{step.tooltip}</div>
//                 <p className="text-gray-500 text-base leading-relaxed">
//                   {step.desc}
//                 </p>
//               </motion.div>

//               {/* Image (Right) */}
//               <div className="md:flex-1 mt-6 md:mt-0 flex justify-center">
//                 <img
//                   src={step.img}
//                   alt={step.title}
//                   className="w-full md:w-[90%] rounded-3xl shadow-2xl object-cover"
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Footer text */}
//         <div className="mt-12 text-center text-gray-500 text-sm md:text-base space-y-2">
//           <p>
//             Each step is designed to ensure your project progresses seamlessly
//             from idea to launch.
//           </p>
//           <p>
//             Combining research, design, development, and deployment with
//             precision, speed, and modern technology ensures your project
//             reaches production efficiently.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { motion } from "framer-motion";

// export default function DevelopmentProcess() {

//   const stepsLeft = [
//     {
//       number: "01",
//       title: "Discovery",
//       desc: "Research, competitor analysis and planning the roadmap.",
//     },
//     {
//       number: "02",
//       title: "Design",
//       desc: "UI/UX wireframes, product design and brand alignment.",
//     },
//   ];

//   const stepsRight = [
//     {
//       number: "03",
//       title: "Development",
//       desc: "Frontend, backend, APIs and scalable architecture.",
//     },
//     {
//       number: "04",
//       title: "Launch",
//       desc: "Deployment, testing, monitoring and support.",
//     },
//   ];

//   return (
//     <section className="py-24 bg-[#0b2a8f] text-white overflow-hidden">

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-20">

//           <h2 className="text-4xl md:text-5xl font-bold">
//             Our Development Process
//           </h2>

//         </div>

//         <div className="grid md:grid-cols-3 items-center gap-10">

//           {/* LEFT SIDE */}
//           <div className="space-y-16">

//             {stepsLeft.map((step, index) => (

//               <motion.div
//                 key={index}
//                 initial={{opacity:0, x:-50}}
//                 whileInView={{opacity:1, x:0}}
//                 transition={{duration:0.6}}
//                 viewport={{once:true}}
//               >

//                 <h3 className="text-5xl font-bold opacity-90">
//                   {step.number}
//                 </h3>

//                 <div className="h-[2px] w-full bg-white/50 my-3"></div>

//                 <p className="text-lg font-medium">
//                   {step.title}
//                 </p>

//                 <p className="text-sm text-white/70 mt-2">
//                   {step.desc}
//                 </p>

//               </motion.div>

//             ))}

//           </div>


//           {/* CENTER IMAGE */}
//           <motion.div
//             initial={{opacity:0, scale:0.8}}
//             whileInView={{opacity:1, scale:1}}
//             transition={{duration:0.7}}
//             viewport={{once:true}}
//             className="flex justify-center"
//           >

//             <img
//               src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
//               alt="mobile"
//               className="h-[520px] object-contain drop-shadow-2xl"
//             />

//           </motion.div>


//           {/* RIGHT SIDE */}
//           <div className="space-y-16">

//             {stepsRight.map((step, index) => (

//               <motion.div
//                 key={index}
//                 initial={{opacity:0, x:50}}
//                 whileInView={{opacity:1, x:0}}
//                 transition={{duration:0.6}}
//                 viewport={{once:true}}
//               >

//                 <h3 className="text-5xl font-bold opacity-90">
//                   {step.number}
//                 </h3>

//                 <div className="h-[2px] w-full bg-white/50 my-3"></div>

//                 <p className="text-lg font-medium">
//                   {step.title}
//                 </p>

//                 <p className="text-sm text-white/70 mt-2">
//                   {step.desc}
//                 </p>

//               </motion.div>

//             ))}

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";

// export default function AppDevelopmentSection() {
//   const services = [
//     {
//       title: "iOS & Android App Development",
//       desc: "We build high-performance mobile apps for both iOS and Android using modern frameworks, ensuring smooth user experience and scalable architecture.",
//       img: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
//     },
//     {
//       title: "User Authentication & Profiles",
//       desc: "Secure login systems including OTP, social login, user profile management and secure session handling.",
//       img: "https://images.unsplash.com/photo-1526498460520-4c246339dccb",
//     },
//     {
//       title: "E-Commerce Mobile Apps",
//       desc: "Full ecommerce functionality including product catalog, cart, payments, order management, order history and cancellations.",
//       img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
//     },
//     {
//       title: "AI Integration",
//       desc: "Integrate AI powered features like recommendations, chat assistants, predictive analytics and automation.",
//       img: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
//     },
//     {
//       title: "Location Based Services",
//       desc: "Real-time location tracking, maps integration, delivery tracking, and location-based services.",
//       img: "https://images.unsplash.com/photo-1524661135-423995f22d0b",
//     },
//     {
//       title: "Business Scaling Apps",
//       desc: "Apps designed to automate operations, manage orders, handle customers and scale your business digitally.",
//       img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
//     },
//   ];

//   return (
//     <section className="w-full py-24 px-6 bg-white">
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl font-semibold mb-4">
//             Mobile App Development
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             We develop powerful mobile applications that help startups and
//             businesses launch, grow and scale digitally across iOS and Android
//             platforms.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 gap-12">

//           {services.map((service, index) => {
//             const fromLeft = index % 2 === 0;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: fromLeft ? -100 : 100 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.7 }}
//                 viewport={{ once: true, amount: 0.3 }}
//                 className="relative h-[320px] rounded-2xl overflow-hidden shadow-lg"
//               >
//                 {/* Background Image */}
//                 <img
//                   src={service.img}
//                   alt={service.title}
//                   className="absolute w-full h-full object-cover"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/40"></div>

//                 {/* Bottom Stripe */}
//                 <div className="absolute bottom-0 w-full bg-black/70 backdrop-blur-md p-6 text-white">
//                   <h3 className="text-xl font-semibold mb-2">
//                     {service.title}
//                   </h3>
//                   <p className="text-sm text-gray-200">
//                     {service.desc}
//                   </p>
//                 </div>

//               </motion.div>
//             );
//           })}

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";

export default function DevelopmentProcess() {

  const steps = [
    {
      number: "01",
      title: "Discovery",
      desc: "Research, competitor analysis and planning the roadmap.",
    },
    {
      number: "02",
      title: "Design",
      desc: "UI/UX wireframes, product design and brand alignment.",
    },
    {
      number: "03",
      title: "Development",
      desc: "Frontend, backend, APIs and scalable architecture.",
    },
    {
      number: "04",
      title: "Launch",
      desc: "Deployment, testing, monitoring and support.",
    },
  ];

  return (
    <section className="py-24 bg-[#0b2a8f] text-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Development Process
          </h2>
        </div>

        <div className="grid md:grid-cols-3 items-center gap-10">

          {/* LEFT */}
          <div className="space-y-16">

            {steps.slice(0,2).map((step, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.4 }}
              >

                <h3 className="text-5xl font-bold opacity-90">
                  {step.number}
                </h3>

                <div className="h-[2px] w-full bg-white/50 my-3"></div>

                <p className="text-lg font-medium">{step.title}</p>

                <p className="text-sm text-white/70 mt-2">{step.desc}</p>

              </motion.div>

            ))}

          </div>

          {/* CENTER */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 80 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.5 }}
            className="flex justify-center"
          >
         
          </motion.div>

          {/* RIGHT */}
          <div className="space-y-16">

            {steps.slice(2,4).map((step, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.4 }}
              >

                <h3 className="text-5xl font-bold opacity-90">
                  {step.number}
                </h3>

                <div className="h-[2px] w-full bg-white/50 my-3"></div>

                <p className="text-lg font-medium">{step.title}</p>

                <p className="text-sm text-white/70 mt-2">{step.desc}</p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}