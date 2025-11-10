"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function About() {
  useEffect(() => {
    gsap.fromTo(
      ".pic",
      {
        opacity: 0,
        scale: 0.6,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".pic",
          start: "top 60%",
        },
      }
    );

    gsap.fromTo(".title", {
      opacity: 0,
      y: 50,
    },
      {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".title",
        start: "top 80%",
      }
    })
    gsap.fromTo(".text", {
      opacity: 0,
      y: 50,
    },
      {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".text",
        start: "top 75%",
      }
    })
  }, []);

  return (
    <div className="relative py-20 items-center gap-18 lg:gap-28 flex flex-col lg:flex-row justify-between md:px-20 px-5 overflow-hidden">
      {/* Light effect di ujung atas */}
      <div className="absolute top-52 left-0 -translate-x-1/2 w-[800px] h-[400px] bg-white/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-y-12 lg:gap-y-20 w-full lg:w-1/2">
        <h2 className="title font-Hatton text-3xl lg:text-6xl font-medium">
          I'm Farrel Alvidi, the person you're looking for.
        </h2>
        <p className="text text-neutral-500">
          With a focus on problem solving with branding and design, I strive to
          infuse my work with a unique, emotive touch, intertwining my varied
          cultural roots with an astute appreciative eye for daring, new-age
          visual narratives and most importantly efficiency with solution
          components. My concepts and style encompasses a range of mediums,
          shaping engaging identities and commodities that connect with
          wide-range use cases and generate meaningful impact.
        </p>
        <div className="flex gap-x-32 mt-6">
          <div className="flex flex-col gap-5">
            <h4 className="font-zalando text-neutral-500 tracking-wider">
              Education
            </h4>
            <ul>
              <li className="font-zalando">SMK Informatika Pesat</li>
              <li className="font-dmmono text-neutral-300">2023 - Present</li>
              <li className="font-zalando mt-5">SMP Ibnu Hajar</li>
              <li className="font-dmmono text-neutral-300">2020 - 2023</li>

            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="font-zalando text-neutral-500 tracking-wider">
              Experience
            </h4>
            <ul>
              <li className="font-Hatton ">Coming Soon</li>
              {/* <li className="font-dmmono text-neutral-300">2023 - Present</li> */}

            </ul>
          </div>
        </div>
      </div>

      <div className="pic relative z-10">
        <img
          src="/assets/myBini.jpg"
          alt="Picture of the author"
          className="rounded-4xl lg:h-screen w-full shadow-lg"
        />
      </div>
    </div>
  );
}
