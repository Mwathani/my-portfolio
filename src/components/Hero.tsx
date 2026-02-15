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

    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      {/* VIEW WORK - Scrolls to your projects/skills */}
      <button 
        onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}
        className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg">
        View My Work
      </button>

      {/* DOWNLOAD RESUME - This is the fix! */}
      <a 
        href="/Rooney_Mwathani_Resume.pdf" 
        download="Rooney_Mwathani_Resume.pdf"
        className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all text-center">
        Download Resume
      </a>
    </div>
    </section>
  );
};

export default Hero;