const webProjects = [
  {
    title: 'Mbaza',
    description:
      'Live project site.',
    url: 'https://mbaza.kwartisans.com/',
  },
  {
    title: 'Dorm Link',
    description:
      'Live project site.',
    url: 'https://dorm.kwartisans.com/',
  },
  {
    title: 'Souriant',
    description:
      'Live project site.',
    url: 'https://souriant.kwartisans.com/',
  },
];

const mobileApps = [
  {
    title: 'Dorm Link',
    description:
      'Find affordable dorms and hostels in Rwanda with maps and listings.',
    platform: 'Android (Google Play)',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.kigaliwebartisans.dormlink',
  },
  {
    title: 'Mbaza AI',
    description:
      'AI legal assistant providing guidance based on Rwandan laws and procedures.',
    platform: 'Android (Google Play)',
    storeUrl: 'https://play.google.com/store/apps/details?id=com.kigaliwebartisans.mbazaai',
  },
];

const Web = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950 py-10 px-4">
      {/* Web Projects Section */}
      <h1 className="text-4xl font-bold text-center text-indigo-600 mb-10">Web Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {webProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden"
          >
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

      {/* Mobile Apps Section */}
      <h1 className="text-4xl font-bold text-center text-green-600 mt-20 mb-10">Mobile Apps</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {mobileApps.map((app, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-green-700 mb-2">{app.title}</h2>
              <p className="text-gray-600 mb-2">{app.description}</p>
              <p className="text-sm text-gray-500 mb-3">{app.platform}</p>
              {app.storeUrl !== '#' ? (
                <a
                  href={app.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-green-500 hover:underline"
                >
                  View on Store ↗
                </a>
              ) : (
                <span className="inline-block text-sm text-gray-400 italic">
                  Coming to App Store soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Web;
