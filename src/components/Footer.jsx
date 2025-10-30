import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-8 bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-[#000] text-center overflow-hidden">
      {/* subtle glowing background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>

      <motion.p
        className="relative z-10 text-sm md:text-base text-gray-400 font-light"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 font-semibold">
          Praveen Kumar S
        </span>{" "}
        — Built with ❤️ using{" "}
        <span className="text-yellow-400 font-medium">React</span> &{" "}
        <span className="text-yellow-400 font-medium">TailwindCSS</span>
      </motion.p>

      <motion.div
        className="relative z-10 mt-3 text-xs text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Designed with precision • Crafted with passion ⚡
      </motion.div>
    </footer>
  );
}
