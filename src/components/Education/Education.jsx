import React from "react";
import { education } from "../../constants"; // Import your education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Timeline entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`flex flex-col sm:flex-row items-center mb-16 relative
              ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}
          >
            {/* Timeline Circle */}
            {/* Timeline Circle */}
            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-gray-400 border-4 border-[#8245ec] w-16 h-16 rounded-full flex items-center justify-center overflow-hidden z-10">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover" // <-- yahan object-cover
              />
            </div>

            {/* Content Card */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
                ${index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"} mt-12`}
            >
              {/* School Logo & Info */}
              <div className="flex items-center space-x-4 sm:space-x-6">
                <div className="w-20 h-16 sm:w-24 sm:h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm sm:text-md text-gray-300">
                      {edu.school}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                </div>
              </div>

              {/* Grade & Description */}
              <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-2 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
