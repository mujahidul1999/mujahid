import React from "react";
import {
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";

import AboutImg from "../assets/Hero.jpeg";

const About = () => {
  return (
    <section id="about" className="bg-[#07172A] py-12">
      <div className="max-w-7xl mx-auto px-6">
         <h2 className="text-4xl font-bold text-center text-white mb-4">
          About Me
        </h2>

        {/* Card */}
        <div className="bg-[#0F172A]/80 ">


          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE */}
            <div className="relative">

              <div className="relative overflow-hidden rounded-2xl border border-slate-700">
                <img
                  src={AboutImg}
                  alt="About"
                  className="w-full h-[350px] object-cover"
                />
              </div>

              {/* Experience Card */}
             

            </div>

            {/* RIGHT SIDE */}
            <div>

              <h2 className="text-4xl font-bold text-white mb-4">
                Who Am I?
              </h2>

              <p className="text-slate-400 leading-8 mb-8">
                I'm a passionate Frontend Developer who loves turning
                ideas into real-world web applications. I enjoy crafting
                clean, efficient and user-friendly interfaces using
                modern technologies.
              </p>

              {/* INFO GRID */}

              <div className="grid md:grid-cols-2 gap-6">

                <div className="flex items-start gap-3">
                  <FaUser className="text-purple-500 mt-1" />
                  <div>
                    <p className="text-slate-500 text-sm">Name</p>
                    <h4 className="text-white">Mujahid</h4>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaBriefcase className="text-purple-500 mt-1" />
                  <div>
                    <p className="text-slate-500 text-sm">Experience</p>
                    <h4 className="text-white">0+ Years</h4>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaGraduationCap className="text-purple-500 mt-1" />
                  <div>
                    <p className="text-slate-500 text-sm">Education</p>
                    <h4 className="text-white">
                      B.Tech (CSE)
                    </h4>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-purple-500 mt-1" />
                  <div>
                    <p className="text-slate-500 text-sm">Location</p>
                    <h4 className="text-white">India</h4>
                  </div>
                </div>

              </div>

              {/* BUTTON */}

              <a
                  href="https://drive.google.com/uc?export=download&id=1B-nqQlkwiLKSNrDplIlBaFTY3fcBCuTk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-7 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-sky-500 text-white font-medium shadow-lg hover:scale-105 transition cursor-pointer"
                >
                  Download Resume ↓
                </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;