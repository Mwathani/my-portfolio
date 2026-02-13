import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Ministry of Education (MoE)",
      role: "Digital Literacy Programme Intern (PSC)",
      location: "Sub-County Director Office",
      duration: "Jan 2026 — Present",
      description: [
        "Implementing the National Digital Literacy Programme to enhance tech-adoption in schools.",
        "Providing technical support and digital resource management at the Sub-County level.",
        "Liaising between the Public Service Commission and educational stakeholders for digital reporting."
      ],
      current: true
    },
    {
      company: "Datum Analytics / KNEC",
      role: "Data Clerk (KCSE 2025)",
      location: "Nairobi, Kenya",
      duration: "December 2025 (Contract)",
      description: [
        "Managed high-integrity data entry and verification for national examination processing.",
        "Ensured 100% accuracy in handling sensitive candidate datasets under strict deadlines.",
        "Collaborated with Datum Analytics to streamline data workflow for exam results."
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
          Professional Journey
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative p-6 rounded-2xl border ${
                exp.current 
                ? 'border-blue-500 bg-white dark:bg-slate-800 shadow-blue-500/5' 
                : 'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50'
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mt-1">
                    <Briefcase className="w-4 h-4" />
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-col text-sm text-slate-500 gap-1 md:items-end">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;