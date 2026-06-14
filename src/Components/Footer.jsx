import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer" className="bg-[#07172A] py-12">
      <div className="max-w-7xl mx-auto px-6">


        <h3 className="text-2xl font-bold text-white">
          Mujahidul Islam
        </h3>

        <p className="text-slate-400 mt-3">
          20dpit030hy@gmail.com
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <a href="https://www.linkedin.com/in/mujahidul-islam-144b0a350?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="text-white hover:text-cyan-400">
            LinkedIn
          </a>

          <a href="https://github.com/mujahidul1999" className="text-white hover:text-cyan-400">
            GitHub
          </a>

          <a href="https://x.com/Mujahid61787937" className="text-white hover:text-cyan-400">
            Twitter
          </a>
          <a href="https://www.instagram.com/mujahidul_islam786?utm_source=qr&igsh=MWl1ODZsdDA3cGJjdg==" className="text-white hover:text-cyan-400">
            Instagram
          </a>
        </div>

        <p className="text-slate-500 mt-6">
          © 2026 Mujahidul Islam. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;  