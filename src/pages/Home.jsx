
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950 text-white p-4 flex flex-col">
      {/* Header Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-400 drop-shadow-md">
          MUGWANEZA MANZI Audace
        </h1>
        <p className="mt-2 text-sm text-gray-300 italic">
          Game Developer | SOC Analyst | Full-stack Web Developer | Mobile Developer | AI Engineer
        </p>
      </header>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Profile Image */}
        <div className="md:w-1/3 flex flex-col items-center">
  <img
    src="mugwaneza.jpg"
    alt="MUGWANEZA Profile"
    className="rounded-3xl shadow-2xl w-72 h-72 object-fit border-4 border-green-500"
  />
  <div className="mt-4 text-center space-y-1">
    <p className="text-sm text-green-300">📧 mmaudace@gmail.com</p>
    <p className="text-sm text-green-300">📞 +250 787 652 137</p>
  </div>
</div>


        {/* Projects & Skills */}
        <div className="md:w-2/3 flex flex-col gap-6 max-h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-slate-700 p-2">
          {/* Reusable Table Component */}
          {[{
            title: "Game Development",
            data: [
              ["BugsVsBunnies", "Level Designer", "https://nizitowns.itch.io/bugs-vs-bunnies-td"],
              ["RunesVsRobots", "Lead Game Designer", "https://chiferito.itch.io/project-tower"],
              ["License Master", "Team Leader/Designer", "https://mugwanezamanzi.itch.io/license-master"],
              // ["Let's Flarp", "Game Developer", "https://mugwanezamanzi.itch.io/lets-flarp"],
              ['Ikinyoni Bird', "Game Developer", "https://mugwanezamanzi.itch.io/ikinyoni-bird"],

            ]
          }, {
            title: "Cyber Security",
            data: [
              ["Checker", "SOC Analyst", "https://github.com/MUGWANEZAMANZI/checker"],
              ["Remote Control", "Network Research", "https://github.com/MUGWANEZAMANZI/RemoteControl"],
              ["Log Analyzer", "Python Fundamentals", "https://github.com/MUGWANEZAMANZI/LogAnalyzer"],
              ["Info Extractor", "Linux Fundamentals", "https://github.com/MUGWANEZAMANZI/info_extractor"],
              ["Net Crafts", "Intro to Cyber", "https://drive.google.com/file/d/1_TKJhM86dhpPV-r4H_AYMcUfBpGrJOD7/view?usp=drive_link"]
            ]
          }, {
            title: "Web Development",
            data: [
              ["Agakurura Tracker", "Full Stack", "https://agakurura-production.up.railway.app/"],
              ["React Class Project", "Frontend", "https://github.com/MUGWANEZAMANZI/React.git"]
            ]
          }, {
            title: "AI & Machine Learning (Rubix PHP)",
            data: [
              ["Legal AI Assistant", "Laravel + Rubix PHP", "https://github.com/MUGWANEZAMANZI"]
            ]
          }, {
            title: "Mobile Development (Expo & Android Studio)",
            data: [
              ["Android Studio Projects", "Java/Kotlin", "https://github.com/MUGWANEZAMANZI"],
              ["Expo React Native App", "Frontend Mobile", "https://github.com/MUGWANEZAMANZI"]
            ]
          }].map((section, index) => (
            <div key={index} className="bg-slate-800 p-4 rounded-xl shadow-md">
              <h2 className="text-green-300 text-lg font-semibold border-b border-green-500 mb-2 pb-1">
                {section.title}
              </h2>
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="text-green-500">
                    <th className="p-2">Project</th>
                    <th className="p-2">Role</th>
                    <th className="p-2">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {section.data.map((row, i) => (
                    <tr key={i} className="border-b border-slate-600 hover:bg-slate-700">
                      <td className="p-2 text-white">{row[0]}</td>
                      <td className="p-2 text-gray-300">{row[1]}</td>
                      <td className="p-2 text-blue-400 underline">
                        <a href={row[2]} target="_blank" rel="noopener noreferrer">{row[0]}</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

          {/* Jobs Section */}
          <div className="mt-6 p-4 bg-slate-700 rounded-xl text-center">
            <h3 className="text-md font-bold text-green-300">Employment</h3>
            <p className="text-sm text-gray-200">P1 Games | Trusterlabs</p>
          </div>

          {/* Notice */}
          <p className="bg-yellow-500 text-black p-3 text-center rounded-md shadow-lg">
            🚧 This portfolio is under active maintenance. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;