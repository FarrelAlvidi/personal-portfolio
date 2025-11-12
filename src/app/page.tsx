"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";
import { Hero } from "./components/Hero";
import About from "./components/About";
import ProjectsPreview from "./components/ProjectsPreview";
import CustomCursor from "@/components/ui/CustomCursor";
import { ErrorBoundary } from "@/components/shared/ErrorBoundary";
import CurvedLoop from "@/components/CurvedLoop";

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
        className="bg-neutral-400 h-0.5 z-50 w-full fixed top-0 left-0"
      />

      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>

      <ErrorBoundary>
        <About />
      </ErrorBoundary>
      <CurvedLoop
        className="font-Hatton bg-[#0A0A0A"
        curveAmount={0}
        speed={1}
        interactive={false}
        direction="right"
        marqueeText="Frontend Developer ✦ UI/UX Enthusiast ✦ "
      />
      <ErrorBoundary>
        <ProjectsPreview />
      </ErrorBoundary>

      {/* <StickyCards /> */}
    </div>
  );
}
