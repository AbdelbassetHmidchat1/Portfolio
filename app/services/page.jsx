"use client";

import { easeInOut, motion } from "framer-motion";
import React from "react";
import { HiMiniServerStack, HiOutlineCloud } from "react-icons/hi2";
import { TbUserScreen } from "react-icons/tb";

const services = [
  {
    num: "01",
    title: "Front end development",
    desc: "I specialize in creating visually stunning and highly responsive web designs. Ensuring a smooth user experience, I bring your vision to life with precision and creativity.",
    icon: (
      <TbUserScreen className="text-5xl group-hover:text-accent transition-all duration-500" />
    ),
  },
  {
    num: "02",
    title: "Back end development",
    desc: "My skills include creating secure and scalable server-side solutions, integrating authentication systems, and managing databases effectively. With a strong focus on performance and security.",
    icon: (
      <HiMiniServerStack className="text-5xl group-hover:text-accent transition-all duration-500" />
    ),
  },
  {
    num: "03",
    title: "DevOps & Cloud",
    desc: "I have experience in automating deployments, managing CI/CD pipelines, and ensuring smooth cloud operations. Proficient in Azure services for scalable, reliable, and secure infrastructure management.",
    icon: (
      <HiOutlineCloud className="text-5xl group-hover:text-accent transition-all duration-500" />
    ),
  },
];

function Services() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          animate={{
            opacity: [0, 1],
            translateY: ["10vh", "0"],
            transition: { ease: easeInOut, duration: 1.2, delay: 0.5 },
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-10 border border-white border-opacity-20 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-accent flex flex-col h-full"
            >
              {/* Top row: number + icon */}
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl text-outline text-primary group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </h1>
                {service.icon}
              </div>

              {/* Middle: title */}
              <h3 className="text-2xl text-accent font-semibold mb-4">
                {service.title}
              </h3>

              {/* Bottom: description */}
              <p className="text-lg text-white/90 flex-grow">{service.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
