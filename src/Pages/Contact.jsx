import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-gray-800 p-10 rounded-2xl shadow-2xl text-white">
        <h1 className="text-4xl font-bold text-center mb-8">Get In <span className="text-[#3399ff]">Touch</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="space-y-5">
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3399ff]" />
            <input type="email" placeholder="Your Email" className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3399ff]" />
            <textarea placeholder="Your Message" rows="5" className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3399ff]"></textarea>
            <button type="submit" className="w-full bg-[#3399ff] hover:bg-[#267acc] text-white font-semibold py-3 rounded-lg transition duration-300 cursor-pointer">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 flex flex-col justify-center">
            <div className="flex items-center space-x-4">
              <span className="text-2xl">📍</span>
              <div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-gray-400">A/P Mhaswad Tal-Man Dist-Satara 415509</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl">📞</span>
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-400">8421886407</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-2xl">📧</span>
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-400">tousifjamadar@52gmail.com</p>
              </div>
            </div>
            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mt-6">
              <a href="https://www.facebook.com/share/12LWTbLdcz4/" target="_blank" rel="noopener noreferrer" className="text-[#3399ff] text-2xl hover:text-[#267acc]"><Facebook /></a>
              <a href="https://x.com/Tosif4141458?t=Zf1PyR_kks-SM7sJrY5ZEw&s=09" target="_blank" rel="noopener noreferrer" className="text-[#3399ff] text-2xl hover:text-[#267acc]"><Twitter /></a>
              <a href="https://www.instagram.com/tosif_jamadar6407/profilecard/?igsh=MWsycGZ0N3V6MWw1aA==" target="_blank" rel="noopener noreferrer" className="text-[#3399ff] text-2xl hover:text-[#267acc]"><Instagram /></a>
              <a href="https://www.linkedin.com/in/tosif-jamadar-4745a3313/" target="_blank" rel="noopener noreferrer" className="text-[#3399ff] text-2xl hover:text-[#267acc]"><Linkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
