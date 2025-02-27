import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-gray-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl mx- font-bold hover:text-[#3399ff] transition duration-300 cursor-pointer">PortFolio</h1>
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul className={`md:flex md:space-x-4 ${isOpen ? "block" : "hidden"}`}>
          <li><a href="/" className="text-white block text-xl p-2 hover:text-[#3399ff] transition duration-300">Home</a></li>
          <li><a href="/about" className="text-white block text-xl p-2 hover:text-[#3399ff] transition duration-300">About</a></li>
          <li><a href="/education" className="text-white block text-xl p-2 hover:text-[#3399ff] transition duration-300">Education </a></li>
          <li><a href="/skills" className="text-white block text-xl p-2 hover:text-[#3399ff] transition duration-300">Skills</a></li>
          <li><a href="/contact" className="text-white block text-xl p-2 hover:text-[#3399ff] transition duration-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
