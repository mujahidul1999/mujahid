import React from "react";
import {
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";

import AboutImg from "../assets/about.jpeg";

const About = () => {
  return (
    <section id="about" className="bg-[#07172A] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-slate-700 shadow-lg">
              <img
                src={AboutImg}
                alt="About Mujahid"
                className="w-full h-[400px] sm:h-[400px] lg:h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-white mb-4">
              Who Am I?
            </h2>

            <p className="text-slate-400 leading-8 mb-8">
              I'm a passionate Frontend Developer who loves turning
              ideas into real-world web applications. I enjoy crafting
              clean, efficient and user-friendly interfaces using modern
              technologies.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <FaUser className="text-sky-500 mt-1" />
                <div>
                  <p className="text-slate-500 text-sm">Name</p>
                  <h4 className="text-white">Mujahid</h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaBriefcase className="text-sky-500 mt-1" />
                <div>
                  <p className="text-slate-500 text-sm">Experience</p>
                  <h4 className="text-white">0+ Years</h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaGraduationCap className="text-sky-500 mt-1" />
                <div>
                  <p className="text-slate-500 text-sm">Education</p>
                  <h4 className="text-white">B.Tech (CSE)</h4>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-sky-500 mt-1" />
                <div>
                  <p className="text-slate-500 text-sm">Location</p>
                  <h4 className="text-white">India</h4>
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/uc?export=download&id=1B-nqQlkwiLKSNrDplIlBaFTY3fcBCuTk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 px-7 py-3 rounded-xl bg-sky-500 text-white font-medium shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
            >
              Download Resume ↓
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;