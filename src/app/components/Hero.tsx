"use client";
import { LightRays } from "@/components/ui/light-rays";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { motion } from "framer-motion";
import React from "react";


export const Hero = () => {
  return (
    <>
      <div className="relative min-h-screen flex-center w-full overflow-hidden rounded-lg">
        <LightRays />
        {/* <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[400px] bg-blue-400 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[400px] bg-emerald-200 rounded-full blur-[150px] opacity-25"></div> */}

        <div className="absolute top-[20%] z-20 w-full text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          className="bg-linear-to-r from-white via-white bg-clip-text text-transparent to-black tracking-wider">
            Farrel Alvidi
          </motion.h1>
        </div>
        {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="relative z-10 flex h-full flex-col gap-4 px-6">
          <ScrollVelocityContainer className="text-[3.7rem]  font-black uppercase md:text-[8rem] tracking-tighter leading-[0.9]">
            <ScrollVelocityRow baseVelocity={6} direction={1}>
              Frontend Developer - Junior Web Developer - &nbsp;
            </ScrollVelocityRow>
            <ScrollVelocityRow baseVelocity={6} direction={-1}>
              Frontend Developer - Junior Web Developer - &nbsp;
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </motion.div> */}
        
      </div>
    </>
  );
};
