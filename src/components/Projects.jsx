import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold border-b-2 border-primary pb-4 inline-block mx-auto flex w-max">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-3xl shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300 border border-slate-800 flex flex-col p-8 group overflow-hidden relative"
              >
                {/* Decorative background accent */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full z-0 opacity-50 transition-transform duration-500 group-hover:scale-150"></div>
                
                <div className="flex justify-between items-start mb-6 z-10 w-full relative">
                  <h3 className="text-2xl font-extrabold text-textMain hover:text-primary transition-colors duration-300 w-4/5 text-left leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-slate-400 bg-slate-800 p-2 rounded-full border border-slate-700">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                        <FaGithub className="text-2xl" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-slate-300 text-base leading-relaxed mb-8 flex-grow z-10 relative">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 z-10 relative mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-bold bg-slate-800 text-primary rounded-full border border-slate-700 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
