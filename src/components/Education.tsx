import React from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    school: 'State University of New York',
    degree: 'Masters in Computer Science',
    period: '2020 - 2024',
    gpa: '3.67/4.0',
    logo: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80'
  },
  {
    school: 'MLR Institute of Technology',
    degree: 'Bachelors in Computer Science',
    period: '2016 - 2020',
    gpa: '3.74/4.0',
    logo: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80'
  }
];

export default function Education() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-4 transition-colors">
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="h-6 w-6 text-gray-600 dark:text-gray-400" />
        <h2 className="text-xl font-bold dark:text-white">Education</h2>
      </div>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-4">
            <img
              src={edu.logo}
              alt={edu.school}
              className="w-12 h-12 rounded"
            />
            <div>
              <h3 className="font-semibold dark:text-white">{edu.school}</h3>
              <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">GPA: {edu.gpa}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}