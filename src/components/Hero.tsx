"use client"; 

import React from 'react';

interface HeroProps {
  name: string;
  role: string;
  description: string;
}

const Hero = ({ name, role, description }: HeroProps) => {
  
  
  const handleDownload = () => {
    window.print();
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 bg-white dark:bg-slate-950">
      <span className="px-3 py-1 mb-6 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
        Available for work
      </span>

      <section className="flex flex-col items-center ... animate-in fade-in slide-in-from-bottom-8 duration-1000"></section>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        I'm{" "}
        <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
          {name}
        </span>
      </h1>
      
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
        {role}
      </h2>

      <p className="max-w-2xl mt-6 text-lg text-slate-600 dark:text-slate-400">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-10 print:hidden">
      
        <a 
          href="#projects" 
          className="px-8 py-3 text-white bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
        >
          View My Work
        </a>

        <button 
          onClick={handleDownload}
          className="px-8 py-3 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
        >
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;