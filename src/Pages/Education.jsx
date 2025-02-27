const Journey = () => {
  const timelineData = [
    {
      title: "Bachelor of Computer Science Engineering",
      institution: "Sahakar Maharshi Shankarrao Mohite Patil Institute of Technology & Research",
      year: "Expected Graduation: 2025",
    },
    {
      title: "Higher Secondary Education (Diploma)",
      institution: "SVERI College Of Engineering, Pandharpur",
      year: "2022",
    },
    {
      title: "Secondary Education (10th)",
      institution: "Karmaveer Bhaurao Patil Krushi Vidyalaya & Jr. College devapur",
      year: "2019",
    },
  ];

  const achievements = [
    {
      title: "Certified React Developer",
      organization: "Udemy",
      year: "2023",
    },
    {
      title: "Hackathon Winner",
      organization: "TechFest 2022",
      year: "2022",
    },
    {
      title: "Open Source Contributor",
      organization: "GitHub",
      year: "2024",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-5xl font-bold text-white text-center pb-10">
        My <span className="text-[#3399ff]">Journey</span>
      </h1>

      <div className="w-full max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-[#3399ff]">
          <h2 className="text-white text-3xl font-bold pb-5">Education</h2>
          <div className="grid grid-cols-1 gap-6">
            {timelineData.map((item, index) => (
              <div key={index} className="p-5 rounded-lg bg-gray-700 shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.institution}</p>
                <p className="text-gray-400 text-sm">{item.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-[#ffcc00]">
          <h2 className="text-white text-3xl font-bold pb-5">Achievements</h2>
          <div className="grid grid-cols-1 gap-6">
            {achievements.map((item, index) => (
              <div key={index} className="p-5 rounded-lg bg-gray-700 shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.organization}</p>
                <p className="text-gray-400 text-sm">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
