"use client";

import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectsPreview = () => {
  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <=3; i++) {
      rows.push(
        <div className="flex justify-center py-10 gap-4 w-full" key={i}>
          <div className=" card-left relative w-[40%] h-auto rounded-lg will-change-transform overflow-hidden">
            <img src={`assets/project-${2 * i - 1}.jpg`} alt="" />
          </div>
            <div className=" card-right relative w-[40%] h-80 rounded-lg will-change-transform overflow-hidden">
            <img src={`assets/project-${2 * i}.jpg`} alt="" />
          </div>
        </div>
      )
  }
  return rows;
  }

  return (
    <div className="relative min-h-screen  bg-[#050608] text-white">
      <div className="h-auto px-4 md:px-30 relative overflow-hidden flex flex-col items-center justify-center">
        {/* Background glow */}
        <div className="absolute inset-0 [background:radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none blur-3xl" />

        {/* Title */}
        <h1 className=" top-20 left-0 right-0 text-white text-[4rem] md:text-[6rem] uppercase font-bold font-dmmono text-center tracking-tight">
          Featured Work
        </h1>
      <section>
        {generateRows()}
      </section>
      </div>

    </div>
  );
};

export default ProjectsPreview;
