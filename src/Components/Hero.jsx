import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { SiRedux } from "react-icons/si";
import HeroImg from "../assets/Hero.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#07172A] flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-2 w-full ">
        <div className="bg-[#0F172A]/80 backdrop-blur-md overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-10 items-center p-8 lg:p-12">

            {/* LEFT SIDE */}
            <div>

              <p className="text-white text-xl mb-3">
                Hi, I'm
              </p>

              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Mujahid
              </h1>

              <h2 className="text-2xl md:text-4xl text-white mt-4">
                Frontend Developer
                <span className="text-purple-500"> |</span>
              </h2>

              <p className="text-slate-400 mt-6 max-w-lg leading-8">
                I build beautiful, interactive and responsive web
                experiences using modern technologies.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-row gap-3 mt-8 w-full">
                <a
                  href="https://drive.google.com/uc?export=download&id=1B-nqQlkwiLKSNrDplIlBaFTY3fcBCuTk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-4 py-3 rounded-xl bg-sky-500 text-white font-medium shadow-lg hover:scale-105 transition cursor-pointer"
                >
                  Resume ↓
                </a>

                <button
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-600 text-white hover:border-sky-500 transition cursor-pointer"
                >
                  Contact ✈
                </button>
              </div>

              {/* SOCIAL */}
              <div className="flex gap-4 mt-8">

                <a
                  href="https://github.com/mujahidul1999"
                  className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-white hover:bg-purple-600 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/mujahidul-islam-144b0a350?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-white hover:bg-purple-600 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://www.instagram.com/mujahidul_islam786?utm_source=qr&igsh=MWl1ODZsdDA3cGJjdg=="
                  className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-white hover:bg-purple-600 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://x.com/Mujahid61787937"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center text-white hover:bg-purple-600 transition"
                >
                  <FaXTwitter />
                </a>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="relative flex justify-center">

              {/* IMAGE */}

              <img
                src={HeroImg}
                alt="Mujahid"
                className="relative z-10 w-[350px] h-[350px] md:w-[500px] md:h-[500px] object-cover rounded-full"
              />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}