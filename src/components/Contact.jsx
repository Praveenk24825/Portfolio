import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-[#0a0a0a] to-[#111] text-center overflow-hidden z-10"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08)_0%,transparent_70%)] pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-extrabold text-yellow-400 mb-6 tracking-tight"
      >
        Let’s Connect 🤝
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-12"
      >
        I’m always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </motion.p>

      {/* Contact Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-20"
      >
        <a
          href="mailto:praveenk24825@gmail.com"
          className="flex items-center gap-3 bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-500 transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
        >
          <FaEnvelope className="text-xl" />
          praveenk24825@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/praveen-kumar-s-849071378/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 border border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold text-lg hover:bg-yellow-400 hover:text-black transition-transform hover:scale-105"
        >
          <FaLinkedin className="text-xl" />
          LinkedIn
        </a>

        <a
          href="https://github.com/Praveenk24825"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 border border-gray-600 text-gray-300 px-8 py-3 rounded-full font-semibold text-lg hover:border-yellow-400 hover:text-yellow-400 transition-transform hover:scale-105"
        >
          <FaGithub className="text-xl" />
          GitHub
        </a>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto mt-20 bg-[#0d0d0d] p-8 rounded-2xl border border-yellow-400/20 shadow-[0_0_20px_rgba(255,215,0,0.15)]"
      >
        <h3 className="text-3xl font-bold text-yellow-400 mb-6">Send Me a Message</h3>

        <form
          action="https://formspree.io/f/mjkbqwnq"
          method="POST"
          className="space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 bg-[#111] border border-gray-700 rounded-lg text-white focus:border-yellow-400 outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 bg-[#111] border border-gray-700 rounded-lg text-white focus:border-yellow-400 outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 bg-[#111] border border-gray-700 rounded-lg text-white focus:border-yellow-400 outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-gray-500 text-sm mt-16"
      >
        © {new Date().getFullYear()} Praveen Kumar. All rights reserved.
      </motion.p>
    </section>
  );
}
