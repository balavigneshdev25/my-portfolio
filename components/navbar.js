"use client";
import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

function Navbar() {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isManualClick, setIsManualClick] = useState(false); 
  const timeoutRef = useRef(null);

  const menuItems = [
    { id: "#home", label: "Home" },
    { id: "#summary", label: "Summary" },
    { id: "#about", label: "About" },
    { id: "#skills", label: "Skills" },
    { id: "#resume", label: "Resume" },
    { id: "#contact", label: "Contact", isButton: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isManualClick) return;

      const scrollY = window.scrollY;
      menuItems.forEach((item) => {
        const section = document.querySelector(item.id);
        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isManualClick]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleClick = (id) => {
    setActive(id);
    setIsManualClick(true);
    setMenuOpen(false);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsManualClick(false);
    }, 1000);
  };

  return (
    <header className="w-full z-50 fixed top-0 left-0 shadow bg-white">
      <div className="mx-auto flex justify-between items-center p-4 md:px-8">
        <a className="flex gap-2 items-center cursor-pointer" href="#home">
          <p className="bg-[#A53BFE] rounded-full text-white font-extrabold text-2xl p-3">
            BA
          </p>
          <p className="text-2xl font-extrabold  uppercase text-[#A53BFE]">
            Balavignesh
          </p>
        </a>

        <ul className="hidden md:flex gap-6 text-black text-[16px] font-medium uppercase">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.id}
                onClick={() => handleClick(item.id)}
                className={`px-3 py-2 rounded-md transition-all duration-300 ${
                  item.isButton
                    ? "bg-[#A53BFE] text-white hover:bg-[#8B28D8]"
                    : active === item.id
                    ? "bg-[#A53BFE] text-white"
                    : "hover:text-[#A53BFE]"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col items-left gap-4 py-4 text-[16px] font-medium uppercase">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`block px-3 py-2 md:rounded-md transition-all duration-300 ${
                    item.isButton
                      ? "bg-[#A53BFE] text-white hover:bg-[#8B28D8]"
                      : active === item.id
                      ? "bg-[#A53BFE] text-white"
                      : "text-black hover:text-[#A53BFE]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
