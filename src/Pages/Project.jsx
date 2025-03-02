import profilePic from "../assets/Project1.png"; 
const Project = ()=> {
  const ProjectsDetail = [
    {
      title: "Pet Adoption Website",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis soluta labore excepturi fugit aspernatur eveniet nesciunt, esse placeat ex libero error atque",
    },
  ]
  return (
    <div className="bg-gray-900 h-screen">
      <h1 className="text-white text-5xl font-bold text-center py-7">About <span className="text-[#3399ff]">Projects</span></h1>

      <div className="h-[400px] w-[300px]  bg-gray-800 mx-20 my-10 rounded-2xl ">
        {ProjectsDetail.map((item, index) => (
          <div key={index}  className="">
          <img className="h-[200px] w-[300px] rounded-2xl px-2 py-2 hover:scale-105 transition duration-300 cursor-pointer" src={profilePic}  alt="Project" />
          <h1 className="text-white hover:text-[#3399ff] text-2xl font-bold px-2 cursor-pointer">{item.title}</h1>
          <p className="text-white px-2 text-sm">{item.Description}</p>
          <button className="text-white flex py-2 px-10 my-5 mx-auto text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl cursor-pointer">
            Read More
          </button>
          </div>  
        ))}
      </div>
    </div>
  )
}
export default Project;
