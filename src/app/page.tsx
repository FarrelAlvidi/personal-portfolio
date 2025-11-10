"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";
import { Hero } from "./components/Hero";
import About from "./components/About";
import ProjectsPreview from "./components/ProjectsPreview";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  const scrollContainer = useRef<HTMLDivElement>(null);

  // 🔹 Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ duration: 2 });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollContainer,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={scrollContainer} className="flex flex-col">
      {/* <div className="cursor border-2 border-white h-12 flex-center w-12 rounded-full fixed z-50">
        <div className="bg-white h-1 w-1 rounded-full m-auto"></div>
      </div> */}
      <CustomCursor />

      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="bg-neutral-400 h-1 z-50 w-full fixed top-0 left-0"
      />

      <Hero />
      <About />
      <ProjectsPreview />
      {/* <StickyCards /> */}
    </div>
  );
}
