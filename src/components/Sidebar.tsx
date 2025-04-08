import Image from "next/image";
import React, { useState, useEffect } from "react";
import ImgSelf from "./selfImg.png";
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const Sidebar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    {
      icon: <FaYoutube className="w-5 h-5" />,
      url: "https://www.youtube.com",
      label: "YouTube",
      color: "hover:text-red-600",
    },
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/harshank-kanungo-a4b178251/",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      url: "https://github.com/harshankgit",
      label: "GitHub",
      color: "hover:text-gray-800",
    },
  ];

  const contactInfo = [
    {
      icon: <GoLocation className="w-5 h-5" />,
      text: "Ahmedabad, India",
      type: "location",
      action: () => window.open("https://maps.google.com/?q=Ahmedabad,India"),
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      text: "harshankkanungo259@gmail.com",
      type: "email",
      action: () => window.open("mailto:harshankkanungo259@gmail.com"),
    },
    {
      icon: <FaPhoneAlt className="w-5 h-5" />,
      text: "8109774968 / 8965992035",
      type: "phone",
      action: () => window.open("tel:8109774968"),
    },
  ];

  const handleContactClick = (contact: typeof contactInfo[0]) => {
    if (contact.action) {
      try {
        contact.action();
      } catch (error) {
        console.error("Error handling contact action:", error);
      }
    }
  };

  return (
    <aside className={`relative w-full max-w-sm mx-auto transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Background Image Container */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <Image
          src={ImgSelf}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-10 blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/95 dark:from-gray-900/80 dark:to-gray-900/95" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 p-4 space-y-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/30">
        {/* Profile Image */}
        <div className={`relative flex justify-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* First spinner */}
            <div className="w-32 sm:w-36 h-32 sm:h-36 border-4 border-t-green-500 border-r-transparent border-b-green-500 border-l-transparent rounded-full animate-spin-slow" />
            {/* Second spinner (opposite direction) */}
            <div className="absolute w-32 sm:w-36 h-32 sm:h-36 border-4 border-l-blue-500 border-t-transparent border-r-blue-500 border-b-transparent rounded-full animate-reverse-spin" />
          </div>
          <div className="relative w-28 h-28 overflow-hidden rounded-full ring-4 ring-green-500 transform hover:scale-105 transition-all duration-300 hover:shadow-glow">
            <Image
              src={ImgSelf}
              alt="Profile"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
              priority
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className={`text-center space-y-2 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
          <h3 className="text-2xl sm:text-3xl font-bold">
            <span className="text-green-500 inline-block animate-slide-right">
              Harshank
            </span>{" "}
            <span className="dark:text-white inline-block animate-slide-left">
              Kanungo
            </span>
          </h3>
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-green-50/80 to-blue-50/80 dark:from-green-900/80 dark:to-blue-900/80 rounded-full backdrop-blur-sm animate-fade-in">
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
              Frontend Developer
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 space-y-2 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
          {contactInfo.map((contact, index) => (
            <button
              key={index}
              onClick={() => handleContactClick(contact)}
              className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-green-50/50 dark:hover:bg-green-900/30 group transition-all duration-300 hover:translate-x-1"
              aria-label={`Contact via ${contact.type}`}
            >
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-green-500 to-blue-500 rounded-lg text-white transform group-hover:scale-110 transition-all duration-300 group-hover:animate-pulse-subtle">
                {contact.icon}
              </div>
              <p className="flex-grow text-sm text-gray-600 dark:text-gray-300 text-left font-medium truncate">
                {contact.text}
              </p>
            </button>
          ))}
        </div>

        {/* Social Links */}
        <div className={`flex justify-center items-center gap-4 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hover:-translate-y-1 transition-all duration-300"
              aria-label={social.label}
            >
              <div className="p-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg text-white transform transition-all duration-300 shadow-md hover:shadow-lg group-hover:shadow-glow-sm">
                {social.icon}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </div>
            </a>
          ))}
        </div>

        {/* Email Button */}
        <button
          onClick={() => handleContactClick(contactInfo[1])}
          className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-medium 
                   shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300
                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 relative overflow-hidden
                   transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          aria-label="Send email"
          style={{ transitionDelay: '500ms' }}
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/50 to-green-500/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          <div className="relative z-10 flex items-center gap-2 email-bounce">
            <FaEnvelope className="w-4 h-4" />
            <span>Email me</span>
          </div>
        </button>
      </div>

      {/* CSS for custom animations */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes slide-right {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-left {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-subtle {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @keyframes email-bounce {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-reverse-spin {
          animation: reverse-spin 8s linear infinite;
        }
        
        .animate-slide-right {
          animation: slide-right 0.8s ease-out forwards;
        }
        
        .animate-slide-left {
          animation: slide-left 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
        
        .email-bounce:hover {
          animation: email-bounce 1s ease-in-out infinite;
        }
        
        .shadow-glow {
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.6);
        }
        
        .shadow-glow-sm {
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;