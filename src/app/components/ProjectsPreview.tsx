import Image from "next/image";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { once } from "events";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Attendance System",
    tools: "Laravel",
    img: "/assets/project-7.png",
    desc: "A website for an attendance system that allows users to track and manage attendance records efficiently.",
    year: 2025,
  },
  {
    title: "Pesat Discovery Day",
    tools: "Tailwind CSS",
    img: "/assets/project-3.jpg",
    desc: "A website for an event that showcases innovative projects and ideas from students.",
    year: 2024,
  },
  {
    title: "Travel Website",
    tools: "Native",
    img: "/assets/project-4.jpg",
    desc: "An application to manage library resources, track borrowed books, and handle user accounts efficiently.",
    year: 2024,
  },
];

interface Project {
  title: string;
  tools: string;
  img: string;
  desc: string;
  year: number;
}

interface ModalProps {
  onClose: () => void;
  project: Project;
}

function Modal({ onClose, project }: ModalProps) {
  return (
    <motion.div
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overlay fixed inset-0 flex items-center justify-center z-40 bg-white/10 backdrop-blur-sm"
    >
      <motion.div
        className="p-8 bg-neutral-900 max-w-3xl w-full h-auto rounded-lg"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0, scale: 0.4 }}
        transition={{ type: "tween" }}
      >
        <div className="relative rounded-xl overflow-hidden mb-6 group">
          <img
            src={project.img}
            alt={project.title}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-60"></div>
        </div>
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-neutral-400">{project.tools}</p>
        <p className="text-sm text-neutral-500 mt-2">{project.year}</p>
        <p className="mt-4 text-neutral-300">{project.desc}</p>
      </motion.div>
    </motion.div>
  );
}

const ProjectsPreview = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    gsap.fromTo(
      ".titleWork",
      {
        opacity: 0,
        y: -200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".titleWork",
          start: "top 90%",
          end: "top 40%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      id="projects"
      className="bg-[#0A0A0A] min-h-screen overflow-hidden flex flex-col justify-center"
    >
      <div className="border-b border-neutral-800 pb-10">
        <h1 className="titleWork px-10  bg-gradient-to-r from-white via-neutral-400 to-neutral-800 bg-clip-text text-transparent text-2xl md:text-3xl font-semibold text-center tracking-tight">
          RECENT WORK
        </h1>
      </div>
      <div className="flex flex-col">
        {projects.map((project, i) => (
          <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.2 },
          }}
          viewport={{ once: true }}
            key={i}
            onClick={() => setSelectedProject(project)}
            className="hover:bg-neutral-900 bagian group relative overflow-hidden cursor-pointer duration-500 transition-all border-b border-neutral-800 w-full py-14 px-4 md:px-10"
          >
            {/* Desktop Layout */}
            <div className="hidden md:grid grid-cols-3 items-center relative z-10">
              <h5 className="text-sm md:text-base text-left">
                {project.title}
              </h5>
              <h2 className="text-4xl md:text-[4.8rem] font-semibold text-center">
                {project.tools}
              </h2>
              <h5 className="text-sm md:text-base text-right">
                {project.year}
              </h5>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col items-center gap-4 relative z-10">
              <div className="flex justify-between w-full text-xs">
                <span>{project.title}</span>
                <span>{project.year}</span>
              </div>
              <h2 className="text-5xl font-semibold text-center">
                {project.tools}
              </h2>
            </div>

            {/* Overlay yang muncul dari bawah */}
            <div
              className="absolute inset-0 bg-white/20 backdrop-blur-sm z-10
    translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out
    flex flex-col justify-end p-6 md:p-10"
            >
              <div className="space-y-2">
                <h3 className="text-white text-lg md:text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {project.desc || "Detail project akan muncul di sini ✨"}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Modal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPreview;
