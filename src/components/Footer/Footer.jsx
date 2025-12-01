import React from "react";
import {
  FaGithub,
  FaDribbble,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import ghLogo from "../../assets/gamehub-logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t space-mono">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={ghLogo} alt="Gamehub" className="w-10 h-10" />
            <h2 className="font-bold text-xl tracking-wide">GAMEHUB</h2>
          </div>
          <p className="text-gray-600 mb-5">
            Building the future of digital experiences with bold design and
            cutting-edge technology.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl text-black">
            <FaGithub className="hover:text-gray-700 cursor-pointer" />
            <FaDribbble className="hover:text-gray-700 cursor-pointer" />
            <FaLinkedin className="hover:text-gray-700 cursor-pointer" />
            <FaInstagram className="hover:text-gray-700 cursor-pointer" />
            <FaTwitter className="hover:text-gray-700 cursor-pointer" />
          </div>
        </div>

        {/* PRODUCT */}
        <div>
          <h3 className="font-bold mb-4 tracking-wide">PRODUCT</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-black cursor-pointer">Web Design</li>
            <li className="hover:text-black cursor-pointer">Mobile Apps</li>
            <li className="hover:text-black cursor-pointer">Branding</li>
            <li className="hover:text-black cursor-pointer">Consulting</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-bold mb-4 tracking-wide">COMPANY</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Careers</li>
            <li className="hover:text-black cursor-pointer">Press</li>
            <li className="hover:text-black cursor-pointer">Partners</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="font-bold mb-4 tracking-wide">SUPPORT</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-black cursor-pointer">Help Center</li>
            <li className="hover:text-black cursor-pointer">Documentation</li>
            <li className="hover:text-black cursor-pointer">Community</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#FFC107] px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} GAMEHUB. All rights reserved.</p>
        <div className="flex gap-5 mt-2 md:mt-0">
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
          <span className="cursor-pointer hover:underline">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
