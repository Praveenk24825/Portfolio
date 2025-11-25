export default function Projects() {
  const projects = [
    {
      title: "Recipe Sharing Platform (MERN)",
      desc: "A full-stack recipe application where users can upload photos/videos, save favorites, add reviews, and explore recipes with advanced filters.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Cloud Upload"],
      live: "https://qwery902.netlify.app/",
      frontend: "https://github.com/Praveenk24825/RecipeFrontend",
      backend: "https://github.com/Praveenk24825/recipe-backend",
    },
    {
      title: "E-Commerce Application (MERN)",
      desc: "A complete e-commerce platform with authentication, cart, wishlist, product management, and Stripe payment gateway.",
      tech: ["MERN Stack", "JWT Auth", "Stripe", "REST API", "Tailwind"],
      live: "https://ecommerce45679.netlify.app/",
      frontend: "https://github.com/Praveenk24825/Ecommercefrontend",
      backend: "https://github.com/Praveenk24825/Ecommercebackend",
    },
    {
      title: "Smart Expense Tracker (MERN)",
      desc: "A smart expense management system with CRUD features, monthly filters, category charts, and dashboard analytics.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Recharts", "JWT"],
      live: "https://finahy.netlify.app/",
      frontend: "https://github.com/Praveenk24825/SmartExpenseCalculator",
      backend: "https://github.com/Praveenk24825/BackendProject",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-[#050505] to-[#0a0a0a] text-gray-100"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,0,0.1),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,0,0.1),transparent_40%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-yellow-400 text-center mb-14 tracking-wide uppercase">
          MERN Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative bg-[#111]/80 border border-yellow-400/30 backdrop-blur-md p-8 rounded-2xl shadow-[0_0_25px_rgba(255,255,0,0.15)] hover:shadow-[0_0_35px_rgba(255,255,0,0.25)] transition duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-400/5 to-transparent rounded-2xl pointer-events-none"></div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-yellow-300 mb-3">{p.title}</h3>
              
              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-4">{p.desc}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-2 mb-6">
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    className="bg-yellow-400/10 text-yellow-300 text-sm px-3 py-1 rounded-full border border-yellow-300/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex flex-col gap-3">
                <a
                  href={p.live}
                  target="_blank"
                  className="inline-block text-sm font-semibold text-black bg-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-500 hover:scale-105 transition-transform"
                >
                  🔗 Live Demo
                </a>

                <a
                  href={p.frontend}
                  target="_blank"
                  className="text-yellow-300 underline text-sm hover:text-yellow-400"
                >
                  🖥️ Frontend GitHub
                </a>

                <a
                  href={p.backend}
                  target="_blank"
                  className="text-yellow-300 underline text-sm hover:text-yellow-400"
                >
                  ⚙️ Backend GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
