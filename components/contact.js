"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setIsModalOpen(true);
        reset();
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const personalData = [
    { label: "Email", value: "balavignesh.dev25@gmail.com", icon: "📧" },
    { label: "Phone", value: "+91 9751950693", icon: "📞" },
    {
      label: "Address",
      value: "Perupannaiyur - (612 603), Thiruvarur(Dt)",
      icon: "📍",
    },
  ];

  return (
    <section
      id="contact"
      className="px-4 sm:px-6 md:px-16 py- sm:py-12 text-gray-800"
    >
      <div className="flex justify-center mb-6">
        <h2 className="text-[#000000e6] text-2xl md:text-3xl font-semibold tracking-wider">
          Contact
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-6 sm:p-8 md:p-12 bg-white shadow-2xl rounded-2xl">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#111]">
            Let’s Talk About Your{" "}
            <span className="text-[#A53BFE]">Next Hire</span>
          </h2>
          <p className="text-gray-500 mb-8 text-base sm:text-lg leading-relaxed">
            I’m currently seeking new job opportunities. If you think my skills
            align with your team’s needs, feel free to reach out through the
            contact details below
          </p>

          <div className="space-y-4">
            {personalData?.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-white shadow-md rounded-xl transition-transform hover:scale-[1.02]"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#F1E4FF] text-2xl">
                  {item?.icon}
                </div>
                <div className="flex flex-col">
                  <p className="text-gray-500 font-medium">{item?.label}</p>
                  <p className="font-semibold text-gray-800 break-all">
                    {item?.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <p className="text-gray-500 mb-6">
            I’m currently open to job opportunities and always eager to
            collaborate on exciting projects.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Name*"
                {...register("name", { required: "Name is required" })}
                className="border-b-2 border-gray-300 focus:border-[#A53BFE] outline-none py-2 w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email*"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
                className="border-b-2 border-gray-300 focus:border-[#A53BFE] outline-none py-2 w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Phone (optional)"
              {...register("phone")}
              className="border-b-2 border-gray-300 focus:border-[#A53BFE] outline-none py-2 w-full"
            />
            <input
              type="text"
              placeholder="Company (optional)"
              {...register("company")}
              className="border-b-2 border-gray-300 focus:border-[#A53BFE] outline-none py-2 w-full"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Subject*"
              {...register("subject", { required: "Subject is required" })}
              className="w-full border-b-2 border-gray-300 focus:border-[#A53BFE] outline-none py-2"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              placeholder="Message*"
              rows="4"
              {...register("message", { required: "Message is required" })}
              className="w-full border-b-2 border-gray-300 focus:border-[#A53BFE] outline-none py-2"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#A53BFE] cursor-pointer text-white px-8 py-3 font-semibold rounded-lg shadow-md transition-all duration-300 flex items-center gap-2 ${
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-[#8926d9]"
            }`}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Submit <span>🚀</span>
              </>
            )}
          </button>
        </form>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center w-[90%] max-w-sm animate-fadeIn">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              🎉 Message Sent Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for reaching out. I’ll get back to you regarding the
              opportunity soon.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-[#A53BFE] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#8926d9] transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
