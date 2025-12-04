import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ghLogo from "../../assets/gamehub-logo.png";

const Footer = () => {
  return (
    <footer className="text-black dark:text-white bg-white dark:bg-gray-900 border-t-4 border-black dark:border-cyan-400 space-mono transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={ghLogo} alt="GameHub Logo" className="w-10 h-10" />
            <h2 className="font-bold text-xl tracking-wide">GAMEHUB</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-5">
            Retro Game Hub brings the golden age of gaming back to life
          </p>

          <div className="flex gap-4 text-xl text-black dark:text-white">
            <a href="https://github.com/" aria-label="GitHub">
              <FaGithub className="hover:text-orange-400 dark:hover:text-cyan-400 cursor-pointer transition-colors" />
            </a>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-orange-400 dark:hover:text-cyan-400 cursor-pointer transition-colors" />
            </a>
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <FaInstagram className="hover:text-orange-400 dark:hover:text-cyan-400 cursor-pointer transition-colors" />
            </a>
            <a href="https://x.com/" aria-label="X (Twitter)">
              <FaXTwitter className="hover:text-orange-400 dark:hover:text-cyan-400 cursor-pointer transition-colors" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4 tracking-wide text-black dark:text-white">GAMES</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <a href="/allgames">
              <li className="hover:text-orange-400 dark:hover:text-cyan-400 cursor-pointer transition-colors">
                For Gamers
              </li>
            </a>
            <a href="/developer">
              <li className="hover:text-orange-400 dark:hover:text-cyan-400 cursor-pointer transition-colors">
                For Developers
              </li>
            </a>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 tracking-wide text-black dark:text-white">COMMUNITY</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <a href="/about">
              <li className="hover:text-orange-400 dark:hover:text-cyan-400 cursor-pointer transition-colors">
                About Us
              </li>
            </a>
            <a href="/career">
              <li className="hover:text-orange-400 dark:hover:text-cyan-400 cursor-pointer transition-colors">
                Careers
              </li>
            </a>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 tracking-wide text-black dark:text-white">SUPPORT</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <a href="/help">
              <li className="hover:text-orange-400 dark:hover:text-cyan-400 cursor-pointer transition-colors">
                Help Center
              </li>
            </a>
            <a href="/help">
              <li className="hover:text-orange-400 dark:hover:text-cyan-400 cursor-pointer transition-colors">
                Contact
              </li>
            </a>
            <a href="https://discord.com/">
              <li className="hover:text-orange-400 dark:hover:text-cyan-400 cursor-pointer transition-colors">
                Discord Community
              </li>
            </a>
          </ul>
        </div>
      </div>

      {/* <div className="bg-[#ff8904] dark:bg-gray-800 border-t-4 border-black dark:border-cyan-400 px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-black dark:text-white transition-colors">
        <p >© {new Date().getFullYear()} GAMEHUB. All rights reserved.</p>
        <div className="flex gap-5 mt-2 md:mt-0">
          <span className="cursor-pointer hover:underline hover:text-white dark:hover:text-cyan-400 transition-colors">
            Privacy Policy
          </span>
          <span className="cursor-pointer hover:underline hover:text-white dark:hover:text-cyan-400 transition-colors">
            Terms of Service
          </span>
        </div>
      </div> */}


      <div className="bg-[#ff8904] dark:bg-gray-800 border-t-4 border-black dark:border-cyan-400 px-6 py-4 flex flex-col justify-center items-center text-sm text-black dark:text-white transition-colors text-center">
        <p>© {new Date().getFullYear()} GAMEHUB. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;