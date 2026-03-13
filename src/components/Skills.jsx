import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiFlask, SiMongodb, SiPandas, SiScikitlearn } from 'react-icons/si';

const Skills = () => {
  const skillsList = [
    { name: "Python", icon: <FaPython className="text-[#3776AB]" />, category: "Core" },
    { name: "Java", icon: <FaJava className="text-[#007396]" />, category: "Core" },
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" />, category: "Web" },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" />, category: "Web" },
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, category: "Tools" },
    { name: "GitHub", icon: <FaGithub className="text-3xl text-primary" />, category: "Tools" },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" />, category: "Web" }
  ];

  return (
    <section id="skills" className="py-20 min-h-screen bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold border-b-2 border-primary pb-4 inline-block mx-auto">
            Technical Skills
          </h2>
          <p className="text-slate-400 mt-4">Technologies I work with</p>
        </motion.div>

        {/* Creative Node / Bubble Layout */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-4xl mx-auto mt-12">
          {skillsList.map((skill, index) => {
            // Give different floating delays and durations for a natural effect
            const floatDelay = (index % 3) * 0.5;
            const floatDuration = 3 + (index % 3);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: floatDuration,
                    delay: floatDelay,
                    ease: "easeInOut"
                  }}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-card shadow-lg border-2 border-slate-800 flex flex-col items-center justify-center hover:shadow-primary/40 hover:border-primary transition-all duration-300 cursor-pointer group-hover:bg-slate-800"
                >
                  <div className="text-4xl sm:text-5xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white opacity-0 group-hover:opacity-100 absolute -bottom-6 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full shadow-md transition-opacity duration-300 whitespace-nowrap z-20">
                    {skill.name}
                  </span>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative background connections SVG to hint at a network */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full -z-10 opacity-20 pointer-events-none hidden md:block">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <path d="M50 50 L20 30 M50 50 L80 30 M50 50 L20 80 M50 50 L80 80 M50 50 L50 15 M50 50 L50 85" stroke="var(--color-primary)" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="10" fill="var(--color-primary)" opacity="0.3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Skills;
