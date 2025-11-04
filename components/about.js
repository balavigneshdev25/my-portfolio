"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const LinksIcons = [
  {
    Icon: FaLinkedin,
    link: "https://www.linkedin.com/in/balavignesh-a-ab292422b/",
  },
  { Icon: FaGithub, link: "https://github.com/balavigneshdev25" },
  {
    Icon: FaWhatsapp,
    link: "https://wa.me/919751950693",
  },
  {
    Icon: FaInstagram,
    link: "https://www.instagram.com/jerseyno11__boy__?igsh=cXB3cHZlZGZxd3g0",
  },
];

function About() {
  const [personalData, setPesonalData] = useState([]);

  const fetchData = () => {
    fetch("/proData.json")
      .then((res) => res.json())
      .then((data) => setPesonalData(data.aboutData));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="about" className="mt-10 p-5 scroll-mt-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center md:items-start gap-1  md:px-18 lg:px-18 py-0 md:py-10 bg-white shadow-2xl rounded-2xl">
        <div className="flex justify-center relative w-full max-w-md px-2 py-2">
          <div className="relative w-full h-80 sm:h-96">
            <Image
              alt="hero-img"
              src="/heroImg.jpg"
              fill
              className="rounded-xl shadow-2xl shadow-gray-200 object-cover"
            />
          </div>

          <div className="absolute -bottom-4 bg-white shadow-md rounded-md px-4 py-2 text-center flex gap-3">
            {LinksIcons.map((item, i) => {
              const { link, Icon } = item;
              return (
                <a
                  key={i}
                  href={link}
                  className="text-[#9929fb] p-2 text-lg rounded-md hover:text-white hover:bg-[#9929fb] hover:scale-105 transition-all duration-300 ease-in-out"
                  target="_blank"
                >
                  <Icon className="font-extrabold " />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2 px-2 py-2">
          <p className="text-[#9929fb] text-lg font-bold uppercase mt-2 md:mt-0">
            My Intro
          </p>
          <p className="text-[#000000e6] text-2xl md:text-2xl lg:text-3xl font-semibold leading-tight uppercase">
            About Me
          </p>
          <p className="text-[#4a5565] text-sm sm:text-base lg:text-lg max-w-lg">
            A curious mind who loves turning ideas into meaningful experiences.
            Always learning, building, and pushing boundaries with purpose.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            {personalData?.map((item, i) => {
              return (
                <div key={i}>
                  <p className="font-bold">{item.label}</p>
                  <p className="text-gray-600">{item.value}</p>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center  md:justify-start">
            <button className="px-4 py-2 font-medium flex items-center rounded-md gap-1 mt-2 cursor-pointer mb-1.5  text-[#18181B] border border-gray-400 hover:text-[#9929fb] hover:border-[#9929fb] hover:shadow-xl">
              <FaDownload />
              <a
                href="https://drive.google.com/uc?export=download&id=1Bm--QM0obNKc1wirBncnZfNPZXe2Og9Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
