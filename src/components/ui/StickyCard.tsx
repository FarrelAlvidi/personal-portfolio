"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Pesat Discovery Day",
    description:
      "A website for an event that showcases innovative projects and ideas from students and faculty members.",
    image: "assets/project-3.jpg",
  },
  {
    title: "Travel Website",
    description:
      "A travel website that provides information and booking options for various destinations around the world.",
    image: "assets/project-4.jpg",
  },
  {
    title: "Creative Portfolio",
    description:
      "A visually engaging portfolio to showcase unique creative projects with smooth animations.",
    image: "assets/project-5.jpg",
  },
  {
    title: "Creative Portfolio",
    description:
      "A visually engaging portfolio to showcase unique creative projects with smooth animations.",
    image: "assets/project-5.jpg",
  },
];

const StickyCards = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stickyCards = gsap.utils.toArray<HTMLElement>(".sticky-card");

      stickyCards.forEach((card, index) => {
        // Pin tiap card kecuali terakhir
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            endTrigger: stickyCards[stickyCards.length - 1],
            end: "bottom bottom",
            pin: true,
            pinSpacing: false,
          });
        }

        // Efek scale/rotate kecuali terakhir
        if (index < stickyCards.length - 2) {
          ScrollTrigger.create({
            trigger: stickyCards[index + 1],
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) => {
              const progress = self.progress;
              const scale = 1 - progress * 0.25;
              const rotation = (index % 2 === 0 ? 5 : -5) * progress;

              gsap.set(card, { scale, rotation });
            },
          });
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative w-full">
      {projects.map((project, i) => (
        <div
          key={i}
          className="sticky-card min-h-screen flex flex-col md:flex-row items-start justify-between gap-10 md:gap-x-[35%] bg-[#FAFAFA] text-black px-6 md:px-20 py-16"
        >
          <div className="shrink-0">
            <h1 className="text-5xl md:text-7xl font-black font-zalando mb-6">
              0{i + 1}
            </h1>
          </div>

          <div className="flex flex-col items-start w-full md:w-[65%]">
            <h2 className="text-4xl md:text-6xl font-semibold uppercase tracking-wide mb-8 text-center md:text-left">
              {project.title}
            </h2>

            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={500}
              className="w-full md:w-[85%] object-cover shadow-lg mb-8"
              loading="lazy"
            />

            <p className="max-w-2xl text-base md:text-lg text-neutral-700 leading-relaxed text-center md:text-left">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default StickyCards;
