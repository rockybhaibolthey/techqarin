// "use client";

// import { motion } from "framer-motion";

// export default function AppDevelopmentSection() {

//   const services = [
//     {
//       title: "Android & iOS App Development",
//       desc: "We build high-performance mobile applications for both Android and iOS platforms, ensuring a seamless experience across devices.",
//       img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
//     },
//     {
//       title: "Secure Authentication",
//       desc: "User authentication systems including OTP login, email authentication, and social logins to keep your users safe and secure.",
//       img: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
//     },
//     {
//       title: "User Profiles & Personalization",
//       desc: "Custom profile systems where users can manage personal information, settings, preferences, and activity history.",
//       img: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
//     },
//     {
//       title: "E-commerce Mobile Apps",
//       desc: "Complete mobile commerce solutions including product listings, shopping cart, checkout systems, order tracking, and payment integrations.",
//       img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
//     },
//     {
//       title: "Order Management Systems",
//       desc: "Users can place orders, track deliveries, view order history, and cancel orders while admins manage operations efficiently.",
//       img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
//     },
//     {
//       title: "AI Feature Integration",
//       desc: "We integrate AI capabilities like chatbots, recommendations, smart search, automation, and data insights into your mobile applications.",
//       img: "https://images.unsplash.com/photo-1677442135136-760c813028c0",
//     },
//     {
//       title: "Custom Business Apps",
//       desc: "We create tailored apps for startups, enterprises, and service businesses to streamline workflows and enhance productivity.",
//       img: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
//     },
//     {
//       title: "Scalable Mobile Platforms",
//       desc: "Our apps are designed to scale with your business, handling increasing users, transactions, and features as your company grows.",
//       img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
//             How We Build Powerful Mobile Apps
//           </h2>

//           <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
//             We design and develop modern mobile applications that help businesses
//             connect with users, streamline operations, and scale their services
//             through powerful mobile experiences.
//           </p>
//         </div>

//         {/* Services */}
//         <div className="space-y-16">

//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className={`flex flex-col md:flex-row items-center gap-10 ${
//                 index % 2 === 1 ? "md:flex-row-reverse" : ""
//               }`}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >

//               {/* Image */}
//               <div className="md:w-1/2">
//                 <img
//                   src={service.img}
//                   alt={service.title}
//                   className="rounded-2xl shadow-lg w-full object-cover h-[320px]"
//                 />
//               </div>

//               {/* Text */}
//               <div className="md:w-1/2">
//                 <h3 className="text-2xl font-semibold text-gray-900 mb-4">
//                   {service.title}
//                 </h3>

//                 <p className="text-gray-500 leading-relaxed">
//                   {service.desc}
//                 </p>
//               </div>

//             </motion.div>
//           ))}

//         </div>

//         {/* Bottom Text */}
//         <div className="text-center mt-16 max-w-3xl mx-auto">
//           <p className="text-gray-500">
//             From startups launching their first mobile product to businesses
//             scaling their services digitally, our mobile app development
//             approach focuses on performance, user experience, and long-term
//             scalability.
//           </p>
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
//       title: "Android & iOS Apps",
//       desc: "High-performance apps built for both Android and iOS devices.",
//       img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
//     },
//     {
//       title: "Authentication Systems",
//       desc: "Secure login using OTP, email authentication and social login.",
//       img: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
//     },
//     {
//       title: "User Profiles",
//       desc: "Personalized user profiles with settings, activity and account management.",
//       img: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
//     },
//     {
//       title: "E-commerce Apps",
//       desc: "Complete mobile stores with products, cart, checkout and payments.",
//       img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
//     },
//     {
//       title: "Order Management",
//       desc: "Users can track orders, view history and cancel orders easily.",
//       img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
//     },
//     {
//       title: "AI Features",
//       desc: "Smart AI integrations like chatbots, recommendations and automation.",
//       img: "https://images.unsplash.com/photo-1677442135136-760c813028c0",
//     },
//   ];

//   return (
//     <section className="py-24 bg-gray-50">

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-20">

//           <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
//             How We Build
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               {" "}Mobile Apps
//             </span>
//           </h2>

//           <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
//             We design modern mobile applications that help businesses grow,
//             automate operations and deliver exceptional user experiences.
//           </p>

