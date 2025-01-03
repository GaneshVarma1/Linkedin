import React from "react";
import { MapPin, Link as LinkIcon, Mail, Phone, FileDown } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-4 transition-colors">
      <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-800 rounded-t-lg relative">
        <div className="absolute inset-0">
          <img
            src="coverpic.jpeg"
            alt="Cover"
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>
        <img
          src="sri-ln.jpeg"
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-700 absolute -bottom-16 left-8"
        />
      </div>
      <div className="pt-20 px-8 pb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold dark:text-white">
              Sri Ganesh Shiramshetty
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Senior Web Developer
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                New York, USA
              </span>
              <a
                href="mailto:sriganeshshiram@gmail.com"
                className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Mail className="h-4 w-4" />
                sriganeshshiram@gmail.com
              </a>
              <a
                href="tel:+18456339611"
                className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Phone className="h-4 w-4" />
                +1845633961
              </a>
              <a
                href="https://www.linkedin.com/in/sriganeshshiramshetty/"
                className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <LinkIcon className="h-4 w-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>
          <button
            className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1BrPG03icph8hL7WE-asnDGgtZfIa90cU/view",
                "_blank"
              );
            }}
          >
            <FileDown className="w-5 h-5 mr-2" />
            Resume
          </button>
        </div>
        <div className="mt-4">
          <p className="text-gray-700 dark:text-gray-300">
            Full Stack Developer with 4+ years of experience building dynamic
            websites and web applications using HTML, CSS, JavaScript, and
            frameworks like React.js, Next.js, and Django. Proficient in
            creating seamless e-commerce platforms, integrating Stripe payment
            gateways, and implementing advanced SEO strategies.
          </p>
        </div>
      </div>
    </div>
  );
}
