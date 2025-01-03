import React from 'react';
import { MessageCircle } from 'lucide-react';
import SectionHeader from './common/SectionHeader';

const recommendations = [
  {
    author: {
      name: 'Sarah Chen',
      role: 'Engineering Manager at Tech Corp',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    text: 'John is an exceptional engineer who consistently delivers high-quality work. His technical expertise and leadership skills have been invaluable to our team.',
    relationship: 'Sarah managed John directly',
    date: 'December 15, 2023'
  },
  {
    author: {
      name: 'Michael Rodriguez',
      role: 'Senior Developer at StartUp Inc',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    text: 'Working with John was a great experience. His problem-solving abilities and attention to detail make him a standout developer.',
    relationship: 'Michael worked with John on the same team',
    date: 'October 5, 2023'
  }
];

export default function Recommendations() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-4 transition-colors">
      <SectionHeader 
        icon={MessageCircle} 
        title="Recommendations"
        action={
          <button className="bg-white dark:bg-gray-700 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-4 py-1 rounded-full hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors">
            Request a recommendation
          </button>
        }
      />
      <div className="space-y-6">
        {recommendations.map((rec, index) => (
          <div key={index} className="border-b dark:border-gray-700 last:border-b-0 pb-6 last:pb-0">
            <div className="flex items-start gap-4">
              <img
                src={rec.author.image}
                alt={rec.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{rec.author.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{rec.author.role}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{rec.relationship}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{rec.text}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{rec.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}