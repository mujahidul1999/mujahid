import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "React & Tailwind Portfolio Website",
    img: "https://images.unsplash.com/photo-1545665277-5937489579f2",
  },
  {
    title: "Expense Tracker",
    desc: "Full Responsive Online Expense Tracker",
    img: "https://media.istockphoto.com/id/2209182692/photo/the-businesswoman-analyzing-big-data.jpg",
  },
  {
    title: "Resume-builder",
    desc: "Modern Admin Dashboard",
    img: "https://images.unsplash.com/photo-1698047681432-006d2449c631",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#07172A] py-12">
      <div className="max-w-7xl mx-auto px-6">


        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl overflow-hidden hover:scale-105 transition"
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

                <button className="mt-5 bg-cyan-500 px-5 py-2 rounded-lg text-white">
                  View Project
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;