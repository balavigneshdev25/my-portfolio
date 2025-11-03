"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function HeroPage() {
  

  const [heroData, setHeroData] = useState([]);

  const fetchData = () => {
    fetch("/proData.json")
      .then((res) => res.json())
      .then((data) => setHeroData(data.personalData));
  };

   useEffect(() => {
    fetchData()
  }, []);

  return (
    <section id="home" className="mt-10 p-5">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 py-10">
        <div className="order-1 lg:order-2 flex justify-center">
          <Image
            alt="hero-img"
            src="/heroImg.jpg"
            width={500}
            height={400}
            className="rounded-3xl shadow-2xl shadow-gray-200 object-cover w-full max-w-md"
          />
        </div>

        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <div className="text-[#18181B]">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Hello, I’m
              <span className="text-nowrap text-[#A43BFD] inline-block">
                Balavignesh
              </span>
            </p>
          </div>

          <p className="text-[#18181B] text-sm sm:text-base lg:text-lg my-4 max-w-lg">
            I’m a Front-End Developer passionate about crafting visually
            appealing web applications. I merge thoughtful design with
            performance-driven code for delightful user experiences.
          </p>

          <div className="mt-4 text-center md:text-left lg:text-left">
            <a
              href="mailto:balavignesh.dev25@gmail.com"
              className="inline-block bg-[#A43BFD] text-white py-3 px-6 rounded-lg font-semibold shadow-md hover:bg-[#650FA0] hover:scale-105 transition-all duration-300"
            >
              Say Hello!
            </a>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 w-fit mt-10 gap-3">
            {heroData?.map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-between bg-[#F6EBFE] text-center p-4 rounded-lg"
              >
                <p className="text-lg sm:text-2xl font-semibold text-gray-700">
                  {item?.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">
                  {item?.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;
