export default function Projects() {
  const projects = [
    {
      title: "Recipe Sharing Platform",
      desc: "A complete recipe app with image/video upload, filters, and user interactions.",
      tech: ["MongoDB", "Express", "React", "Node"],
      link: "https://qwery902.netlify.app/", // 🔗 Add your link
    },
    {
      title: "Smart Expense Tracker",
      desc: "React + Tailwind app to manage expenses with filters, charts, and insights.",
      tech: ["React", "Tailwind", "Chart.js"],
      link: "https://finahy.netlify.app/",
    },
    {
      title: "NoteKeeper",
      desc: "A note-taking app with rich text editing, tagging, and search functionality.",
      tech: ["React", "HTML5", "CSS3", "JavaScript"],
      link: "https://notesgh.netlify.app/",
    },
    {
      title: "E-Commerce App",
      desc: "MERN-based store with cart, wishlist, and Stripe payment integration.",
      tech: ["MERN", "Stripe", "JWT"],
      link: "https://ecommerce45679.netlify.app/",
    },
    {
      title:"Movie Search App",
      desc:"Search movies using the OMDB API with React and Tailwind CSS.",
      tech:["React","Tailwind","OMDB API"],
      link:"https://final345.netlify.app/",
    }
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

              {/* Project Link */}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-black bg-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-500 hover:scale-105 transition-transform shadow-[0_0_12px_rgba(255,215,0,0.4)]"
              >
                🔗 View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
