"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Spotlight } from "lucide-react";
import SpotlightText from "@/components/ui/SpotlightText";

gsap.registerPlugin(ScrollTrigger);

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
    <div id="about" className="relative py-20 items-center gap-18 lg:gap-28 flex flex-col lg:flex-row justify-between md:px-20 px-5 overflow-hidden">
      {/* Light effect di ujung atas */}
      <div className="absolute top-52 left-0 -translate-x-1/2 w-[800px] h-[400px] bg-white/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-y-12 lg:gap-y-20 w-full lg:w-1/2">
        <h2 className="title bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  font-Hatton text-3xl lg:text-6xl font-medium">
          I&apos;m Farrel Alvidi, the person you&apos;re looking for.
        </h2>
        {/* Text Gelap */}
        <SpotlightText className="text text-neutral-500" spotlightSize={50}>
          With a focus on problem solving with branding and design, I strive to
          infuse my work with a unique, emotive touch, intertwining my varied
          cultural roots with an astute appreciative eye for daring, new-age
          visual narratives and most importantly efficiency with solution
          components. My concepts and style encompasses a range of mediums,
          shaping engaging identities and commodities that connect with
          wide-range use cases and generate meaningful impact.
        </SpotlightText>


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
        <Image
          src="/assets/1.jpg"
          alt="Picture of the author"
          width={800}
          height={1200}
          className="rounded-4xl lg:h-screen w-full shadow-lg object-cover"
          priority={false}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
    </div>
  );
}
