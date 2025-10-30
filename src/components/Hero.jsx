import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const roles = [
    "Full Stack Developer 💻",
    "UI/UX Designer 🎨",
    "MERN Enthusiast 🚀",
  ];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setCurrentText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex === currentRole.length) {
          setDeleting(true);
          setTimeout(() => {}, 1000);
        }
      } else {
        setCurrentText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08)_0%,transparent_70%)]"></div>

      {/* Floating light orbs */}
      <div className="absolute w-full h-full overflow-hidden">
        <div className="absolute w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      {/* Hero Text */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-yellow-400 mb-4 z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m Praveen Kumar S
      </motion.h1>

      {/* Typewriter text */}
      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-gray-300 h-10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {currentText}
        <span className="text-yellow-400 animate-pulse">|</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-400 text-lg md:text-xl max-w-2xl mt-6 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        I build sleek, scalable, and user-focused digital experiences blending clean code
        with elegant design.
      </motion.p>

      {/* Buttons (only “View My Work”) */}
      <motion.div
        className="mt-10 flex justify-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a
          href="#projects"
          className="bg-yellow-400 text-black font-semibold px-10 py-4 rounded-full hover:bg-yellow-500 hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,215,0,0.4)]"
        >
          View My Work
        </a>
      </motion.div>

      {/* Decorative bottom line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-12 h-[3px] bg-gradient-to-r from-yellow-400 via-white to-yellow-400 rounded-full z-10"
      ></motion.div>
    </section>
  );
}
