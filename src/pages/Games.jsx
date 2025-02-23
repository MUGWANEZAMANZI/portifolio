const gamesData = [
  {
    title: 'BugsVsBunnies',
    description: 'Bugs Vs Bunnies is an engaging tower defense game where players must protect their crops from waves of invading bugs. Strategically place defensive towers to fend off these pests and ensure your harvest remains untouched.',
    image: 'https://img.itch.zone/aW1hZ2UvMjgzNDQ3NS8xNzIxNTE4Mi5qcGc=/original/6rl8uh.jpg',
  },
  {
    title: 'RunesVsRobots',
    description: 'This is a wonderful tower defense game (Sci-Fi). Defend two maps, set up your defenses, defeat your enemies.',
    image: 'https://img.itch.zone/aW1nLzE4ODEzMTUxLnBuZw==/original/60PkJS.png',
  },
  {
    title: 'License Master',
    description: 'License Master is an educational driving simulation game created by Team Pulse of The Blue Square Legion. The game is designed to replicate traffic exams, challenging players to earn licenses by mastering the rules of the road.',
    image: 'https://img.itch.zone/aW1hZ2UvMzE5MTc4NS8xOTM2NjEzMy5qcGc=/original/rHtnvg.jpg', // Replace with actual image URL
  },
  {
    title: 'Torpedo',
    description: 'In the undiscovered sea you aim wasting all ships trying to cross your region.No one shall survive.',
    image: 'https://img.itch.zone/aW1hZ2UvMjgzNDk0Ny8xNjkzNzM5OS5qcGc=/original/63ZG5t.jpg'
  },
  {
    title: 'Bake',
    description: 'Bake your cuisine and lounge',
    image: 'https://img.itch.zone/aW1hZ2UvMjgyMTkwOS8xNjg1NzQ4MC5wbmc=/original/FU72D2.png',
  }
];

const Games = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {gamesData.map((game, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{game.title}</h2>
              <p className="text-gray-700">{game.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