//         </div>


//         {/* Cards */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {services.map((service, index) => (

//        <motion.div
//   key={index}
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6, delay: index * 0.1 }}
//   viewport={{ once: false, amount: 0.4 }}
//   className="group relative h-[340px] rounded-3xl overflow-hidden shadow-xl"
// >

//   {/* Background Image slow zoom */}
//   <motion.img
//     src={service.img}
//     alt={service.title}
//     initial={{ scale: 1 }}
//     whileInView={{ scale: 1.1 }}
//     transition={{ duration: 4, ease: "easeOut" }}
//     viewport={{ once: false }}
//     className="absolute inset-0 w-full h-full object-cover"
//   />

//   {/* Dark overlay */}
//   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

//   {/* Content */}
//   <div className="absolute bottom-0 w-full backdrop-blur-md bg-white/20 p-6">

//     {/* Title from left */}
//     <motion.h3
//       initial={{ x: -60, opacity: 0 }}
//       whileInView={{ x: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: false }}
//       className="text-white text-xl font-semibold mb-2"
//     >
//       {service.title}
//     </motion.h3>

//     {/* Description from right */}
//     <motion.p
//       initial={{ x: 60, opacity: 0 }}
//       whileInView={{ x: 0, opacity: 1 }}
//       transition={{ duration: 0.6, delay: 0.1 }}
//       viewport={{ once: false }}
//       className="text-gray-200 text-sm"
//     >
//       {service.desc}
//     </motion.p>

//   </div>

// </motion.div>

//           ))}

//         </div>


//         {/* Bottom text */}
//         <div className="text-center mt-20 max-w-3xl mx-auto">

//           <p className="text-gray-500 text-lg">
//             Whether you are launching a startup or scaling an existing
//             business, our mobile apps are built to deliver performance,
//             reliability and exceptional user experiences.
//           </p>

//         </div>

//       </div>

//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";

export default function AppDevelopmentSection() {

  const services = [
    {
      title: "Android & iOS Apps",
      desc: "High-performance apps built for both Android and iOS devices.",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    },
    {
      title: "Authentication Systems",
      desc: "Secure login using OTP, email authentication and social login.",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    },
    {
      title: "User Profiles",
      desc: "Personalized user profiles with settings, activity and account management.",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
    },
    {
      title: "E-commerce Apps",
      desc: "Complete mobile stores with products, cart, checkout and payments.",
      img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
    },
    {
      title: "Order Management",
      desc: "Users can track orders, view history and cancel orders easily.",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    },
    {
      title: "AI Features",
      desc: "Smart AI integrations like chatbots, recommendations and automation.",
      img: "https://images.unsplash.com/photo-1677442135136-760c813028c0",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">

      {/* Yellow Bubble */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-24 h-24 bg-yellow-400/40 rounded-full blur-xl"
      />

      {/* Pink Bubble */}
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -20, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-32 right-20 w-28 h-28 bg-pink-400/40 rounded-full blur-xl"
      />

      {/* Small Yellow Bubble */}
      <motion.div
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -20, 10, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/3 w-16 h-16 bg-yellow-300/40 rounded-full blur-lg"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            How We Build
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Mobile Apps
            </span>
          </h2>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
            We design modern mobile applications that help businesses grow,
            automate operations and deliver exceptional user experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.4 }}
              className="group relative h-[340px] rounded-3xl overflow-hidden shadow-xl"
            >

              {/* Background Image */}
              <motion.img
                src={service.img}
                alt={service.title}
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.08 }}
                transition={{ duration: 8, ease: "easeInOut" }}
                viewport={{ once: false }}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-opacity"
              />

              {/* Content */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute bottom-0 w-full backdrop-blur-md bg-white/20 p-6"
              >

                <motion.h3
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-white text-xl font-semibold mb-2"
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-gray-200 text-sm"
                >
                  {service.desc}
                </motion.p>

              </motion.div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Text */}
        <div className="text-center mt-20 max-w-3xl mx-auto">
          <p className="text-gray-500 text-lg">
            Whether you are launching a startup or scaling an existing
            business, our mobile apps are built to deliver performance,
            reliability and exceptional user experiences.
          </p>
        </div>

      </div>

    </section>
  );
}