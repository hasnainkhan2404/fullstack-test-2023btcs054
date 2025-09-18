import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white overflow-hidden">
    <div
      className="absolute inset-0 opacity-50"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
      }}
      aria-hidden="true"
    ></div>
    <div className="hidden sm:block absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
    <div className="hidden sm:block absolute bottom-0 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-purple-600/10 rounded-full blur-3xl"></div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-black to-gray-600 rounded-xl flex items-center justify-center text-white text-sm">
              OH
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              OneHealth
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Building amazing web experiences with modern technology and
            innovative solutions that transform digital landscapes.
          </p>
          <div className="flex space-x-4">
            {["twitter", "linkedin", "github"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-indigo-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                <div className="text-gray-300 text-sm capitalize">{social}</div>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-white relative">
            Quick Links
            <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-transparent"></div>
          </h4>
          <ul className="space-y-4">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Contact", href: "/contact" },
              { name: "Blog", href: "/blog" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
                >
                  <span className="w-1 h-1 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    {link.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-white relative">
            Get In Touch
            <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
          </h4>
          <div className="space-y-4">
            {[
              {
                icon: "✉️",
                text: "contact@onehealth.com",
                href: "mailto:contact@onehealth.com",
                gradient: "from-blue-400 to-cyan-400",
              },
              {
                icon: "📞",
                text: "+1 (555) 123-4567",
                href: "tel:+15551234567",
                gradient: "from-green-400 to-emerald-400",
              },
              {
                icon: "📍",
                text: "123 Main Street, City, State 12345",
                href: "#",
                gradient: "from-orange-400 to-red-400",
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 group"
              >
                <div
                  className={`w-10 h-10 bg-gradient-to-r ${contact.gradient} rounded-lg flex items-center justify-center text-sm group-hover:scale-110 transition-transform duration-300`}
                >
                  {contact.icon}
                </div>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  {contact.text}
                </span>
              </a>
            ))}
          </div>
          <div className="mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h5 className="text-sm font-semibold text-white mb-2">
              Stay Updated
            </h5>
            <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-black to-gray-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6 text-gray-400 text-sm text-center md:text-left">
            <p className="w-full md:w-auto">&copy; 2024 OneHealth. All rights reserved.</p>
            <span className="hidden md:block">•</span>
            <a
              href="/privacy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="hidden md:block">•</span>
            <a
              href="/terms"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Made with</span>
            <span className="text-red-400">❤️</span>
            <span>by OneHealth Team</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;