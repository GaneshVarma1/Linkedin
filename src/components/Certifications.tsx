import React from 'react';
import { Award } from 'lucide-react';
import SectionHeader from './common/SectionHeader';

const certifications = [
  {
    name: 'AWS Solutions Architect Professional',
    issuer: 'Amazon Web Services',
    date: 'Issued Dec 2023',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80',
    credentialId: 'AWS-PSA-123456'
  },
  {
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: 'Issued Jun 2023',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&h=50&q=80',
    credentialId: 'GCP-PD-789012'
  }
];

export default function Certifications() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-4 transition-colors">
      <SectionHeader icon={Award} title="Licenses & Certifications" />
      <div className="space-y-6">
        {certifications.map((cert, index) => (
          <div key={index} className="flex gap-4">
            <img
              src={cert.logo}
              alt={cert.issuer}
              className="w-12 h-12 rounded"
            />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Credential ID: {cert.credentialId}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}