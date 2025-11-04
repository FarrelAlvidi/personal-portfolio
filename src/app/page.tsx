"use client";

import Image from "next/image";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import { useEffect } from "react";
import Lenis from "lenis";
import ProjectsPreview from "./components/ProjectsPreview";

export default function Home() {
  useEffect(() => {
     const lenis = new Lenis({
      duration: 3, // kehalusan scroll (semakin besar semakin lambat)
    })

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <ProjectsPreview />
    </div>
  );
}
