import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="z-10 bg-gradient-to-r from-blue-900 via-indigo-320 to-blue-600 text-white dark:from-slate-800 dark:via-cyan-800 dark:to-slate-700">
      <div className="w-full px-6 py-8 flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
        {/* App Description */}
        <div className="text-center sm:text-left max-w-3xl">
          <h3 className="text-lg font-bold mb-2">About This App</h3>
          <p className="text-sm">
            This is an assignment of VRV Security for the Role of Frontend Developer.
            This RBAC Dashboard helps manage users, roles, and permissions with ease. 
            <br/><br/>
            Techstack used: ReactJS, Tailwind CSS.
            <h6>Made by: Nikhil N. Shekhar</h6>
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center sm:items-end">
          <h3 className="text-lg font-bold mb-2">Contact Me</h3>
          <div className="flex space-x-4">
            {/* Email */}
            <a
              href="mailto:9to5withnikhil@gmail.com"
              className="text-white hover:text-yellow-300 transition duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/nikhil-s-a13543228/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/uNik020"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 border-t border-gray-400 dark:border-gray-600">
        <p className="text-center text-sm py-4 text-gray-200 dark:text-gray-400">
          © 2024 RBAC Dashboard. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
