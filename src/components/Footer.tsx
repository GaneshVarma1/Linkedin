import React from 'react';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/yourusername',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sriganeshshiramshetty/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:sriganeshshiram@gmail.com',
      label: 'Email'
    },
    {
      icon: Globe,
      href: 'bit.ly/sriport',
      label: 'Portfolio'
    }
  ];

  return (
    <footer className="bg-white dark:bg-gray-800 mt-8 border-t dark:border-gray-700 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">
            Designed & Built by Sri Ganesh Shiramshetty
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}