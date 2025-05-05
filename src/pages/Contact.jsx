const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-700 text-white p-6">
      {/* Profile Image */}
      <div className="rounded-full shadow-lg overflow-hidden w-40 h-40 border-4 border-white mb-6 transform hover:scale-105 transition">
        <img src="manzi1.png" alt="Manzi Audace" className="object-cover w-full h-full" />
      </div>

      {/* Info */}
      <div className="text-center space-y-2 mb-6">
        <h1 className="text-2xl font-bold">MUGWANEZA MANZI Audace</h1>
        <p className="text-sm text-violet-200">Rwanda - Kigali</p>
      </div>

      {/* Contact Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center max-w-md w-full">
        <a href="mailto:mmaudace@gmail.com" className="bg-white text-indigo-800 py-2 px-4 rounded-full hover:bg-indigo-200 transition shadow">
          📧 Email
        </a>
        <a href="tel:+250787652137" className="bg-white text-indigo-800 py-2 px-4 rounded-full hover:bg-indigo-200 transition shadow">
          📞 Phone
        </a>
        <a href="https://github.com/MUGWANEZAMANZI" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-800 py-2 px-4 rounded-full hover:bg-indigo-200 transition shadow">
          🐱 GitHub
        </a>
        <a href="https://www.linkedin.com/in/mugwaneza-manzi-audace-b404671a6/" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-800 py-2 px-4 rounded-full hover:bg-indigo-200 transition shadow">
          💼 LinkedIn
        </a>
        <a href="https://stackoverflow.com/users/12441724/mugwaneza-manzi-audace" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-800 py-2 px-4 rounded-full hover:bg-indigo-200 transition shadow col-span-full">
          🧠 Stack Overflow
        </a>
      </div>
    </div>
  );
};

export default Contact;
