import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About  from "./Pages/About";
import Education from "./Pages/Education";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App; 