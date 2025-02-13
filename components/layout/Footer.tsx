"use client"
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white shadow text-gray-600 text-center p-4 mt-auto">
      <div>
        <div className="flex px-6 py-4 border-b justify-center">
          <a className="px-3 py-1 mr-2" target="_blank" href="https://github.com/MPrakash98">
            <FaGithub size={30} />
          </a>
          <a className="px-3 py-1" target="_blank"href="https://www.linkedin.com/in/mrityunjay-prakash/">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
      <div>© {new Date().getFullYear()} Mrityunjay Prakash. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
