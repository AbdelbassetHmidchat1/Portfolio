"use client";

import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { easeIn, easeInOut, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import CountUp from "react-countup";
import { FiDownload } from "react-icons/fi";
import { useSelector } from "react-redux";

const stats = [
  {
    title: "Project Completed",
    num: 5,
  },
  {
    title: "Years of experience",
    num: 4,
  },
  {
    title: "Technologies Mastered",
    num: 6,
  },
];

function page() {
  

  return (
    <section className="h-full  ">
      <div className="container mx-auto  ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-12">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className="leading-snug">
              Hello I&apos;m <br />
              <span className="text-accent"> Abdelbasset </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Young professional passionate about programming and sports,
              excelling in both front-end and back-end technologies. Skilled at
              creating efficient and dynamic webapps.
            </p>
            <div className="flex flex-col xl:flex-row gap-8 items-center justify-between">
              <a
                href="/assets/documents/AbdelbassetCv.pdf"
                download={"AbdelbassetCv.pdf"}
              >
                <Button
                  size="lg"
                  className="gap-2 bg-transparent border-accent border text-accent hover:text-black rounded-3xl"
                >
                  <FiDownload />
                  Download Resume
                </Button>
              </a>

              <div className="mb-8 xl:mb-0 flex xl:flex-row gap-x-4">
                <Socials
                  classname={
                    "text-6xl text-accent transition-all cursor-pointer border border-accent rounded-full p-2 hover:bg-accent-hover hover:text-black  "
                  }
                />
              </div>
            </div>
          </div>
          <section className="w-full h-full relative order-1 xl:order-none mb-8 xl:mb-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.4, ease: easeIn, duration: 0.4 },
              }}
            >
              <div className="relative w-[298px] xl:w-[498px] h-[298px] xl:h-[498px]">
                <Image
                  alt="Abdelbasset's image"
                  src={"/assets/images/abdelbasset1.png"}
                  fill="true"
                  className="object-contain p-20 "
                  priority
                  quality={100}
                />
              </div>
            </motion.div>
            <motion.svg
              className={
                "absolute w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
              }
              fill={"transparent"}
              viewBox={"0 0 506 506"}
              xmlns={"http://www.w3.org/2000/svg"}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1.5, ease: easeIn, duration: 0.4 },
              }}
            >
              <motion.circle
                cx={253}
                cy={253}
                r={250}
                stroke={"#60a5fa"}
                strokeWidth={4}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  delay: 2.4,
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
          </section>
        </div>
        <motion.div className="container mx-auto  flex flex-col items-center gap-y-6 xl:gap-y-0 xl:flex-row xl:items-center xl:justify-around">
          {stats.map((stat, index) => (
            <section key={index} className="flex gap-x-2">
              <CountUp
                end={stat.num}
                duration={4}
                delay={1}
                className="text-6xl font-extrabold self-center"
              />
              <p className="max-w-32 self-center text-xl xl:text-xl">
                {stat.title}
              </p>
            </section>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default page;
