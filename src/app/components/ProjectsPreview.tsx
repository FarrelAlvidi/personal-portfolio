import Image from 'next/image';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectsPreview = () => {
  const projects = [
    {
      title: "INGENUE",
      subtitle: "Concept for an online women's clothing",
      tags: ["UX/UI Design", "E-commerce"],
      image: "/assets/project-1.jpg",
    },
    {
      title: "SONY",
      subtitle: "Corporate website",
      tags: ["UX/UI Design", "Web Design"],
      image: "/assets/project-2.jpg",
    },
    {
      title: "THE IRISH TIMES",
      subtitle: "News site",
      tags: ["UX/UI Design", "News website"],
      image: "/assets/project-3.jpg",
    },
    {
      title: "EMPIRE",
      subtitle: "Clubhouse website",
      tags: ["Web Design", "Real estate"],
      image: "/assets/project-4.jpg",
    }
  ];
  useEffect(() => {
    gsap.fromTo(".titleWork", {
      opacity: 0,
      x: -200,
    },
    {
      opacity: 1,
      x: 0,
      duration: 2,
      scrollTrigger : {
        trigger: ".titleWork",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
        // markers: true,

      }
    });

    gsap.fromTo(".grid", {
      opacity: 0,
      y: 200,
    }, {
      opacity: 1,
      duration: 4,
      y: 0,
      scrollTrigger: {
        trigger: ".grid",
        start: "top 80%",
        end: "top 60%",
        scrub: true,
        // markers: true,
      }
    }
  )

  }, [])


  return (
    <div className="container min-h-screen flex-center overflow-hidden p-8 mt-52 md:p-20">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="titleWork font-Hatton bg-gradient-to-r from-white via-neutral-400 to-neutral-800 bg-clip-text text-transparent text-5xl md:text-7xl font-bold mb-16 tracking-tight">
          RECENT WORK
        </h1>
        
        <div className="grid grid-cols-1 overflow-hidden rounded-4xl md:grid-cols-2 gap-0 border-2 border-neutral-800">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-transparent p-8 md:p-12 border-neutral-800 ${
                index % 2 === 0 ? 'md:border-r-2' : ''
              } ${
                index < 2 ? 'border-b-2' : ''
              } hover:bg-neutral-900 transition-colors duration-300 group cursor-pointer`}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {project.title}
                </h2>
                <div className="flex gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 border border-neutral-300 rounded-full text-xs text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <p className="text-[#6d6d6d] mb-6 text-sm">
                {project.subtitle}
              </p>
              
              <div className={`w-full aspect-video overflow-hidden group-hover:scale-[1.02] transition-transform duration-300`}>
                <div className="w-full h-full flex items-center justify-center">
                  <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPreview;