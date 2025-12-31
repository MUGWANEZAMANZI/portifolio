import { useState } from "react";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:mmaudace@gmail.com?subject=${subject}&body=${body}`;
    setIsModalOpen(false);
  };

  const interests = [
    "Computer Vision",
    "Machine Learning",
    "Quantum Computing",
  ];

  const highlights = [
    {
      kind: "Paper",
      title: "Coming Soon — Vision research manuscript",
      meta: "2025",
      linkText: "Google Scholar",
      url: "https://scholar.google.com/"
    },
    {
      kind: "Project",
      title: "Mbaza AI — Legal assistant (AI)",
      meta: "Applied AI",
      linkText: "Code",
      url: "https://github.com/MUGWANEZAMANZI"
    },
    {
      kind: "Dataset",
      title: "Coming Soon — CV dataset",
      meta: "Open data",
      linkText: "Overview",
      url: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-x-hidden">
      {/* Subtle backdrop for a cleaner research aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>

      <div className="relative z-10 p-4 lg:p-8">
        {/* Hero */}
        <header className="text-center mb-10 px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            MUGWANEZA MANZI Audace
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 font-medium">
            Computer Vision & Machine Learning Researcher
          </p>
          <p className="mt-2 text-sm md:text-base text-gray-400">
            Kigali, Rwanda • Research at Kigali Web Artisans
          </p>

          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {interests.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-white/5 text-gray-200 border border-white/10 text-xs md:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://orcid.org/0009-0003-0610-2382"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow hover:shadow-lg"
            >
              View Publications (ORCID)
            </a>
            <a
              href="cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10"
            >
              Download CV
            </a>
            <a
              href="mailto:mmaudace@gmail.com"
              className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold"
            >
              Contact
            </a>
          </div>
        </header>

        {/* Main Section */}
        <div className="flex flex-col xl:flex-row gap-12 max-w-7xl mx-auto">
          {/* Profile Card */}
          <div className="xl:w-1/3 flex flex-col items-center">
            <img
              src="mugwaneza.jpg"
              alt="MUGWANEZA Profile"
              className="w-64 h-64 object-cover rounded-full border-8 border-white/10 shadow-xl"
            />

            <div className="mt-8 text-center space-y-6 bg-slate-900/60 backdrop-blur rounded-3xl p-8 border border-white/10 shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-gray-200">
                  <span className="text-xl">📧</span>
                  <p className="text-sm md:text-base">mmaudace@gmail.com</p>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-200">
                  <span className="text-xl">📞</span>
                  <p className="text-sm md:text-base">+250 787 652 137</p>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold"
              >
                Email Me
              </button>

              <div className="rounded-2xl p-4 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-1">Affiliation</h3>
                <p className="text-gray-300">Kigali Web Artisans | University of Rwanda</p>
              </div>
            </div>
          </div>

          {/* Highlights + Archive */}
          <div className="xl:w-2/3 space-y-10">
            <div className="animate-slide-up">
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Selected Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {highlights.map((h, idx) => (
                    <div key={idx} className="rounded-2xl border border-white/10 bg-slate-800/60 p-5">
                      <p className="text-xs text-gray-400 mb-1">{h.kind}</p>
                      <h3 className="text-base font-semibold text-white">{h.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">{h.meta}</p>
                      <div className="mt-3">
                        <a
                          href={h.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-400 hover:text-indigo-300 text-sm"
                        >
                          {h.linkText} ↗
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-slide-up">
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <h2 className="text-xl font-bold text-gray-200 mb-4">Other Work (Archive)</h2>
                <p className="text-sm text-gray-400 mb-6">Games, cybersecurity, web and mobile projects previously built.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[
                    ["BugsVsBunnies", "Level Designer", "https://nizitowns.itch.io/bugs-vs-bunnies-td"],
                    ["RunesVsRobots", "Lead Game Designer", "https://chiferito.itch.io/project-tower"],
                    ["License Master", "Team Leader/Designer", "https://mugwanezamanzi.itch.io/license-master"],
                    ["NanoCore", "Team Leader/Game Designer", "https://xamsav.itch.io/nanocore-defense-protocol"],
                    ["Ikinyoni Bird", "Game Developer", "https://mugwanezamanzi.itch.io/ikinyoni-bird"],
                    ["Checker", "SOC Analyst", "https://github.com/MUGWANEZAMANZI/checker"],
                    ["Agakurura Tracker", "Full Stack", "https://agakurura-production.up.railway.app/"],
                    ["Mbaza AI", "Laravel + Rubix PHP", "https://github.com/MUGWANEZAMANZI"]
                  ].map(([name, role, url], j) => (
                    <div key={j} className="rounded-2xl border border-white/10 bg-slate-800/60 p-5">
                      <h3 className="text-base font-semibold text-white">{name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{role}</p>
                      <div className="mt-3">
                        {url ? (
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:text-indigo-300 text-sm"
                          >
                            View ↗
                          </a>
                        ) : (
                          <span className="text-amber-400 text-sm">Coming Soon</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 px-4 animate-fade-in">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 w-full max-w-md border border-white/20 shadow-2xl transform animate-scale-in">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center space-x-2">
              <span>💬</span>
              <span>Send Me a Message</span>
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-slate-700/50 border border-white/20 px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                placeholder="Your message..."
                className="w-full bg-slate-700/50 border border-white/20 px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSend}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Send 🚀
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Home;
