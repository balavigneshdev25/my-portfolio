"use client";
import React, { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { BiMedal } from "react-icons/bi";

function Resume() {
  const [expData, setExpData] = useState([]);
  const [eduData, setEduData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const fetcData = () => {
    fetch("/proData.json")
      .then((res) => res.json())
      .then((data) => {
        setExpData(data.experiences);
        setEduData(data.education);
      });
  };

  useEffect(() => {
    fetcData();
  }, []);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [openModal]);

  return (
    <section id="resume" className="mt-4 p-5 scroll-mt-24">
      <div className="flex justify-center lg:mb-4">
        <h2 className="text-[#000000e6] mb-4 text-2xl md:text-2xl lg:text-3xl font-semibold leading-1 tracking-wider ">
          My Resume
        </h2>
      </div>
      <h3 className="px-1 md:px-38 mb-3 md:mb-0  text-black font-medium text-[18px] max-w-2xl">
        Experience
      </h3>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center md:items-start gap-4 md:px-18 lg:px-18 py-0 md:py-6 md:mb-0.5 mb-3">
        {expData?.map((exp, i) => {
          return (
            <div
              key={i}
              className="p-[15px] md:p-[30px] bg-[#faf7f7] flex flex-col gap-1 transition-all duration-300 ease-in-out border border-[#bacbcc] rounded-[7px]"
            >
              <div className="flex gap-2 items-center">
                <FaCalendarAlt className="text-[#34495e] text-[12px] sm:text-[14px] md:text-[16px]" />
                <p className="text-[#4a5565] uppercase text-[12px] sm:text-[14px] md:text-[16px]">
                  {exp?.duration}
                </p>
              </div>
              <p className="font-bold text-lg md:text-2xl text-[#2d3436]">
                {exp?.role}
              </p>
              <p className="font-medium text-md md:text-lg text-[#2d3436]">
                {exp?.company}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-[#34495e]">{exp?.location}</p>
                <button
                  className="p-1.5 text-[#18181B] border border-gray-400 hover:text-[#9929fb] hover:border-[#9929fb] hover:shadow-xl rounded-sm cursor-pointer"
                  onClick={() => {
                    setModalData(exp);
                    setOpenModal(true);
                  }}
                >
                  Descrption
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="px-1 md:px-38 mb-3 md:mb-0  text-black font-medium text-[18px] max-w-2xl">
        Education
      </h3>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center md:items-start gap-4 md:px-18 lg:px-18 py-0 md:py-6 md:mb-0.5 mb-3">
        {eduData?.map((edu, i) => {
          return (
            <div
              key={i}
              className="p-[15px] md:p-[30px] bg-[#faf7f7] flex flex-col gap-1 transition-all duration-300 ease-in-out border border-[#bacbcc] rounded-[7px]"
            >
              <div className="flex gap-2 items-center">
                <FaCalendarAlt className="text-[#34495e] text-[12px] sm:text-[14px] md:text-[16px]" />
                <p className="text-[#4a5565] uppercase text-[12px] sm:text-[14px] md:text-[16px]">
                  {edu?.duration}
                </p>
              </div>
              <p className="font-bold text-lg md:text-2xl text-[#2d3436]">
                {edu?.degree}
              </p>
              <p className="font-medium text-md md:text-lg text-[#2d3436]">
                {edu?.college}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-[#34495e]">{edu?.location}</p>
                <button className="p-1.5 text-[#A43BFD]  rounded-sm flex items-center gap-1">
                  <BiMedal />
                  <span>{edu?.class}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {openModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full p-6 relative animate-fadeIn">
            <button
              onClick={() => {
                setOpenModal(false);
                setModalData({});
              }}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-lg cursor-pointer"
            >
              ✕
            </button>

            <h2 className="text-xl sm:text-2xl font-semibold text-[#9929fb] mb-3">
              Role Description
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
              {modalData?.des1}
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {modalData?.des2}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Resume;
