"use client";

import { motion } from "framer-motion";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt className="text-3xl text-accent" />,
    title: "Phone",
    description: "+212659550403",
  },
  {
    icon: <FaEnvelope className="text-3xl text-accent" />,
    title: "Email",
    description: "abdelbassethmidchat1@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt className="text-3xl text-accent" />,
    title: "Address",
    description: "Morocco, Casablanca",
  },
];

function Contact() {
  return (
    <motion.section
      className="py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 1 }}
    >
      <h1 className="text-center text-accent text-3xl font-bold mb-16">
        Let&apos;s work together
      </h1>
      <div className="flex flex-col flex-wrap  items-center justify-around w-full space-x-0 space-y-8 lg:space-y-0 lg:space-x-2 min-h-[40vh]">
        {info.map((inf, index) => (
          <motion.article
            key={index}
            className="flex items-center py-4 md:p-4 border border-accent rounded-lg shadow-lg bg-[#27272c] xl:w-[500px] lg:w-[45%] w-full text-white/80 duration-500 transition-all"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, repeat: Infinity, repeatType: "reverse" }}
          >
            <div className="text-4xl md:mx-8 mx-4">{inf.icon}</div>
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <h4 className="text-xl font-semibold mb-2">{inf.title}</h4>
              {index === 1 ? (
                <p className="text-md break-words w-full h-auto">
                  {inf.description}
                </p>
              ) : (
                <p className="text-lg break-words w-full h-auto">
                  {inf.description}
                </p>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default Contact;
