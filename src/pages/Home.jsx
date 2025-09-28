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

  const sections = [
    {
      title: "🎮 Game Development",
      color: "from-purple-600 to-pink-600",
      borderColor: "border-purple-400",
      data: [
        ["BugsVsBunnies", "Level Designer", "https://nizitowns.itch.io/bugs-vs-bunnies-td"],
        ["RunesVsRobots", "Lead Game Designer", "https://chiferito.itch.io/project-tower"],
        ["License Master", "Team Leader/Designer", "https://mugwanezamanzi.itch.io/license-master"],
        ["NanoCore", "Team Leader/Game Designer", "https://xamsav.itch.io/nanocore-defense-protocol"],
        ["Ikinyoni Bird", "Game Developer", "https://mugwanezamanzi.itch.io/ikinyoni-bird"]
      ]
    },
    {
      title: "🛡️ Cyber Security",
      color: "from-red-600 to-orange-600",
      borderColor: "border-red-400",
      data: [
        ["Checker", "SOC Analyst", "https://github.com/MUGWANEZAMANZI/checker"],
        ["Remote Control", "Network Research", "https://github.com/MUGWANEZAMANZI/RemoteControl"],
        ["Log Analyzer", "Python Fundamentals", "https://github.com/MUGWANEZAMANZI/LogAnalyzer"],
        ["Info Extractor", "Linux Fundamentals", "https://github.com/MUGWANEZAMANZI/info_extractor"],
        ["Net Crafts", "Intro to Cyber", "https://drive.google.com/file/d/1_TKJhM86dhpPV-r4H_AYMcUfBpGrJOD7/view?usp=drive_link"],
        ["Kagoma Sanitizer", "Trusterlabs", ""]
      ]
    },
    {
      title: "🌐 Web Development",
      color: "from-blue-600 to-cyan-600",
      borderColor: "border-blue-400",
      data: [
        ["Abunzi - Digitizing Local Dispute Resolution", "Full Stack", ""],
        ["Agakurura Tracker", "Full Stack", "https://agakurura-production.up.railway.app/"],
        ["React Class Project", "Frontend", "https://github.com/MUGWANEZAMANZI/React.git"]
      ]
    },
    {
      title: "🤖 AI & Machine Learning",
      color: "from-emerald-600 to-teal-600",
      borderColor: "border-emerald-400",
      data: [["Mbaza AI", "Laravel + Rubix PHP", "https://github.com/MUGWANEZAMANZI"]]
    },
    {
      title: "📱 Mobile Development",
      color: "from-indigo-600 to-purple-600",
      borderColor: "border-indigo-400",
      data: [
        ["Mbaza AI", "AI Assistant built using Rwandan dataset of laws", "https://play.google.com/apps/internaltest/4701693262390775478"],
        ["Dorm Link", "Android app for students to find cheap dorms and hostels in Rwanda on Maps", "https://play.google.com/apps/internaltest/4700453856788841191"],
        ["Nutri tracker", "React Native + Laravel", "https://github.com/MUGWANEZAMANZI"],
        ["Android Studio Projects", "Java/Kotlin", "https://github.com/MUGWANEZAMANZI"],
        ["Expo React Native App", "Frontend Mobile", "https://github.com/MUGWANEZAMANZI"],
        ["Systeme de Permis de conduire", "Android Studio", "https://github.com/MUGWANEZAMANZI"]
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-emerald-900/20 animate-pulse"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-bounce delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-20 animate-bounce delay-2000"></div>

      <div className="relative z-10 p-4 lg:p-8">
        {/* Header */}
        <header className="text-center mb-12 px-4 animate-fade-in">
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              MUGWANEZA MANZI Audace
            </h1>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-pink-600 rounded-lg blur opacity-25 animate-pulse"></div>
          </div>
          <p className="mt-6 text-lg md:text-xl text-gray-300 font-light tracking-wide">
            🎮 Game Developer | 🛡️ SOC Analyst | 🌐 Full-stack Developer | 📱 Mobile Developer | 🤖 AI Engineer
          </p>
        </header>

        {/* Main Section */}
        <div className="flex flex-col xl:flex-row gap-12 max-w-7xl mx-auto">
          {/* Profile Card */}
          <div className="xl:w-1/3 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img
                src="mugwaneza.jpg"
                alt="MUGWANEZA Profile"
                className="relative w-80 h-80 object-cover rounded-full border-8 border-white/20 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="mt-8 text-center space-y-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors">
                  <span className="text-2xl">📧</span>
                  <p className="text-sm md:text-base">mmaudace@gmail.com</p>
                </div>
                <div className="flex items-center justify-center space-x-2 text-emerald-300 hover:text-emerald-200 transition-colors">
                  <span className="text-2xl">📞</span>
                  <p className="text-sm md:text-base">+250 787 652 137</p>
                </div>
              </div>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 group overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center space-x-2">
                  <span>💼</span>
                  <span>Hire Me</span>
                </span>
              </button>

              <div className="bg-gradient-to-br from-emerald-800/30 to-teal-800/30 rounded-2xl p-6 border border-emerald-400/30">
                <h3 className="text-xl font-bold text-emerald-300 mb-2 flex items-center justify-center space-x-2">
                  <span>🏢</span>
                  <span>Employment</span>
                </h3>
                <p className="text-gray-200 font-medium">Kigali Web Artisans</p>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="xl:w-2/3 space-y-8">
            {sections.map((section, i) => (
              <div 
                key={i} 
                className="group animate-slide-up"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div className={`bg-gradient-to-br ${section.color} p-1 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]`}>
                  <div className="bg-slate-900/90 backdrop-blur-sm rounded-3xl p-6">
                    <h2 className={`text-2xl font-bold text-white mb-6 pb-3 border-b-2 ${section.borderColor} flex items-center space-x-3`}>
                      <span>{section.title}</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {section.data.map(([name, role, url], j) => (
                        <div 
                          key={j} 
                          className="group/card bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        >
                          <div className="space-y-3">
                            <h3 className="text-lg font-bold text-white group-hover/card:text-cyan-300 transition-colors duration-300">
                              {name}
                            </h3>
                            <p className="text-sm text-gray-400 bg-slate-800/50 px-3 py-1 rounded-full inline-block">
                              {role}
                            </p>
                            <div className="pt-2">
                              {url ? (
                                <a
                                  href={url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300 hover:underline"
                                >
                                  <span>🔗</span>
                                  <span>View Project</span>
                                </a>
                              ) : (
                                <span className="inline-flex items-center space-x-2 text-amber-400 text-sm italic">
                                  <span>⏳</span>
                                  <span>Coming Soon</span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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

      <style jsx>{`
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
