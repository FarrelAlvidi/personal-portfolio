"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";
import { Hero } from "./components/Hero";
import About from "./components/About";
import ProjectsPreview from "./components/ProjectsPreview";
import CustomCursor from "@/components/ui/CustomCursor";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";

export default function Home() {
  const scrollContainer = useRef<HTMLDivElement>(null);

  // 🔹 Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ duration: 3 });
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
      <CustomCursor />

      <motion.div
        style={{ scaleX, transformOrigin: "left" }}
        className="bg-neutral-400 h-1 z-50 w-full fixed top-0 left-0"
      />

      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <About />
      </ErrorBoundary>
      {/* <ErrorBoundary>
        <ProjectsPreview />
      </ErrorBoundary> */}
      
      {/* <StickyCards /> */}
    </div>
  );
}
