export default function About() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-10 px-6">
      <h1 className="text-5xl font-bold text-white text-center mb-6">
        About <span className="text-[#3399ff]">Me</span>
      </h1>
      
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg max-w-3xl w-full flex flex-col items-center">
        <img
          className="w-36 h-36 rounded-full border-4 border-[#3399ff] shadow-lg transform hover:scale-105 transition duration-300"
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
          alt="Profile Pic"
        />
        
        <h2 className="text-3xl font-semibold text-white mt-4">Frontend Developer</h2>
        
        <p className="text-lg text-gray-300 text-center mt-4 leading-relaxed">
          Passionate about building responsive, interactive web applications with modern frontend technologies. 
          Experienced in React, Tailwind CSS, and JavaScript. Always eager to learn and improve my skills.
        </p>
        
        <button className="text-white py-4 px-10 my-5 text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl">
          Read More
        </button>
      </div>
    </div>
  );
}
