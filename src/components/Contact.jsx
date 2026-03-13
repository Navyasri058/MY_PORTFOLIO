import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {         //This creates a React component.
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-3xl text-primary" />,
      title: "Email",
      value: "navyasrichappidi",
      link: "mailto:navyasrichappidixxx@gmail.com"
    },
    {
      icon: <FaPhone className="text-3xl text-primary" />,
      title: "Phone",
      value: "9392853xxx",
      link: "tel:+919392853xxx"
    },
    {
      icon: <FaLinkedin className="text-3xl text-primary" />,
      title: "LinkedIn",
      value: "Chappidi Navya Sri",
      link: "https://www.linkedin.com/in/chappidi-navya-sri-a15b43379/"
    },
    {
      icon: <FaGithub className="text-3xl text-primary" />,
      title: "GitHub",
      value: "Navyasri058",
      link: "https://github.com/Navyasri058"
    }
  ];

  return (
    <section id="contact" className="py-20 min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold border-b-2 border-primary pb-4 inline-block mx-auto flex w-max">
            Get In Touch
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl flex flex-col items-center justify-center border border-slate-800 hover:border-primary group transition-all duration-300 hover:-translate-y-2 shadow-lg"
            >
              <div className="mb-4 bg-primary/10 p-4 rounded-full group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                {React.cloneElement(info.icon, { className: "text-3xl text-primary group-hover:text-white transition-colors" })}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
              <p className="text-slate-400 font-medium group-hover:text-primary transition-colors duration-300">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
