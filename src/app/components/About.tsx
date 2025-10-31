"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // pastikan animasi hanya dijalankan di browser
    gsap.fromTo(
      ".title",
      { opacity: 0, y: 100, rotate: -10 },
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".title",
          start: "top 60%",
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
    <div className="min-h-screen flex items-center justify-center max-w-6xl mx-auto px-6">
      <h2 className="title text-5xl md:text-6xl font-bold text-center text-white leading-snug">
        Hi, My name is <span className="text-white font-normal font-pinyon">Portfolio</span>.{" "}
        <br />A Software Engineer student from{" "}
        <span className="text-indigo-400">SMK Informatika Pesat</span>.
      </h2>
    </div>
  );
};

export default About;
