
const Games = () => {
  return (
    <div>
      <h1>My games</h1>
      <div>
        
        <table className="table-auto border-collapse border border-gray-400 w-full celspace=5 cellpading=5 text-xl">
          <thead>
            <tr className='border'>
              <th>Game</th>
              <th>Description</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border'>
              <td>BugsVsBunnies</td>
              <td>Bugs Vs Bunnies is an engaging tower defense game where players must protect their crops from waves of invading bugs. Strategically place defensive towers to fend off these pests and ensure your harvest remains untouched.</td>
              <td><img src="https://img.itch.zone/aW1hZ2UvMjgzNDQ3NS8xNzIxNTE4Mi5qcGc=/original/6rl8uh.jpg" className="w-96"/></td>
            </tr>
            <tr className="border">
              <td>RunesVsRobots</td>
              <td>This is a wonderful tower defense game (Sci-Fi). defend two maps, setuup your defenses, defeat your enemies. </td>
              <td><img src="https://img.itch.zone/aW1nLzE4ODEzMTUxLnBuZw==/original/60PkJS.png" className="w-96"/>
              </td>
            </tr>
            <tr className="border">
              <td>License master</td>
              <td>icense Master is an educational driving simulation game created by Team Pulse of The Blue Square Legion. The game is designed to replicate traffic exams, challenging players to earn licenses by mastering the rules of the road.</td>
            </tr>
            
            
          </tbody>
        </table> </div>
    </div>
  );
};

export default Games;