import Image from "next/image";
import React from "react";
import ImgSelf from "./selfImg.png";
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const Sidebar = () => {
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
    <aside className="relative w-full max-w-sm mx-auto">
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
        <div className="relative flex justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 sm:w-36 h-32 sm:h-36 border-4 border-t-green-500 border-r-transparent border-b-green-500 border-l-transparent rounded-full animate-spin-slow" />
          </div>
          <div className="relative w-28 h-28 overflow-hidden rounded-full ring-4 ring-green-500 transform hover:scale-105 transition-all duration-300">
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
        <div className="text-center space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold">
            <span className="text-green-500">Harshank</span>{" "}
            <span className="dark:text-white">Kanungo</span>
          </h3>
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-green-50/80 to-blue-50/80 dark:from-green-900/80 dark:to-blue-900/80 rounded-full backdrop-blur-sm">
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
              Frontend Developer
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 space-y-2">
          {contactInfo.map((contact, index) => (
            <button
              key={index}
              onClick={() => handleContactClick(contact)}
              className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-green-50/50 dark:hover:bg-green-900/30 group transition-all duration-300"
              aria-label={`Contact via ${contact.type}`}
            >
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gradient-to-br from-green-500 to-blue-500 rounded-lg text-white transform group-hover:scale-110 transition-all duration-300">
                {contact.icon}
              </div>
              <p className="flex-grow text-sm text-gray-600 dark:text-gray-300 text-left font-medium truncate">
                {contact.text}
              </p>
            </button>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={social.label}
            >
              <div className="p-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg text-white transform hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg">
                {social.icon}
              </div>
            </a>
          ))}
        </div>

        {/* Email Button */}
        <button
          onClick={() => handleContactClick(contactInfo[1])}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-medium 
                   shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300
                   focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          aria-label="Send email"
        >
          <FaEnvelope className="w-4 h-4" />
          <span>Email me</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
