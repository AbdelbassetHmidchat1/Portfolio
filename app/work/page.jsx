"use client";

import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
const projects = [
  {
    num: "01",
    category: "full stack",
    title: "Efitness Ecommerce",
    description:
      "Responsive ecommerce website that caters to wide range of fitness products.",
    stack: [
      { name: "MongoDb" },
      { name: "Express.js" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "tailwindcss" },
    ],
    image: "/assets/images/projects/EfitnessEcommerce.png",
    github: "https://github.com/AbdelbassetHmidchat1/efitcommerce",
    live: "https://efitnessecommerce.vercel.app",
  },
  {
    num: "02",
    category: "full stack",
    title: "Efitness",
    description:
      "Platform for fitness enthusiasts to test their limits, track their calorie intake, and generate flexible workouts.",
    stack: [{ name: "Next.js" }, { name: "tailwindcss" }, { name: "MongoDb" }],
    image: "/assets/images/projects/Efitness.png",
    github: "https://github.com/AbdelbassetHmidchat1/Efitness",
    live: "https://efitness.vercel.app",
  },
  {
    num: "03",
    category: "full stack",
    title: "Fevertokens (Internship project)",
    description:
      "FeverTokens offers a blockchain platform with advanced smart contract solutions and tokenization. Its web3 wallet provides efficient management of digital assets.",
    stack: [
      { name: "MongoDb" },
      { name: "Next.js" },
      { name: "Ethers.js" },
      { name: "tailwindcss" },
    ],
    image: "/assets/images/projects/Fevertokens.png",
    github: "https://wallet.fevertokens.io",
    live: "https://wallet.fevertokens.io",
  },
  {
    num: "04",
    category: "full stack",
    title: "Patient Management System",
    description:
      "Managed over 1,700 patients with doctor appointments and encrypted medical folders. Built with Spring Boot and React.js, deployed on Azure for secure and scalable cloud infrastructure. (Graduation Project)",
    stack: [
      { name: "Spring Boot" },
      { name: "React.js" },
      { name: "MySQL" },
      { name: "Azure" },
    ],
    image: "/assets/images/projects/dmpgov.png",
    github: "https://dmpgov.omnidoc.ma",
    live: "https://dmpgov.omnidoc.ma",
  },
  {
    num: "05",
    category: "full stack",
    title: "Sprintify Project Management System",
    description:
      "A complete project management system with team chat, task tracking, and project collaboration features. Helps teams coordinate efficiently and stay organized.",
    stack: [{ name: "Spring Boot" }, { name: "React.js" }, { name: "MySQL" }],
    image: "/assets/images/projects/Sprintify.png",
    github: "https://github.com/AbdelbassetHmidchat1/Sprintify/",
    live: "#",
  },
];

function Work() {
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 1 }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-7 h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                {project.num}
              </div>
              <h2 className="font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/20">{project.description}</p>
              <div className="w-full">
                <ul className=" max-w-full">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="my-4">
                        <span
                          key={index}
                          className="text-xl text-accent   text-wrap"
                        >
                          {item.name}
                        </span>
                        <br />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-16 rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-16 rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-fill"
                          alt="project image"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles={
                  "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                }
                btnStyles={
                  "bg-accent hover:bg-accent-hover text-primary text-[22px] size-[44px] flex justify-center items-center transition-all "
                }
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
