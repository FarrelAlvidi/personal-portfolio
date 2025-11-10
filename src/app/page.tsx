"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";
import { Hero } from "./components/Hero";
import About from "./components/About";
import ProjectsPreview from "./components/ProjectsPreview";
import StickyCards from "@/components/ui/StickyCard";

export default function Home() {
  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smooth: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  // Hubungkan scroll ke container (Lenis akan override window)
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
      {/* Progress bar */}
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
