import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `*New Contact Form Message*

Name: ${formData.name}

Email: ${formData.email}

Message: ${formData.message}`;

    window.open(
      `https://wa.me/918470903057?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-[#07172A] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          Contact Me
        </h2>

        <p className="text-center text-slate-400 mb-12">
          Have a project in mind? Let's work together.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
              Get In Touch
            </h3>

            <div className="space-y-5 text-slate-300">
              <p>📧 Email: 20dpit030hy@gmail.com</p>

              <p>
                📱 Phone:
                <a
                  href="https://wa.me/918470903057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 ml-2 hover:underline"
                >
                  +91 8470903057
                </a>
              </p>

              <p>📍 Location: India</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://github.com/mujahidul1999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-lg text-white hover:bg-cyan-500 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/mujahidul-islam-144b0a350"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-lg text-white hover:bg-cyan-500 transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://x.com/Mujahid61787937"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-lg text-white hover:bg-cyan-500 transition"
              >
                <FaTwitter size={22} />
              </a>

              <a
                href="https://wa.me/918470903057"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-lg text-white hover:bg-cyan-500 transition"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>

          {/* Right Side Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-900 p-8 rounded-2xl shadow-lg"
          >
            <div className="mb-5">
              <label className="block text-slate-300 mb-2">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg outline-none border border-slate-700 focus:border-cyan-500"
              />
            </div>

            <div className="mb-5">
              <label className="block text-slate-300 mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg outline-none border border-slate-700 focus:border-cyan-500"
              />
            </div>

            <div className="mb-5">
              <label className="block text-slate-300 mb-2">
                Message
              </label>

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message..."
                className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg outline-none border border-slate-700 focus:border-cyan-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition cursor-pointer"
            >
              Send Message on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;