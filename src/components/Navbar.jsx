import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, House, User, Code2, FolderOpen, Mail, Download, Github, Linkedin, Twitter, RouteIcon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState('#home');

  const navLinks = [
    { name: 'Home', href: '#home', icon: House },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Journey', href: '#journey', icon: RouteIcon },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  return (
    <>
      {/* Mobile Menu Button - Fixed top right on mobile */}
      <div className="fixed top-4 right-4 z-[70] md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full bg-primary text-white shadow-lg focus:outline-none transition-transform hover:scale-105"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
        </button>
      </div>

      <nav
        className={`fixed top-0 left-0 h-screen w-64 bg-background z-50 flex flex-col justify-between py-8 px-5 transition-transform duration-300 ease-in-out border-r border-slate-800 shadow-xl
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`
        }
      >
        <div className="flex flex-col w-full">
          {/* Brand / User Name */}
          <div className="mb-10 w-full text-center">
            <a href="#home" className="text-[22px] font-bold font-heading tracking-tight" onClick={() => setIsOpen(false)}>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Navya Sri
              </span>
            </a>
          </div>

          {/* Navigation Menu */}
          <div className="w-full flex text-slate-300 flex-col gap-[12px]">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSegment === link.href;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveSegment(link.href);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 py-2.5 px-3 rounded-md text-[14px] font-medium transition-all duration-200 
                    ${isActive
                      ? 'border-l-[3px] border-primary bg-primary/10 text-primary'
                      : 'border-l-[3px] border-transparent hover:bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                >
                  <Icon className="w-[18px] h-[18px]" strokeWidth={isActive ? 2.5 : 2} />
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom of Navbar - Professional Addition */}
        <div className="w-full mt-auto pt-6 border-t border-slate-800 flex flex-col justify-center items-center gap-6">

          {/* Social Media Icons Box */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/Navyasri058" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors duration-200">
              <Github size={20} strokeWidth={2} />
            </a>
            <a href="https://www.linkedin.com/in/chappidi-navya-sri-a15b43379/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors duration-200">
              <Linkedin size={20} strokeWidth={2} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors duration-200">
              <Twitter size={20} strokeWidth={2} />
            </a>
          </div>

          {/* Download CV Button */}
          <a
            href="/NavyaSri_Resume.pdf"
            download
            className="w-full btn-primary text-sm flex justify-center py-2"
          >
            Download CV <Download size={16} />
          </a>

          {/* Copyright footprint */}
          <p className="text-[12px] text-slate-500 text-center w-full">
            © 2026 Ch Navya Sri
          </p>

        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
