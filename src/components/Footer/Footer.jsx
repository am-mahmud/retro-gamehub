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
    <footer className="bg-white text-black border-t space-mono">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={ghLogo} alt="" className="w-10 h-10" />
            <h2 className="font-bold text-xl tracking-wide">GAMEHUB</h2>
          </div>
          <p className="text-gray-600 mb-5">
            Retro Game Hub brings the golden age of gaming back to life
          </p>

          <div className="flex gap-4 text-xl text-black">
            <a href="https://github.com/"><FaGithub className="hover:text-gray-700 cursor-pointer" /></a>
            <a href="https://www.linkedin.com/"><FaLinkedin className="hover:text-gray-700 cursor-pointer" /></a>
            <a href="https://www.instagram.com/"><FaInstagram className="hover:text-gray-700 cursor-pointer" /></a>
            <a href="https://x.com/"><FaXTwitter className="hover:text-gray-700 cursor-pointer" /></a>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4 tracking-wide">GAMES</h3>
          <ul className="space-y-2 text-gray-600">
            <a href="/allgames"><li className="hover:text-black cursor-pointer">Arcade Classics</li></a>
            <a href="/allgames"><li className="hover:text-black cursor-pointer">Platform Games</li></a>
            <a href="/allgames"><li className="hover:text-black cursor-pointer">Puzzle Games</li></a>
            <a href="/allgames"><li className="hover:text-black cursor-pointer">Action Games</li></a>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 tracking-wide">COMMUNITY</h3>
          <ul className="space-y-2 text-gray-600">
            <a href="/about"><li className="hover:text-black cursor-pointer">About Us</li></a>
            <a href="/career"><li className="hover:text-black cursor-pointer">Careers</li></a>
            <a href="/blogs"><li className="hover:text-black cursor-pointer">Blog & News</li></a>
            <a href="/events"><li className="hover:text-black cursor-pointer">Events</li></a>
          </ul>
        </div>


        <div>
          <h3 className="font-bold mb-4 tracking-wide">SUPPORT</h3>
          <ul className="space-y-2 text-gray-600">
            <a href="/help"><li className="hover:text-black cursor-pointer">Help Center</li></a>
            <a href="/help"><li className="hover:text-black cursor-pointer">Documentation</li></a>
            <a href="https://discord.com/"> <li className="hover:text-black cursor-pointer">Discord Community</li></a>
            <a href="/help"><li className="hover:text-black cursor-pointer">Contact</li></a>
          </ul>
        </div>
      </div>


      <div className="bg-[#ff8904] px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
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
