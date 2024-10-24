"use client";

import { easeInOut, motion } from "framer-motion";
import React, { useState } from "react";
import { HiMiniServerStack } from "react-icons/hi2";
import { TbUserScreen } from "react-icons/tb";

const services = [
  {
    num: "01",
    title: "Front end development",
    desc: "I specialize in creating visually stunning and highly responsive web designs.ensuring a smooth user experience,I bring your vision to life with precision and creativity.",
    icon: (
      <TbUserScreen className="size-24 group-hover:text-accent transition-all duration-500 " />
    ),
  },
  {
    num: "02",
    title: "Back end development",
    desc: "My skills include creating secure and scalable server-side solutions, integrating authentication systems, and managing databases effectively. With a strong focus on performance and security.",
    icon: (
      <HiMiniServerStack className="size-24 group-hover:text-accent transition-all duration-500 " />
    ),
  },
];

function Services() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto ">
        <motion.div
          className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 gap-x-8   "
          animate={{
            opacity: [0, 1],
            transition: { ease: easeInOut, duration: 1,delay: 1.5 },
            translateY: [0, "10vh", 0],

          }}
        >
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <div className="group space-y-8 transition-all duration-500 ">
                <div className="flex justify-between items-center">
                  <h1 className="text-outline text-primary group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </h1>
                  {service.icon}
                </div>
                <p>{service.desc}</p>

                <h3 className="text-accent">{service.title}</h3>
              </div>
              {index < 1 && (
                <hr className="w-full h-[1px] bg-accent lg:pointer-events-none lg:absolute relative   lg:opacity-0 transition-all opacity-100 pointer-events-auto " />
              )}
              {index < services.length - 1 && (
                <div className="border-l border-white border-opacity-50 h-auto mx-4"></div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
