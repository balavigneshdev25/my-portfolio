"use client";
import { RiArrowUpSLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-[#222F3E] text-white py-8 px-6 md:px-16 relative">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Logo Section */}
        <div className="flex items-center gap-3">
          <div className="bg-[#A43BFD] w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-xl">
            BA
          </div>
          <h2 className="text-2xl font-semibold uo">Balavignesh</h2>
        </div>

        <ul className="flex flex-wrap justify-center gap-5 text-gray-300 text-[16px]">
          {[
            "Home",
            "Summary",
            "About",
            "Skills",
            "Resume",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-gray-400 text-center md:text-right text-sm">
          Copyright © 2025{" "}
          <span className="font-medium text-gray-200">Balavignesh.</span>
        </p>
      </div>

      <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-2 text-gray-400 text-sm">
        <span>Developed with</span>
        <span className="text-pink-500">❤️</span>
        <span>by</span>
        <a
          href="#"
          className="font-semibold text-white hover:text-[#A43BFD] transition-colors duration-200"
        >
          Balavignesh
        </a>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-6 bottom-6 bg-[#A43BFD] hover:bg-[#8A2BE2] text-white p-3 rounded-full shadow-lg transition-all duration-300 cursor-pointer"
        aria-label="Scroll to top"
      >
        <RiArrowUpSLine className="w-5 h-5" />
      </button>
    </footer>
  );
}
