import profilePic from "../assets/Project1.png";
import profilePic2 from "../assets/Project2.png";
import profilePic3 from "../assets/Project6.png";
import profilePic4 from "../assets/Project8.png";
import profilePic5 from "../assets/Project3.png";
import profilePic6 from "../assets/Project7.png";
import profilePic7 from "../assets/Project5.png";
import profilePic8 from "../assets/Project11.png";
import profilePic9 from "../assets/Project9.png";
import profilePic10 from "../assets/Project4.png";
import profilePic11 from "../assets/Project10.png";

const Project = () => {
  const ProjectsDetail = [
    {
      title: "Pet Adoption Website",
      description: "A platform to connect pet adopters with rescue shelters, featuring search, profiles, and adoption processes",
      image: profilePic,
      githubLink: "https://github.com/TosifJamadar/ICP9-G2-React-Project",
    },
    {
      title: "E-commerce Store",
      description: "Stores products that are available for customers to purchase and manage customers",
      image: profilePic2,
      githubLink: "https://github.com/TosifJamadar/icp9.0-javascript-group-project-3",
    },
    {
      title: "Spicy",
      description: "Stores products that are available for customers to purchase and manage customers",
      image: profilePic3,
      githubLink: "https://github.com/TosifJamadar/Spicy",
    },
    {
      title: "Portfolio",
      description: "This is a personal portfolio website built to showcase my skills and projects.",
      image: profilePic4,
      githubLink: "https://github.com/TosifJamadar/Portfolio",
    },
    {
      title: "G-11 Olympic",
      description: "Provides comprehensive information about the Olympic Games, including historical data, upcoming events, and athlete profiles.",
      image: profilePic5,
      githubLink: "https://github.com/TosifJamadar/icp9.0-html-css-group-project-2",
    },
    {
      title: "Calculator",
      description: "A simple calculator performing basic mathematical operations like addition, subtraction, multiplication, and division. .",
      image: profilePic6,
      githubLink: "https://github.com/TosifJamadar/calculator",
    },
    {
      title: "Search Short Filter",
      description: "Search Short Filter built with HTML, CSS and JavaScript and React.js in that to search the any person and use the filte",
      image: profilePic7,
      githubLink: "https://github.com/yourusername/search-filter",
    },
    {
      title: "Tic Tac Toe",
      description: "The game built using html,css,js. Players to mark X and O on the grid, with automatic win detection the option to reset or start a new game. ",
      image: profilePic8,
      githubLink: "https://github.com/TosifJamadar/Tic-Tac-Toe",
    },
    {
      title: "Bulb Toggler",
      description: "bulb Toggler game built with HTML, CSS and JavaScript and built with JavaScript plugins.",
      image: profilePic9,
      githubLink: "https://github.com/TosifJamadar/Assignment-28",
    },
    {
      title: "Match Tracker",
      description: " Match Tracker game built with HTML, CSS, and JavaScript and to match against the to palyer game",
      image: profilePic10,
      githubLink: "https://github.com/TosifJamadar/Match-Tracker",
    },
    {
      title: "Text Function",
      description: "this game build with HTML, CSS, and JavaScript in that game to convert the text in upper case and lower case",
      image: profilePic11,
      githubLink: "https://github.com/TosifJamadar/Text-Function",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-6 flex flex-col items-center">
      <h1 className="text-white text-5xl font-bold text-center pb-10">
        About <span className="text-[#3399ff]">Projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {ProjectsDetail.map((item, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80 transition-transform transform hover:scale-105 cursor-pointer">
            <img className="w-full h-48 object-cover rounded-2xl" src={item.image} alt={item.title} />
            <h2 className="text-white text-2xl font-bold mt-4 hover:text-[#3399ff]">{item.title}</h2>
            <p className="text-gray-300 mt-2 text-sm">{item.description}</p>
            <a 
              href={item.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 block w-full py-2 text-lg font-semibold text-white text-center bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
