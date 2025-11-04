"use client";

import Bento from "@/components/ui/Bento";
import React from "react";
import { motion } from "framer-motion";
const page = () => {
  return (
    <div className="min-h-screen py-20 px-6 xl:px-32 flex-center mx-auto flex-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      className="">
      <Bento />

      </motion.div>
    </div>
  );
};

export default page;
