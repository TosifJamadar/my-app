export default function Skills() {
  const skills = [
    { category: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS",] },
    { category: "Tools & Others", skills: ["Git & GitHub","Vercel", "Netlify"] },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-10">
      <h1 className="text-5xl font-bold text-white text-center pb-10">
        My <span className="text-[#3399ff]">Skills</span>
      </h1>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-10 px-6">
        {skills.map((skillSet, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <h2 className="text-2xl font-semibold text-white border-b-2 border-[#3399ff] pb-2 mb-4">
              {skillSet.category}
            </h2>
            <ul className="space-y-2">
              {skillSet.skills.map((skill, i) => (
                <li key={i} className="text-white text-lg flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#3399ff] rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
