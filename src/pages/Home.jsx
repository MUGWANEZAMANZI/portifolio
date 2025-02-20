const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen p-4">
      {/* Image Section */}
      <div className="md:w-1/2 w-full flex justify-center p-2">
        <img src="manzi1.png" alt="logo" className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-lg shadow-md" />
      </div>

      {/* Info Section */}
      <div className="md:w-1/2 w-full flex flex-col items-center text-center md:text-left p-4">
        <h1 className="text-2xl font-bold">MUGWANEZA MANZI Audace</h1>
        <p className="text-gray-600">
          <small>Game Development</small> | <small>SOC Analyst</small> | <small>Web Developer</small>
        </p>

        {/* Game Development Table */}
        <div className="w-full overflow-x-auto my-4">
          <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
            <caption className="font-semibold text-lg">Game Development</caption>
            <thead>
              <tr className="border bg-gray-950">
                <th className="p-2">Game</th>
                <th className="p-2">Role</th>
                <th className="p-2">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="p-2">BugsVsBunnies</td>
                <td className="p-2">Level Designer</td>
                <td className="p-2 text-blue-800"><a href="https://nizitowns.itch.io/bugs-vs-bunnies-td">BugsVsBunnies</a></td>
              </tr>
              <tr className="border">
                <td className="p-2">RunesVsRobots</td>
                <td className="p-2">Lead Game Designer</td>
                <td className="p-2 text-blue-800"><a href="https://chiferito.itch.io/project-tower">RunesVsRobots</a></td>
              </tr>
              <tr className="border">
                <td className="p-2">License Master</td>
                <td className="p-2">Team Leader/Designer</td>
                <td className="p-2 text-blue-800"><a href="https://mugwanezamanzi.itch.io/license-master">License Master</a></td>
              </tr>
              <tr className="border">
                <td className="p-2">{"Let's Flarp"}</td>
                <td className="p-2">Game developer</td>
                <td className="p-2 text-blue-800"><a href="https://mugwanezamanzi.itch.io/lets-flarp">{"Let's Flarp"}</a></td>
                </tr>
            </tbody>
          </table>
        </div>

        {/* Web Development Table */}
        <div className="w-full overflow-x-auto my-4">
          <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
            <caption className="font-semibold text-lg">Web Development</caption>
            <thead>
              <tr className="border bg-gray-950">
                <th className="p-2">Project</th>
                <th className="p-2">Role</th>
                <th className="p-2">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="p-2">Agakurura Tracker</td>
                <td className="p-2">Full Stack</td>
                <td className="p-2 text-blue-800"><a href="https://agakurura-production.up.railway.app/">Tracking Device</a></td>
              </tr>
              <tr className="border">
                <td className="p-2">React Class Project</td>
                <td className="p-2">Frontend</td>
                <td className="p-2 text-blue-800"><a href="https://github.com/MUGWANEZAMANZI/React.git">Class Project</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Cyber Security Table */}
        <div className="w-full overflow-x-auto my-4">
          <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
            <caption className="font-semibold text-lg">Cyber Security</caption>
            <thead>
              <tr className="border bg-gray-950">
                <th className="p-2">Operation</th>
                <th className="p-2">Role</th>
                <th className="p-2">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="p-2">Checker</td>
                <td className="p-2">SOC Analyst</td>
                <td className="p-2 text-blue-800"><a href="https://agakurura-production.up.railway.app/">Tracking Device</a></td>
              </tr>
              <tr className="border">
                <td className="p-2">Log Analyzer</td>
                <td className="p-2">Network Researcher</td>
                <td className="p-2"></td>
              </tr>
              <tr className="border">
                <td className="p-2">Net Crafts</td>
                <td className="p-2">Intro to Cyber</td>
                <td className="p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Job Section */}
        <div className="flex items-center justify-center my-4">
          <img src="job.png" className="w-10 h-auto" alt="Job" />
          <pre className="ml-2 text-gray-700">P1 Games | Trusterlabs</pre>
        </div>

        {/* Maintenance Notice */}
        <p className="my-6 p-4 border bg-slate-500 text-white rounded-md shadow-md text-center">
          Website under maintenance
        </p>
      </div>
    </div>
  );
};

export default Home;
