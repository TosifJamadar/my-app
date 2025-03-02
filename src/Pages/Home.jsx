const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center bg-gray-900 items-center text-center relative overflow-hidden">  
      {/* Content */}
      <div className="relative z-10 max-w-3xl px-8">
        <h1 className="text-white text-7xl font-extrabold drop-shadow-lg leading-tight">
          Welcome to My <span className="text-blue-500">Portfolio</span>
        </h1>
        <p className="text-gray-300 text-2xl font-medium mt-4 tracking-wide">
          Frontend Developer | React | Tailwind CSS
        </p>
        
        <p className="text-gray-400 text-lg mt-6 leading-relaxed">
          Passionate frontend developer specializing in React and Tailwind CSS. Available for freelance projects and full-time opportunities. Let’s connect and build something great together!
        </p>
        
        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-6">
          <button className="text-white py-4 px-10 text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl cursor-pointer">
            Hire Me
          </button>
          <button className="text-white py-4 px-10 text-lg font-semibold bg-gradient-to-r from-gray-800 to-gray-600 rounded-full shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl cursor-pointer">
            Lets Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;