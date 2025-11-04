"use client";
import Bento from "@/components/ui/Bento";
import { useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextReveal } from "@/components/ui/TextReveal";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // pastikan animasi hanya dijalankan di browser
    gsap.fromTo(
      ".title",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".title",
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="h-[55vh] bg-[#050608] mx-auto py-6 md:px-16 px-6  ">
      <h1 className="text-2xl md:text-[3.8rem] font-bold title xl:indent-72 leading-[1.01">
        Hello, my name is <span className="font-Hatton">Farrel Alvidi</span>, I'm a Software Developer and <span className="font-Hatton">Front-end Engineer</span>. Passionate about crafting seamless digital experiences through <span className="font-Hatton">code</span>.
      </h1>
      {/* <div className="mx-auto mt-10  md:mt-20">
        <Bento />
      </div> */}
    </div>
  );
};

export default About;
