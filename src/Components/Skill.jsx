import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, percent: 95 },
  { name: "CSS", icon: <FaCss3Alt />, percent: 90 },
  { name: "JavaScript", icon: <FaJs />, percent: 85 },
  { name: "React", icon: <FaReact />, percent: 85 },
  { name: "Tailwind", icon: <SiTailwindcss />, percent: 90 },
  { name: "Node.js", icon: <FaNodeJs />, percent: 80 },
  { name: "Git", icon: <FaGitAlt />, percent: 85 },
  { name: "MongoDB", icon: <SiMongodb />, percent: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#07172A] py-12">
      <div className="max-w-7xl mx-auto px-6">


        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
          My Skills
        </h2>

        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#0f172a] border border-slate-700 rounded-2xl p-5 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl text-cyan-400">
                  {skill.icon}
                </div>

                <div>
                  <h3 className="text-white font-semibold">
                    {skill.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {skill.percent}%
                  </p>
                </div>
              </div>

              <div className="w-full h-2 bg-slate-700 rounded-full">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;