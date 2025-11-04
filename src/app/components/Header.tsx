"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // update jam setiap 1 detik
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    // bersihkan interval ketika komponen di-unmount
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).replace(/\./g, ":");

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
     className="fixed top-0 left-0 w-full px-6 lg:px-10 py-6 flex justify-between items-center z-50">
      <h1 className="text-lg text-white">My</h1>
      <p className="text-neutral-200 font-mono">{formattedTime}</p>
    </motion.header>
  );
};

export default Header;
