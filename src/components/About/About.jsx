import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profile2 from "../../assets/profile2.png";

const About = () => {
  return (
    <section id="about" className="py-4 px-[6vw] lg:px-[14vw] font-sans mt-20">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-1">
            Hi, I am
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Dheeraj Chauhan
          </h2>

          <h3 className="text-lg md:text-xl font-medium mb-4">
            <span className="text-gray-300">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  "Fullstack Developer",
                  "App Developer",
                  "UI/UX Designer",
                  "Coder",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={40}
                delaySpeed={1800}
              />
            </span>
          </h3>

          <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
            I am a passionate full-stack developer with a strong foundation in
            building responsive and scalable web applications. I have hands-on
            experience with front-end and back-end development, specializing in
            the MERN stack and modern technologies to create clean,
            user-friendly, and efficient solutions.
          </p>

          <a
            href="/Dheeraj_Chauhan_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-7 py-3 text-sm font-semibold text-white rounded-full transition hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
            }}
          >
            VIEW CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center">
          <Tilt
            className="w-44 h-44 sm:w-56 sm:h-56 md:w-80 md:h-80 border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.03}
          >
            <img
              src={profile2}
              alt="Tarun Kaushik"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
