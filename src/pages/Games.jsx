const gamesData = [
  {
    title: 'BugsVsBunnies',
    team: 'Team Kronos of CFL',
    description: 'Bugs Vs Bunnies is an engaging tower defense game...',
    image: 'https://img.itch.zone/aW1hZ2UvMjgzNDQ3NS8xNzIxNTE4Mi5qcGc=/original/6rl8uh.jpg',
    trailer: 'https://www.youtube.com/embed/BpwBTb_BDgY',
  },
  {
    title: 'RunesVsRobots',
    team : 'Team Freezer of BSL',
    description: 'This is a wonderful tower defense game (Sci-Fi)...',
    image: 'https://img.itch.zone/aW1nLzE4ODEzMTUxLnBuZw==/original/60PkJS.png',
    trailer: 'https://www.youtube.com/embed/Y4VPANNZZBA',
  },
  {
    title: 'License Master',
    team: 'Pulse of BSL',
    description: 'An educational driving simulation game...',
    image: 'https://img.itch.zone/aW1hZ2UvMzE5MTc4NS8xOTM2NjEzMy5qcGc=/original/rHtnvg.jpg',
    trailer: 'https://www.youtube.com/embed/fIKVIjys9qY',
  },
  {
    title: 'NanoCore',
    team: 'BitFinders of GameDev.tv',
    description: 'Tower defence game. Place towers during the build phase, spend Bytes to upgrade them during the attack phase, and defend the CPU from viruses!',
    image: 'https://img.itch.zone/aW1hZ2UvMzU3NTM4MS8yMTM0NDQ5MC5wbmc=/794x1000/qIlPrM.png',
    trailer: null,

  },
  {
    title: 'Torpedo',
    team: 'MUGWANEZA MANZI Audace',
    description: 'In the undiscovered sea you aim to sink all ships...',
    image: 'https://img.itch.zone/aW1hZ2UvMjgzNDk0Ny8xNjkzNzM5OS5qcGc=/original/63ZG5t.jpg',
    trailer: null, // No trailer
  },
  {
    title: 'Bake',
    description: 'Bake your cuisine and lounge',
    image: 'https://img.itch.zone/aW1hZ2UvMjgyMTkwOS8xNjg1NzQ4MC5wbmc=/original/FU72D2.png',
    trailer: null, // No trailer
  },
  {
    title: 'Ikinyoni Flarping Bird',
    team: 'MUGWANEZA MANZI Audace',
    description: 'Flary Bird follows Ikinyoni, a bold and adventurous bird navigating the vast landscapes of Mars. Players must flarp through the Martian skies while answering questions that challenge their knowledge of life in space.',
    image: 'https://img.itch.zone/aW1hZ2UvMzMzMzE3Ny8yMDQ1OTk5MC5wbmc=/original/fF%2FHCG.png', // Optional image or placeholder
    trailer: 'https://www.youtube.com/embed/9su6s9R5PWY',
  },
  {
    title: 'The Chase – Animation Showcase',
    team: 'MUGWANEZA MANZI Audace',
    description: 'A movie made with Unity — combining animation, storytelling, and game dev art.',
    image: 'https://i.ytimg.com/vi/xPTxwFbbbX4/maxresdefault.jpg',
    trailer: 'https://www.youtube.com/embed/xPTxwFbbbX4',
  },
];


const Games = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">🎮 My Game Creations</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {gamesData.map((game, index) => (
  <div
    key={index}
    className="bg-white text-gray-900 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={game.image}
        alt={game.title}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
    </div>
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-1">{game.title}</h2>
      {game.team && (
        <p className="text-sm text-gray-500 italic mb-2">by {game.team}</p>
      )}
      <p className="text-gray-700 text-sm mb-2">{game.description}</p>
      {game.trailer ? (
        <div className="aspect-video mb-2">
          <iframe
            className="w-full h-full rounded-xl"
            src={game.trailer}
            title={game.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="aspect-video bg-gray-200 flex items-center justify-center text-sm text-gray-600 rounded-xl mb-2">
          🎬 Trailer Coming Soon
        </div>
      )}
    </div>
  </div>
))}

        </div>
      </div>
    </div>
  );
};


export default Games;
