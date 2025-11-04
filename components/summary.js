import React from "react";

function Summary() {
  return (
    <section id="summary" className="mt-1 p-5 scroll-mt-24">
      <div className="flex justify-center mb-2 lg:mb-4">
        <h2 className="text-black mb-4 text-2xl md:text-2xl lg:text-3xl font-semibold leading-1 tracking-wider mt-2">
          Summary
        </h2>
      </div>
      <div className="container mx-auto bg-[#9929fb] shadow-2xl rounded-2xl  items-center md:items-start gap-1 md:px-14 lg:px-14 py-4 px-4 md:py-4">
        <p className="text-white text-sm sm:text-base lg:text-lg">
          As a seasoned <b>Front-End Developer,</b>  I bring over three and a half years
          of expertise in crafting responsive and scalable web applications
          leveraging cutting-edge technologies such as <b>React.js, Next.js,
          JavaScript (ES6+), HTML5, CSS3,</b> along with design frameworks like
          <b>Tailwind CSS, Material UI, and Ant Design.</b> My proficiency extends to
          UI/UX design, seamless API integration, robust
          authentication/authorization mechanisms, and meticulous performance
          optimization. With a solid command of server-side technologies
          including <b>Node.js, Express.js, and MongoDB,</b> I am well-versed in cloud
          hosting solutions and adept at implementing CI/CD pipelines. My strong
          foundation in Agile/Scrum methodologies and version control using <b>Git,
          GitHub, and GitLab</b> underpins my commitment to delivering projects with
          efficiency and the highest quality standards
        </p>
      </div>
    </section>
  );
}

export default Summary;
