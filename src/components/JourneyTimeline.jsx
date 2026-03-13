import React from 'react';
import { motion } from 'framer-motion';

const JourneyTimeline = () => {
  const journeys = [
    { title: "HTML & CSS", date: "Fundamental Basics" },
    { title: "Python", date: "Core Programming" },
    { title: "Smart Class Management System", date: "Python/Flask Project" },
    { title: "Java", date: "Object Oriented Programming" },
    { title: "Railway Reservation System", date: "Java Project" },
    { title: "Machine Learning", date: "Data Science & AI" },
    { title: "Fake Personality Detector", date: "ML Project" },
  ];

  return (
    <section id="journey" className="py-20 bg-background relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold border-b-2 border-primary pb-4 inline-block mx-auto flex w-max">
            My Journey
          </h2>
          <p className="text-slate-400 mt-4">The path I've taken so far</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 rounded-full hidden md:block"></div>
          
          <div className="space-y-12">
            {journeys.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center w-full group">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md z-10 hidden md:block group-hover:scale-150 transition-transform duration-300"></div>
                  
                  {/* Content Box */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`w-full md:w-5/12 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'} text-center md:pt-0 pb-6 md:pb-0 relative pt-4`}
                  >
                    <div className="bg-card p-6 rounded-2xl shadow-lg border border-slate-800 group-hover:-translate-y-1 transition-transform duration-300 group-hover:border-primary/50">
                      <span className="text-sm font-bold text-secondary block mb-2">{item.date}</span>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
