"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ProjectsPreview = () => {
  const Projects = [
    {
      title: "Travel Website",
      description:
        "A responsive travel website built with React and Tailwind CSS, featuring destination listings, user reviews, and booking functionality.",
      image: "/assets/project-4.jpg",
    },
    {
      title: "Portfolio Website",
      description:
        "A portfolio website showcasing projects, skills, and experience, built with Next.js and styled with Tailwind CSS.",
      image: "/assets/project-3.jpg",
    },
  ];

  return (
    <div className="relative min-h-screen  bg-[#050608] text-white">
      {/* <div className="absolute inset-0 [background:radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none blur-3xl" /> */}
      <div className="h-auto px-4 md:px-30 relative overflow-hidden flex ">
        {/* <h1 className=" top-20 left-0 right-0 text-white text-[4rem] md:text-[6rem] uppercase font-bold font-dmmono text-center tracking-tight">
          Featured Work
        </h1> */}

        {Projects.map((project, index) => (
          <div key={index} className="bg-red-300">
            <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPreview;
