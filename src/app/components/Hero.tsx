"use client";

import ImageTrail from "@/components/ImageTrail";
import { LightRays } from "@/components/ui/light-rays";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { motion } from "framer-motion";
import React from "react";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden rounded-lg bg-black">
      {/* --- Layer efek cahaya di belakang --- */}
      <div className="absolute inset-0 z-0">
        <LightRays />
      </div>

      {/* --- Image trail (di tengah layer, di bawah teks) --- */}
      <div className="absolute inset-0 z-10">
        <ImageTrail
          items={[
            "https://picsum.photos/id/287/300/300",
            "https://picsum.photos/id/1001/300/300",
            "https://picsum.photos/id/1025/300/300",
            "https://picsum.photos/id/1026/300/300",
            "https://picsum.photos/id/1027/300/300",
            "https://picsum.photos/id/1028/300/300",
            "https://picsum.photos/id/1029/300/300",
            "https://picsum.photos/id/1030/300/300",
          ]}
          variant={6}
        />
      </div>

      {/* --- Teks utama di depan --- */}
      <div className="relative z-40 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-4xl md:text-7xl font-Hatton font-bold bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent tracking-wider"
        >
          Farrel Alvidi
        </motion.h1>
      </div>
    </section>
  );
};
