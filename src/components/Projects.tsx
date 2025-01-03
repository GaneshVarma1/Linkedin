import React from 'react';
import { FolderGit2 } from 'lucide-react';
import SectionHeader from './common/SectionHeader';
import { ExternalLink } from 'lucide-react';


const projects = [
  {
    title: 'MME Worldwide',
    period: 'Oct 2024',
    description: 'Redesigned Event Management and Hospitality agency known for creating extraordinary, first-class experiences.',
    link: 'https://mmecreativepartners.com/',
    image: 'images/external-link.png'
  },
  {
    title: 'FiDi Hospitality',
    period: 'Jun 2022 - Dec 2022',
    description: 'Designed Full Web Application from Start to Finish with Custom CSS.',
    link: 'https://fidihospitality.com/',
    image: 'images/hospitality.png'
  },
  {
    title: 'Fridge to Feast',
    period: 'Jun 2022 - Dec 2022',
    description: 'Developed a web application that transforms simple ingredients into delectable meal suggestions.',
    link: 'https://fridge-to-feastapp.vercel.app/',
    image: 'images/fridge.png'
  }
];

export default function Projects() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-4 transition-colors">
      <SectionHeader
        icon={FolderGit2}
        title="Projects"
        action={
          <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
            Show all
          </button>
        }
      />
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="flex gap-4">
            {/* <img
              src={project.image}
              alt={project.title}
              className="w-12 h-12 object"
            /> */}
                <ExternalLink className='w-12 h-12'/>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                <a href={project.link} className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
                  {project.title}
                </a>
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{project.period}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}