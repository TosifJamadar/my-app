const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-gray-900 p-10 rounded-2xl shadow-2xl text-white">
        <h1 className="text-4xl font-bold text-center mb-8">Get In <span className="text-[#3399ff]">Touch</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="space-y-5">
            <input type="text" placeholder="Your Name" className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3399ff]" />
            <input type="email" placeholder="Your Email" className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3399ff]" />
            <textarea placeholder="Your Message" rows="5" className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3399ff]"></textarea>
            <button type="submit" className="w-full bg-[#3399ff] hover:bg-[#267acc] text-white font-semibold py-3 rounded-lg transition duration-300">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
