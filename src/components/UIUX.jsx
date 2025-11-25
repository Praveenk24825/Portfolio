export default function UIUX() {
  const designs = [
    {
      title: "Nexcent – Travel Explorer Website",
      desc: "A vibrant travel platform UI design with floating cards, clean layout,for premium look.",
      tool: ["Figma", "Adobe XD"],
      link: "https://nexcent1-xfer.vercel.app/", // 🔗 Replace with your actual Figma/Behance link
    },
    {
      title: "AskmeIdenty – Portfolio Redesign (Dark Luxe)",
      desc: "This about learning platform UI redesign features a dark theme with gold accents, sleek typography, and modern aesthetics.",
      tool: ["Figma"],
      link: "https://nexcent1-xfer.vercel.app/", // 🔗 Replace with your link
    },
  ];

  return (
    <section
      id="uiux"
      className="relative py-24 bg-gradient-to-t from-[#0a0a0a] to-[#050505] text-gray-100"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,215,0,0.1),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(255,215,0,0.1),transparent_40%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-yellow-400 text-center mb-14 tracking-wide uppercase">
          UI / UX Designs
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {designs.map((d, i) => (
            <div
              key={i}
              className="relative bg-[#111]/80 border border-yellow-400/30 backdrop-blur-md p-8 rounded-2xl shadow-[0_0_25px_rgba(255,255,0,0.15)] hover:shadow-[0_0_35px_rgba(255,255,0,0.25)] transition duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-yellow-300 mb-3">
                {d.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-4">{d.desc}</p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mt-2 mb-6">
                {d.tool.map((tool, j) => (
                  <span
                    key={j}
                    className="bg-yellow-400/10 text-yellow-300 text-sm px-3 py-1 rounded-full border border-yellow-300/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Link Button */}
              <a
                href={d.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-black bg-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-500 hover:scale-105 transition-transform shadow-[0_0_12px_rgba(255,215,0,0.4)]"
              >
                🎨 View Design
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
