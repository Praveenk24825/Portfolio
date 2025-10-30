import { motion } from "framer-motion";

const skills = [
  // 💻 Frontend
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Framer Motion",

  // ⚙️ Backend
  "Node.js",
  "Express.js",
  "MongoDB",

  // 🧠 UI/UX & Design
  "Figma",
  "Adobe XD",
  "Dribbble",
  "UI/UX Design",
  "Prototyping",
  "Wireframing",

  // 🧰 Tools & DevOps
  "VS Code",
  "Git & GitHub",
  "Postman",
  "REST APIs",
  "Netlify",
  "Render",


  // 🌐 Others
  "Video Editing",
  
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-[#0a0a0a] via-[#0c0c0c] to-[#000] text-gray-200 px-6 md:px-20 text-center relative overflow-hidden"
    >
      {/* glowing yellow aura background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>

      <motion.h2
        className="relative text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 drop-shadow-[0_0_15px_rgba(255,255,0,0.4)]"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills & Tools
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-5 relative z-10"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        viewport={{ once: true }}
      >
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            className="px-6 py-3 bg-[#111111]/60 border border-yellow-400/30 text-yellow-300 rounded-full font-semibold shadow-[0_0_15px_rgba(255,255,0,0.2)] hover:shadow-[0_0_25px_rgba(255,255,0,0.5)] hover:scale-110 transition-all duration-300 cursor-default"
            whileHover={{
              scale: 1.15,
              textShadow: "0px 0px 10px rgba(255,255,0,0.8)",
            }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>

      <motion.p
        className="mt-10 text-gray-400 text-sm md:text-base max-w-xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skilled in building responsive MERN stack applications with an eye for
        design — blending clean UI, seamless UX, and optimized performance using
        modern tools and frameworks.
      </motion.p>
    </section>
  );
}
