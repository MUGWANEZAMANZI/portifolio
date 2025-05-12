const webProjects = [
  {
    title: 'Agakurura',
    description: 'Agakurura is a tracking device that helps you monitor your belongings in real-time with live updates.',
    url: 'https://agakurura-production.up.railway.app/',
  },
  {
    title: 'Abunzi AI Assistant',
    description: 'A legal AI system built with Rubix ML and Livewire to support local mediators (Abunzi) in resolving community disputes. It types responses in real-time and stores predictions for legal reference.',
    url: 'https://abunzi-ai-assistant.vercel.app/', // Replace with actual URL if hosted
  },
];

const Web = () => {
  return (
    <div className="min-h-screen  from-gray-900 via-slate-800 to-gray-950 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">🌐 Web Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {webProjects.map((project, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
            <div className="relative">
              <iframe
                src={project.url}
                title={project.title}
                className="w-full h-64 border-b"
              />
            </div>
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-indigo-500 hover:underline"
              >
                View Live ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Web;
