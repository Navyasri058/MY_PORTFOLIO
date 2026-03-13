import React from 'react';
import { motion } from 'framer-motion'; //Framer Motion is used to create animations in React. elements fade in

const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 border-b-2 border-primary pb-4 inline-block mx-auto flex w-max">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-slate-300 text-lg leading-relaxed"
          >
            <p>
              Hi, I'm <span className="text-primary font-bold">Ch Navya Sri</span>. I have experience working with Python and Java and enjoy applying programming concepts through hands-on projects.
            </p>

            <p>
              I have worked on projects such as a Smart Classroom Management System and a Java-based Railway Reservation System. I have also explored machine learning concepts through a Fake Personality Detector project.
            </p>

            <p>
              Through these projects, I continue to improve my problem-solving skills and gain practical experience in software development while learning new technologies along the way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card p-8 rounded-2xl shadow-xl border border-slate-800 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>

            <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="text-primary font-bold text-lg">➢</span>
                <span className="text-slate-300 font-medium">Python & Java Programmer</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary font-bold text-lg">➢</span>
                <span className="text-slate-300 font-medium">Experience Building Academic Projects</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary font-bold text-lg">➢</span>
                <span className="text-slate-300 font-medium">Interested in Web Development</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-primary font-bold text-lg">➢</span>
                <span className="text-slate-300 font-medium">Problem Solving & Logical Thinking</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;  // This makes the component available to other files.
