import './App.css';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skill';
import Projects from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="bg-[#07172A] text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;