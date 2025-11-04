"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function About() {
  useEffect(() => {
    const split = new SplitText(".title", { type: "words,chars" });

    gsap.from(split.words, {
      opacity: 0,
      x: 80,
      stagger: 0.05,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: split.words,
        start: "top 80%",
        end: "bottom top",
        scrub: 2, // bikin animasinya halus dan lebih lama
        toggleActions: "play none none reverse",
      },
    });

    return () => split.revert();
  }, []);

  return (
    <div className="min-h-screen flex-center text-center bg-[#050608] py-6 md:px-10 px-6">
      <h1 className="text-3xl md:text-[3.2rem] md:w-1/2 text-neutral-200 font-md title ">
        I am <span className="font-Hatton font-bold text-emerald-200">Farrel Alvidi</span>, a Software Developer and{" "}
        <span className="font-Hatton font-bold text-emerald-200">Front-end Engineer</span>. Passionate about crafting seamless digital experiences through{" "}
        <span className="font-Hatton font-bold text-emerald-200">code</span>.
      </h1>
    </div>
  );
}
