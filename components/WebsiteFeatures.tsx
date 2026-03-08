// "use client";

// import { motion } from "framer-motion";
// import {
//   Globe,
//   Layout,
//   ShieldCheck,
//   MapPin,
//   ShoppingCart,
//   ClipboardList,
//   Phone,
//   Settings,
// } from "lucide-react";

// export default function WebsiteFeatures() {
//   const features = [
//     {
//       icon: Layout,
//       title: "Custom Page Development",
//       desc: "We design and develop the exact number of pages your business requires — including Home, About, Services, Blog, Landing Pages, and more.",
//     },
//     {
//       icon: ShieldCheck,
//       title: "Secure Authentication",
//       desc: "User login and signup systems with OTP, email authentication, or social login to ensure secure access for your customers.",
//     },
//     {
//       icon: MapPin,
//       title: "Location Based Services",
//       desc: "We integrate maps and location features to retrieve user addresses, show service areas, or provide delivery tracking.",
//     },
//     {
//       icon: ShoppingCart,
//       title: "E-commerce Functionality",
//       desc: "Complete online store development including product listings, shopping cart, secure checkout, and payment integration.",
//     },
//     {
//       icon: ClipboardList,
//       title: "Order Management",
//       desc: "Customers can view order history, track orders, cancel orders, and receive updates. Admins can manage all orders easily.",
//     },
//     {
//       icon: Phone,
//       title: "Contact & Inquiry System",
//       desc: "Contact forms, enquiry management, WhatsApp integration, and automated notifications to ensure customers can reach you easily.",
//     },
//     {
//       icon: Settings,
//       title: "Admin Dashboard",
//       desc: "A powerful admin panel to manage content, users, orders, products, analytics, and business operations efficiently.",
//     },
//     {
//       icon: Globe,
//       title: "Scalable & SEO Friendly",
//       desc: "We build fast, responsive, and SEO-optimized websites designed to scale with your business growth.",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Section Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             How We Build Professional Websites
//           </h2>
//           <p className="text-gray-500 max-w-2xl mx-auto">
//             We develop modern, scalable websites tailored to your business
//             requirements. Every project is built with performance, security,
//             and user experience in mind.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition"
//               >
//                 <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl mb-4">
//                   <Icon className="text-blue-600" size={24} />
//                 </div>

//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                   {feature.title}
//                 </h3>

//                 <p className="text-gray-500 text-sm leading-relaxed">
//                   {feature.desc}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Bottom Description */}
//         <div className="text-center mt-16 max-w-3xl mx-auto">
//           <p className="text-gray-500">
//             Whether you need a simple business website or a full-scale platform
//             with authentication, location services, and e-commerce capabilities,
//             our development process ensures your website is secure, scalable,
//             and built to deliver an exceptional user experience.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Layout,
  ShieldCheck,
  MapPin,
  ShoppingCart,
  ClipboardList,
  Phone,
  Settings,
} from "lucide-react";

export default function WebsiteFeatures() {

  const features = [
    {
      icon: Layout,
      title: "Custom Page Development",
      desc: "We design and develop the exact number of pages your business requires — including Home, About, Services, Blog, Landing Pages, and more.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Authentication",
      desc: "User login and signup systems with OTP, email authentication, or social login to ensure secure access for your customers.",
    },
    {
      icon: MapPin,
      title: "Location Based Services",
      desc: "We integrate maps and location features to retrieve user addresses, show service areas, or provide delivery tracking.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Functionality",
      desc: "Complete online store development including product listings, shopping cart, secure checkout, and payment integration.",
    },
    {
      icon: ClipboardList,
      title: "Order Management",
      desc: "Customers can view order history, track orders, cancel orders, and receive updates.",
    },
    {
      icon: Phone,
      title: "Contact & Inquiry System",
      desc: "Contact forms, enquiry management, WhatsApp integration, and automated notifications.",
    },
    {
      icon: Settings,
      title: "Admin Dashboard",
      desc: "A powerful admin panel to manage content, users, orders, products, and analytics.",
    },
    {
      icon: Globe,
      title: "Scalable & SEO Friendly",
      desc: "Fast, responsive and SEO-optimized websites built to scale with your business.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">

      {/* BLUE BLOB */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 -top-40 w-[600px] h-[600px] bg-blue-600 rounded-[45%_55%_60%_40%/55%_40%_60%_45%]"
      />

      {/* RED BLOB */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-20 w-[550px] h-[550px] bg-red-500 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
      />

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How We Build Professional Websites
          </h2>

          <p className="text-gray-900 max-w-2xl mx-auto">
            We develop modern, scalable websites tailored to your business
            requirements with performance, security and great UX.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >

                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl mb-4">
                  <Icon className="text-blue-600" size={24} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-gray-600">
            Whether you need a simple business website or a full-scale platform
            with authentication, location services, and e-commerce features,
            our development ensures scalability and great user experience.
          </p>
        </div>

      </div>

    </section>
  );
}