import React from 'react';
import { Mail, MessageCircle, Facebook, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      name: 'Email',
      value: 'mwatahnirooney@email.com',
      icon: <Mail className="w-6 h-6" />,
      link: 'mailto:mwatahnirooney@email.com',
      color: 'bg-red-50 text-red-600 dark:bg-red-900/20',
    },
    {
      name: 'WhatsApp',
      value: '+254 759 746 625',
      icon: <MessageCircle className="w-6 h-6" />,
      link: 'https://web.whatsapp.com/254 759 746 625',
      color: 'bg-green-50 text-green-600 dark:bg-green-900/20',
    },
    {
      name: 'Facebook',
      value: 'Rooney Mwathani',
      icon: <Facebook className="w-6 h-6" />,
      link: 'https://facebook.com/yourprofile',
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-900/20',
    },
  ];

  return (
    <section id="contact" className="py-20 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Get In Touch</h2>
          <p className="text-slate-500 mt-2">Let's build something great together.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method) => (
            <a
              key={method.name}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${method.color}`}>
                {method.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">{method.name}</h4>
              <p className="text-sm text-slate-500 mt-1 truncate">{method.value}</p>
              <div className="mt-4 flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                Connect <ExternalLink className="ml-1 w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;