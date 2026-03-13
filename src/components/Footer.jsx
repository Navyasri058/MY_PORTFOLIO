import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-slate-800 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-slate-400 flex items-center justify-center gap-2 font-medium">
          Designed & Built with <FaHeart className="text-primary" /> by Ch Navya Sri
        </p>
        <p className="text-slate-500 text-sm mt-3">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
