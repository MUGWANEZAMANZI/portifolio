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
      title: "Game Development",
      data: [
        ["BugsVsBunnies", "Level Designer", "https://nizitowns.itch.io/bugs-vs-bunnies-td"],
        ["RunesVsRobots", "Lead Game Designer", "https://chiferito.itch.io/project-tower"],
        ["License Master", "Team Leader/Designer", "https://mugwanezamanzi.itch.io/license-master"],
        ["NanoCore", "Team Leader/Game Designer", "https://xamsav.itch.io/nanocore-defense-protocol"],
        ["Ikinyoni Bird", "Game Developer", "https://mugwanezamanzi.itch.io/ikinyoni-bird"]
      ]
    },
    {
      title: "Cyber Security",
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
      title: "Web Development",
      data: [
        ["Abunzi - Digitizing Local Dispute Resolution", "Full Stack", ""],
        ["Agakurura Tracker", "Full Stack", "https://agakurura-production.up.railway.app/"],
        ["React Class Project", "Frontend", "https://github.com/MUGWANEZAMANZI/React.git"]
      ]
    },
    {
      title: "AI & Machine Learning (Rubix PHP)",
      data: [["Mbaza AI", "Laravel + Rubix PHP", "https://github.com/MUGWANEZAMANZI"]]
    },
    {
      title: "Mobile Development (Expo & Android Studio)",
      data: [
        ["Nutri tracker", "React Native + Laravel", "https://github.com/MUGWANEZAMANZI"],
        ["Android Studio Projects", "Java/Kotlin", "https://github.com/MUGWANEZAMANZI"],
        ["Expo React Native App", "Frontend Mobile", "https://github.com/MUGWANEZAMANZI"]
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950 text-white p-4 flex flex-col">
      {/* Header */}
      <header className="text-center mb-8 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-green-400 drop-shadow-md">
          MUGWANEZA MANZI Audace
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-300 italic">
          Game Developer | SOC Analyst | Full-stack Web Developer | Mobile Developer | AI Engineer
        </p>
      </header>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Profile */}
        <div className="lg:w-1/3 flex flex-col items-center px-4">
          <img
            src="mugwaneza.jpg"
            alt="MUGWANEZA Profile"
            className="rounded-3xl shadow-2xl w-64 h-64 md:w-72 md:h-72 object-cover border-4 border-green-500"
          />
          <div className="mt-4 text-center space-y-1">
            <p className="text-sm text-green-300 break-all">📧 mmaudace@gmail.com</p>
            <p className="text-sm text-green-300">📞 +250 787 652 137</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow"
            >
              Hire Me
            </button>

          <div className="w-full mt-6 p-4 bg-slate-700 rounded-xl text-center">
            <h3 className="text-md font-bold text-green-300">Employment</h3>
            <p className=" pr-6 pl-6 text-sm text-gray-200">Kigali Web Artisans</p>
          </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="lg:w-2/3 flex flex-col gap-6 max-h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-slate-700 p-2">
          {sections.map((section, i) => (
            <div key={i} className="bg-slate-800 p-4 rounded-xl shadow-md">
              <h2 className="text-green-300 text-lg font-semibold border-b border-green-500 mb-4 pb-1">
                {section.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.data.map(([name, role, url], j) => (
                  <div key={j} className="bg-slate-700 rounded-lg p-3 shadow hover:shadow-lg transition">
                    <h3 className="text-white font-semibold">{name}</h3>
                    <p className="text-sm text-gray-400 mb-2">{role}</p>
                    {url ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 text-sm underline"
                      >
                        View Project
                      </a>
                    ) : (
                      <span className="text-yellow-300 text-sm italic">No link available</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          

         
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md overflow-auto max-h-[90vh]">
            <h2 className="text-xl font-semibold mb-4 text-black">Send Me a Message</h2>
            <input
              type="text"
              placeholder="Title"
              className="w-full border px-4 py-2 rounded mb-3 text-black"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Message"
              className="w-full border px-4 py-2 rounded mb-3 text-black"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSend}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
