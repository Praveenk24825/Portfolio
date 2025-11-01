import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    {
      title: "Full Stack Development – Zen Class (GUVI)",
      desc: "Comprehensive training in the MERN stack, covering frontend, backend, and deployment with real projects.",
    },
    {
      title: "React Frontend – Zen Class (GUVI)",
      desc: "Built interactive and dynamic UIs using React.js, Hooks, Router, and component-based design.",
    },
    {
      title: "UI/UX Design Mastery – Udemy",
      desc: "Learned wireframing, prototyping, and visual design using Figma with a focus on user-centered principles.",
    },
    {
      title: "JavaScript Mastery – Zen Class (GUVI)",
      desc: "Gained mastery over ES6+ features, DOM manipulation, async handling, and clean JS architecture.",
    },
    {
      title: "Tailwind CSS Design – Zen Class (GUVI)",
      desc: "Developed beautiful and responsive layouts using TailwindCSS with a focus on modern UI design.",
    },
    {
      title: "Node.js & Express Backend – Zen Class (GUVI)",
      desc: "Created scalable REST APIs with JWT authentication and middleware-driven backend logic.",
    },
    {
      title: "MongoDB Essentials – Zen Class (GUVI)",
      desc: "Learned schema design, CRUD operations, and data modeling using MongoDB and Mongoose.",
    },
    {
      title: "Responsive Web Design – Zen Class (GUVI)",
      desc: "Crafted adaptive and mobile-friendly web pages using Flexbox, CSS Grid, and media queries.",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-[#050505] text-center overflow-hidden text-gray-200 px-6 md:px-20"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">
        Certifications
      </h2>

      {/* Certification Grid */}
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.06 }}
            className="relative group bg-[#0a0a0a] border border-yellow-500/40 
                       rounded-2xl p-6 text-center shadow-[0_0_25px_rgba(255,215,0,0.15)] 
                       hover:shadow-[0_0_35px_rgba(255,215,0,0.4)] 
                       transition-all duration-500"
          >
            {/* Glow effect */}
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/20 via-yellow-300/10 to-transparent 
                         opacity-0 group-hover:opacity-100 blur-2xl transition duration-700"
            ></div>

            {/* Text */}
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400 mb-2 drop-shadow-[0_0_8px_rgba(255,255,150,0.5)]">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-400 max-w-sm mx-auto leading-relaxed">
                {cert.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
