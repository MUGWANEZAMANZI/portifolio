const gamesData = [
  {
    title: 'Agakurura',
    description: 'Agakurua is a tracking device that helps you to track your device',
    url: 'https://agakurura-production.up.railway.app/',
  },
];

const Web = () => {
  return (
    <>
    <div className="container mx-auto p-4"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {gamesData.map((game, index) => (
      <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
        <iframe src={game.url} title={game.title} className="w-full h-48" />
        <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{game.title}</h2>
        <p className="text-gray-700">{game.description}</p>
        </div>
      </div>
      ))}
    </div>
    </>
  );
};

export default Web;
