import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Maseno University",
      degree: "Bachelor of Science in Information Technology",
      location: "Kisumu, Kenya",
      duration: "Aug 2019 — Dec 2023",
      grade: "Second Class Honors (Upper Division)",
      details: "Comprehensive study of software development, network administration, database systems, and IT project management. Specialized in building secure and efficient enterprise solutions."
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Education
        </h2>

        <div className="grid gap-6">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="hidden sm:block p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400">
                  <GraduationCap className="w-8 h-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
                      <Award className="w-3 h-3" />
                      {edu.grade}
                    </span>
                  </div>

                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mt-2">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;