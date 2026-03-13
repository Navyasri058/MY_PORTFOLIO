import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl text-secondary font-medium mb-4">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight font-heading text-textMain">
            Ch Navya Sri
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl md:text-3xl text-[#64748B] font-medium mb-8 h-12"
        >
          <TypeAnimation
            sequence={[
              'Computer Science Student',
              2000,
              'Python & Java Programmer',
              2000,
              'Web Development Learner',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-primary font-bold"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-lg md:text-xl text-[#64748B] mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I enjoy learning programming and building meaningful projects. I work with Python and Java and like exploring how technology can be used to solve real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-6"
        >
          <a
            href="#projects"
            className="btn-primary px-8 py-3"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-slate-700 text-slate-300 font-medium rounded-full hover:bg-slate-800 hover:text-white transition-all duration-200 hover:scale-105 shadow-md"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
