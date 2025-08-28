"use client";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { easeIn, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import CountUp from "react-countup";
import { FiDownload, FiX } from "react-icons/fi";

const stats = [
  { title: "Project Completed", num: 6 },
  { title: "Years of experience", num: 2 },
  { title: "Technologies Mastered", num: 12 },
];

function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = (version) => {
    const link = document.createElement("a");

    link.href = `/assets/documents/AbdelbassetCv${
      version === "english" ? "English" : "French"
    }.pdf`;

    link.download = `AbdelbassetCv${
      version === "english" ? "English" : "French"
    }.pdf`;
    link.click();
    setIsModalOpen(false);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto">
        {/* Modal */}
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-900 border border-accent rounded-xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-accent">
                  Select Version
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-white/70 hover:text-accent transition-colors"
                >
                  <FiX size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  onClick={() => handleDownload("english")}
                  className="bg-transparent border-accent border text-accent hover:bg-accent hover:text-black rounded-xl py-3 text-lg"
                >
                  English Version
                </Button>
                <Button
                  onClick={() => handleDownload("french")}
                  className="bg-transparent border-accent border text-accent hover:bg-accent hover:text-black rounded-xl py-3 text-lg"
                >
                  French Version
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}

        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-12">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className="leading-snug">
              Hello I&apos;m <br />
              <span className="text-accent">Abdelbasset</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Young professional passionate about programming and sports,
              excelling in front-end, back-end, and DevOps. Skilled at creating
              efficient, dynamic, and scalable web applications.
            </p>
            <div className="flex flex-col xl:flex-row gap-8 items-center justify-between">
              <Button
                onClick={() => setIsModalOpen(true)}
                size="lg"
                className="gap-2 bg-transparent border-accent border text-accent hover:text-black rounded-3xl"
              >
                <FiDownload />
                Download Resume
              </Button>
              <div className="mb-8 xl:mb-0 flex xl:flex-row gap-x-4">
                <Socials
                  classname={
                    "text-6xl text-accent transition-all cursor-pointer border border-accent rounded-full p-2 hover:bg-accent-hover hover:text-black"
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
                  fill
                  className="object-contain p-20"
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

        <motion.div className="container mx-auto flex flex-col items-center gap-y-6 xl:gap-y-0 xl:flex-row xl:items-center xl:justify-around">
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

export default Page;
