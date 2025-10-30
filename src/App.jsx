import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import UIUX from "./components/UIUX";

export default function App() {
  return (
    <div className="bg-[#0D0D0D] text-white font-[Poppins] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <Certifications />
      <Projects />
      <UIUX />
      <Contact />
      <Footer />
    </div>
  );
}
