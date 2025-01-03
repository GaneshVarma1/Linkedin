import React from 'react';
import { Code2 } from 'lucide-react';

const skills = [
  'ReactJS',
  'NextJs',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Bootstrap',
  'Node.js',
  'Django',
  'PHP',
  'REST APIs',
  'MongoDB',
  'MySQL',
  'Firebase',
  'AWS',
  'Docker',
  'Kubernetes',
  'Jenkins',
  'CI/CD',
  'Git',
  'Figma',
  'Elementor',
  'Matplotlib',
  'Pandas',
  'Plotly',
  'SEO',
  'Performance Optimization',
  'Payment Gateway Integration'
];

export default function Skills() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors">
      <div className="flex items-center gap-2 mb-4">
        <Code2 className="h-6 w-6 text-gray-600 dark:text-gray-400" />
        <h2 className="text-xl font-bold dark:text-white">Skills</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}