"use client";
import { LightRays } from "@/components/ui/light-rays";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import React from "react";
// import Galaxy from '@/components/Galaxy'

export const Hero = () => {
  return (
    <>
      <div className="relative min-h-screen flex-center w-full overflow-hidden rounded-lg">
        <LightRays />
        <div className="absolute top-[20%] z-20 w-full text-center px-6">
          <motion.h1
            className="text-neutral-200"
          >
            Farrel Alvidi
          </motion.h1>
        </div>
        <div className="relative z-10 flex h-full flex-col gap-4 px-6">
          <ScrollVelocityContainer className="text-4xl font-extrabold uppercase md:text-[6.7rem] leading-[1.1]">
            <ScrollVelocityRow baseVelocity={6} direction={1}>
              Frontend Developer - Junior Web Developer - &nbsp;
            </ScrollVelocityRow>
            <ScrollVelocityRow baseVelocity={6} direction={-1}>
              Frontend Developer -  Junior Web Developer - &nbsp;
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </div>
      </div>
    </>
  );
};
