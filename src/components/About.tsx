import React from "react";
import { User } from "lucide-react";
import SectionHeader from "./common/SectionHeader";

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-4 transition-colors">
      <SectionHeader icon={User} title="About" />
      <div className="prose dark:prose-invert text-gray-700 dark:text-gray-300">
        <p>
          Full Stack Developer with 4+ years of experience building dynamic
          websites and web applications using HTML, CSS, JavaScript, and
          frameworks like React.js, Next.js, and Django. Proficient in creating
          seamless e-commerce platforms, integrating Stripe payment gateways,
          and implementing advanced SEO strategies.
        </p>
        <ul className="mt-4 space-y-2">
          <li>
            🚀 Leading development teams in delivering high-impact projects
          </li>
          <li>
            💡 Expertise in React, Next.js,TailwindCSS and cloud technologies
          </li>
          <li>📚 Regular speaker at tech conferences and workshops</li>
          <li>
            🌱 Committed to continuous learning and staying current with
            industry trends
          </li>
        </ul>
      </div>
    </div>
  );
}
