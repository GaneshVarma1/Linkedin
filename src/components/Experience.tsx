import React from "react";
import { Building2 } from "lucide-react";
import SectionHeader from "./common/SectionHeader";

const experiences = [
  {
    company: "MMEink",
    role: "Senior Web Developer",
    period: "2024 - Present",
    location: "New York, USA",
    description:
      "Built and managed 15+ websites using PHP, HTML, CSS, and JavaScript for dynamic and responsive designs. Streamlined deployments with Vercel CI/CD pipelines, reducing deployment time by 50. Developed scalable e-commerce platforms with WooCommerce, integrating secure payment systems. Enhanced website performance (30% faster load times) with caching and server-side optimization.Mentored a team of developers, ensuring best practices and high-quality code delivery.Designed reusable, scalable components for maintainable and efficient development.",
    logo: "MME-Worldwide_White-300x180.png",
  },
  {
    company: "6 Degrees Media",
    role: "Web Developer and Technical SEO",
    period: "06/2024 - 07/2024",
    location: "Remote, USA",
    description:
      "Developed responsive web applications and implemented SEO best practices, achieving significant improvements in organic traffic.",
    logo: "6 degree media.jpeg",
  },
  {
    company: "SUNY New Paltz",
    role: "Web Developer",
    period: "08/2022 - 05/2024",
    location: "New Paltz, USA",
    description:
      "Built and maintained university websites using WordPress and modern web technologies.",
    logo: "suny.jpeg",
  },
];

export default function Experience() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-4 transition-colors">
      <SectionHeader icon={Building2} title="Experience" />
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4">
            <img
              src={`${exp.logo}`}
              alt={exp.company}
              className="w-12 h-12 object-contain"
            />
            <div>
              <h3 className="font-semibold dark:text-white">{exp.role}</h3>
              <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {exp.period} • {exp.location}
              </p>
              <div className="flex items-center">
                <p className="mt-2 text-gray-700 dark:text-gray-300 text-left">
                  {exp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
