import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    "Full Stack Development – Zen Class (GUVI)",
    "React Frontend – Zen Class (GUVI)",
    "UI/UX Design Mastery – Udemy",
    "JavaScript Mastery – Zen Class (GUVI)",
    "Tailwind CSS Design – Zen Class (GUVI)",
    "Node.js & Express Backend – Zen Class (GUVI)",
    "MongoDB Essentials – Zen Class (GUVI)",
    "Responsive Web Design – Zen Class (GUVI)",
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-[#050505] text-center overflow-hidden text-gray-200 px-6 md:px-20"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-600">
        Certifications
      </h2>

      {/* Certification Grid */}
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="relative group bg-[#0a0a0a] border border-yellow-400/30 
                       rounded-2xl p-6 text-gray-200 shadow-[0_0_20px_rgba(255,215,0,0.1)] 
                       hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] 
                       transition-all duration-300"
          >
            {/* Glow overlay */}
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/10 to-transparent 
                         opacity-0 group-hover:opacity-100 blur-lg transition duration-500"
            ></div>

            {/* Text */}
            <p className="relative z-10 text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
              {cert}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
