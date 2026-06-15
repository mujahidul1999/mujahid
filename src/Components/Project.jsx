import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    desc: "React & Tailwind Portfolio Website",
    img: "https://images.unsplash.com/photo-1545665277-5937489579f2?w=800",
    github: "https://github.com/mujahidul1999/mujahid",
  },
  {
    title: "Expense Tracker",
    desc: "Full Responsive Online Expense Tracker",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    github: "https://github.com/mujahidul1999/expense-tracker",
  },
  {
    title: "Resume Builder",
    desc: "Modern Resume Builder Application",
    img: "https://images.unsplash.com/photo-1698047681432-006d2449c631?w=800",
    github: "https://github.com/mujahidul1999/resume-builder",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#07172A] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-cyan-500/20 transition duration-300"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl text-white font-semibold">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-3">
                  {project.desc}
                </p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg text-white font-medium transition duration-300"
                >
                  <FaGithub />
                  View Code
                </a>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;