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
      description: "A platform to connect pet adopters with rescue shelters, featuring search, profiles, and adoption processes.",
      image: profilePic,
    },
    {
      title: "E-commerce Store",
      description: "stores products that are available for customers to purchase and manage customers",
      image: profilePic2,
    },
    {
      title: "Spicy",
      description: " stores products that are available for customers to purchase and manage customers ",
      image: profilePic3,
    },
    {
      title: "Portofilo",
      description: " This is a personal portfolio website built to showcase my skills, projects. It includes a portfolio website",
      image: profilePic4,
    },
    {
      title: "G-11 Olympic",
      description: "This project aims to provide comprehensive information about the Olympic Games, including historical data, upcoming events, athlete profiles.",
      image: profilePic5,
    },
    {
      title: "Calculator",
      description: "I have created a simple calculator using HTML, CSS. This Calculator performs simple mathematical calculations like Addition, subtraction, multiplication, division.",
      image: profilePic6,
    },
    {
      title: "Search Short filter",
      description: " I have created a simple search filter using HTML,CSS,javascript, React.js and show the search results using JavaScript and React.js. and show the filte expression",
      image: profilePic7,
    },
    {
      title: "Tic Tac Toe ",
      description: "Tic Tac Toe built using HTML,CSS,JS.Players take turns to mark X and O on the grid, with automatic win detection the option to reset or start new game.",
      image: profilePic8,
    },
    {
      title: "Bulb Toggler",
      description: "Show buttons with name of you favourite actors and clicking on buttons show the respective actor's image  instead  of the actor's name and name of the actor. ",
      image: profilePic9,
    },
    {
      title: "Match Tracker",
      description: "Match Tracker is a performance analysis software solution that provides teams with pre-match planning, live match analysis and post-match review. .",
      image: profilePic10,
    },
    {
      title: "Text Function",
      description: " the text function that is used to convert the text into upper case and lower case,word count and character count for each character ",
      image: profilePic11,
    }

  ];

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-6 flex flex-col items-center">
      <h1 className="text-white text-5xl font-bold text-center pb-10">
        About <span className="text-[#3399ff]">Projects</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {ProjectsDetail.map((item, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg w-80 transition-transform transform hover:scale-105 cursor-pointer">
            <img className="w-full h-48 object-cover rounded-2xl" src={item.image} alt="Project" />
            <h2 className="text-white text-2xl font-bold mt-4 hover:text-[#3399ff]">{item.title}</h2>
            <p className="text-gray-300 mt-2 text-sm">{item.description}</p>
            <button className="mt-4 w-full py-2 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;