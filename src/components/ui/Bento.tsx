"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Download, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25, // jeda muncul satu per satu
    },
  },
};  

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // ganti dari "easeOut" ke array cubic-bezier
    },
  },
};


const Bento = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid w-full grid-cols-1 xl:grid-cols-3 justify-between gap-4"
    >
      {/* Background Section */}
      <motion.div
        variants={itemVariants}
        className="relative row-span-3 col-span-1 flex flex-col w-full h-auto p-8 rounded-2xl bg-neutral-900 border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent" />
        <h2
          className="z-10 text-xl font-semibold uppercase tracking-wide
             bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300
             bg-clip-text text-transparent font-dmmono"
          style={{ WebkitBackgroundClip: "text" }}
        >
          Background
        </h2>

        <p className="z-10 mt-4 text-sm md:text-base leading-relaxed text-neutral-200 font-light">
          Hi! I’m <span className="font-medium text-white">Farrel</span>, a{" "}
          <span className="font-semibold text-white">
            Software Engineer and UI Designer
          </span>{" "}
          with 3 years of experience, who’s worked on end-to-end projects,
          including SaaS and e-commerce.
        </p>

        <p className="z-10 mt-4 text-sm md:text-base leading-relaxed text-neutral-300 font-light">
          With 4 years of experience in{" "}
          <span className="font-semibold text-white">
            architecture and project management
          </span>
          , I transitioned to UX design in 2022 to blend my love for design with
          technology in a fast-paced environment.
        </p>

        <p className="z-10 mt-4 text-sm md:text-base leading-relaxed text-neutral-400 font-light">
          Ever since I can remember, I’ve loved{" "}
          <span className="font-semibold text-white">
            solving problems through design
          </span>
          , and discovered that UX allows me to incorporate data and usability
          testing to create a useful and accessible product.
        </p>

        <p className="z-10 mt-6 text-sm text-neutral-500 flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 10.5-7.5 10.5S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          Bogor, Indonesia
        </p>
      </motion.div>

      {/* Contact */}
      <motion.div
        variants={itemVariants}
        className="relative col-span-1 justify-between w-full h-32 rounded-xl items-center flex p-8 text-white font-bold bg-neutral-900 border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)] overflow-hidden"
      >
        <div className="absolute pointer-events-none inset-0 bg-gradient-to-b from-emerald-600/70 via-emerald-800/50 to-neutral-900 opacity-20"></div>
        <div className="flex gap-4 z-30">
          <a
            href="https://github.com/FarrelAlvidi"
            className="border w-12 h-12 border-white/20 p-3 flex-center rounded-full hover:-translate-y-1.5 hover:bg-emerald-900/80 duration-300 transition-all"
          >
            <Github className="w-8 h-8 text-white " />
          </a>
          <a
            href="https://www.linkedin.com/in/farrel-alvidi-356688330/"
            className="border w-12 h-12 border-white/20 p-3 flex-center rounded-full hover:-translate-y-1.5 hover:bg-emerald-900/80 duration-300 transition-all"
          >
            <Linkedin className="w-8 h-8 text-white " />
          </a>
          <a
            href="https://www.instagram.com/alvidi.farrel/"
            className="border w-12 h-12 border-white/20 p-3 flex-center rounded-full hover:-translate-y-1.5 hover:bg-emerald-900/80 duration-300 transition-all"
          >
            <Instagram className="w-8 h-8 text-white " />
          </a>
        </div>
        <a
          href="/assets/CV.pdf"
          download="CV_FarrelAlvidi.pdf"
          className="hover:bg-emerald-900/80 duration-400 transition-all cursor-pointer rounded-full border font-light flex-center border-white/20 p-2 px-4 w-40 h-12"
        >
          <Download className="w-4 h-4 text-white inline-block mr-2" />
          Resume
        </a>
      </motion.div>

      {/* Picture */}
      <motion.div
        variants={itemVariants}
        className="relative col-span-1 row-span-3 w-full [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-xl flex items-center justify-center text-white font-bold overflow-hidden"
      >
        <Image
          src="/assets/myBini.jpg"
          alt="Picture"
          fill
          className="rounded-xl object-cover"
        />
      </motion.div>



      {/* Education */}
      <motion.div
        variants={itemVariants}
        className="relative w-full h-72 p-8 bg-neutral-900 border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.6)] rounded-xl text-white font-bold overflow-hidden"
      >
        <h2 className="relative z-10 text-xl tracking-wide font-dmmono uppercase text-emerald-300 ">
          Education
        </h2>
        <p className="relative z-10 mt-4 text-sm md:text-base leading-relaxed text-neutral-200 font-light">
          Software Engineering, SMK Informatika Pesat <br />
          <span className="text-neutral-400">July 2023 - May 2026</span>
        </p>
        <p className="relative z-10 mt-8 text-sm md:text-base leading-relaxed text-neutral-200 font-light">
          Student, SMP Ibnu Hajar <br />
          <span className="text-neutral-400">July 2020 - June 2023</span>
        </p>
      </motion.div>

      {/* Skills */}
            <motion.div
        variants={itemVariants}
        className="relative w-full h-48 rounded-xl flex items-center justify-center text-white font-bold overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-white/50 via-neutral-900 to-neutral-900 opacity-90"></div>
        <div className="absolute inset-0 rounded-xl shadow-[inset_-12px_-10px_48px_15px_rgba(29,107,71,0.20)] border border-white/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 via-transparent to-transparent blur-3xl"></div>
        <span className="relative z-10 text-lg tracking-wide">Skills</span>
      </motion.div>

      {/* Feature 5 */}
      <motion.div
        variants={itemVariants}
        className="relative w-full h-48 rounded-xl flex items-center justify-center text-white font-bold overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-white/50 via-neutral-900 to-neutral-900 opacity-90"></div>
        <div className="absolute inset-0 rounded-xl shadow-[inset_-12px_-10px_48px_15px_rgba(29,107,71,0.20)] border border-white/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 via-transparent to-transparent blur-3xl"></div>
        <span className="relative z-10 text-lg tracking-wide">Feature 5</span>
      </motion.div>
    </motion.div>
  );
};

export default Bento;
