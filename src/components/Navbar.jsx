import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Certifications", id: "certifications" },
    { name: "Projects", id: "projects" },
    { name: "UI/UX", id: "uiux" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth scroll behavior (ensures anchor works perfectly)
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-yellow-400/30 shadow-[0_0_25px_rgba(255,215,0,0.25)]"
          : "bg-transparent border-b border-transparent"
      }`}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
        {/* Brand Logo */}
        <motion.a
          href="#home"
          className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-400 text-3xl font-extrabold hover:scale-110 transition-transform duration-300 tracking-tight"
          whileHover={{ scale: 1.1 }}
        >
          PraveenDev<span className="text-yellow-400">.</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-[15px] font-medium">
          {links.map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              whileHover={{ scale: 1.05 }}
              className="relative text-gray-300 hover:text-yellow-400 tracking-wide transition duration-300 group"
            >
              {link.name}
              <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-white group-hover:w-full transition-all duration-500 rounded-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex gap-5 text-xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400 hover:scale-125 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400 hover:scale-125 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-yellow-400 hover:text-white transition-all duration-300"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-yellow-400/10 flex flex-col items-center space-y-6 py-8"
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="text-lg text-gray-300 hover:text-yellow-400 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}

            <div className="flex gap-8 mt-6 text-2xl">
              <a
                href="https://github.com/Praveenk24825"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/praveen-kumar-s-849071378/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
