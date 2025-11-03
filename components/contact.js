function Contact() {
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
        {/* Left side */}
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

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {personalData?.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-white shadow-md rounded-xl"
              >
                <div className="bg-[#F1E4FF] text-white p-3 rounded-lg text-xl">
                  {item?.icon}
                </div>
                <div>
                  <p className="font-medium text-gray-600">{item?.label}:</p>
                  <p className="font-semibold">{item?.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <form className="space-y-5">
          <p className="text-gray-500 mb-6">
            I’m currently open to job opportunities and always eager to
            collaborate on exciting projects.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="border-b-2 border-gray-300 focus:border-[#A53BFE] outline-none py-2"
            />
            <input
              type="email"
              placeholder="Email*"
              className="border-b-2 border-gray-300 focus:border-[#A53BFE] outline-none py-2"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Phone*"
              className="border-b-2 border-gray-300 focus:border-[#A53BFE] outline-none py-2"
            />
            <input
              type="text"
              placeholder="Company*"
              className="border-b-2 border-gray-300 focus:border-[#A53BFE] outline-none py-2"
            />
          </div>

          <input
            type="text"
            placeholder="Subject*"
            className="w-full border-b-2 border-gray-300 focus:border-[#A53BFE] outline-none py-2"
          />
          <textarea
            placeholder="Message*"
            rows="4"
            className="w-full border-b-2 border-gray-300 focus:border-[#A53BFE] outline-none py-2"
          ></textarea>

          <button
            type="submit"
            className="bg-[#A53BFE] text-white px-8 py-3 font-semibold rounded-lg shadow-md hover:bg-[#8926d9] transition-all duration-300 flex items-center gap-2"
          >
            Submit <span>🚀</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
