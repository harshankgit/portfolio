import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

const ResumePage = () => {
  const [showExperience, setShowExperience] = useState(true);
  const [showEducation, setShowEducation] = useState(true);
  const [showLanguage, setShowLanguage] = useState(true);
  const [showCertificates, setShowCertificates] = useState(true);

  const personalDetails = {
    name: "Harshank Kanungo",
    contact: {
      phone: ["+91 8109774968", "+91 8965992035"],
      email: "harshankkanungo259@gmail.com",
      website: "harshankkanungo.com",
      address: "Narol Ahmedabad, Gujarat 380001",
    },
    profile:
      "With over 1.4+ years of professional experience, including a 06-month internship and 10+ months of hands-on work on real-time projects at IndiaNic Infotech Limited, where I am currently employed, I am eager to further advance my career.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Redux",
      "Bootstrap",
      "GitHub",
      "GitLab",
      "Vercel",
    ],
    education: [
      {
        degree: "B.Tech Computer Science",
        institution: "Medicaps University, Indore , MP",
        duration: "2020 - 2024",
        grade: "CGPA: 8.76",
      },
      {
        degree: "Board Of Intermediate Institude",
        institution: "S.V.M Higher Secondary, Khandwa, MP",
        duration: "2019 - 2020",
        grade: "77%",
      },
      {
        degree: "Board Of Secondary Institude",
        institution: "S.V.M Higher Secondary, Khandwa , MP",
        duration: "2017 - 2018",
        grade: "81.40%",
      },
    ],
    experience: [
      {
        role: "Frontend Developer",
        company: "IndiaNic Infotech Limited",
        duration: "04/2024 - Present",
        description:
          "Gained real-time experience in React.js, working on dynamic web applications and enhancing frontend capabilities.",
      },
    
      {
        role: "Frontend Development Intern",
        company: "BasketHunt Pvt Ltd",
        duration: "09/2023 - 03/2024",
        description:
          "Developed skills in HTML, CSS, JavaScript, React during BasketHunt Pvt Ltd internship.",
      },
    ],
  };

  const SectionHeader = ({ title, isOpen, onClick }: { title: string; isOpen: boolean; onClick: () => void }) => (
    <div
      onClick={onClick}
      className="flex items-center justify-between cursor-pointer group mb-4"
    >
      <h2 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
        {title}
      </h2>
      {isOpen ? (
        <FaChevronUp className="text-gray-400 group-hover:text-green-600 transition-colors" />
      ) : (
        <FaChevronDown className="text-gray-400 group-hover:text-green-600 transition-colors" />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-t-2xl shadow-xl p-8 mb-6 transform hover:scale-[1.02] transition-all duration-300 border-b-4 border-green-500">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
            {personalDetails.name}
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {personalDetails.profile}
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <FaPhone className="text-green-600 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-gray-700">{personalDetails.contact.phone.join(", ")}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
                 onClick={() => window.open("mailto:" + personalDetails.contact.email)}>
              <FaEnvelope className="text-green-600 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-700">{personalDetails.contact.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <FaGlobe className="text-green-600 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Website</p>
                <a href="https://www.linkedin.com/in/harshank-kanungo-a4b178251/" 
                   className="text-gray-700 hover:text-green-600 transition-colors">
                  {personalDetails.contact.website}
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <FaMapMarkerAlt className="text-green-600 text-xl" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-700">{personalDetails.contact.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {personalDetails.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-green-50 hover:text-green-700 hover:scale-105 transform transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 hover:shadow-2xl transition-shadow duration-300">
          <SectionHeader
            title="Work Experience"
            isOpen={showExperience}
            onClick={() => setShowExperience(!showExperience)}
          />
          {showExperience && (
            <div className="space-y-6">
              {personalDetails.experience.map((exp, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-100 rounded-xl hover:shadow-md transition-all duration-300 border-l-4 border-green-500"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-green-600">{exp.role}</h3>
                    <span className="text-sm text-gray-500">{exp.duration}</span>
                  </div>
                  <p className="text-lg text-gray-800 mb-2">{exp.company}</p>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Education Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 hover:shadow-2xl transition-shadow duration-300">
          <SectionHeader
            title="Education"
            isOpen={showEducation}
            onClick={() => setShowEducation(!showEducation)}
          />
          {showEducation && (
            <div className="space-y-6">
              {personalDetails.education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-100 rounded-xl hover:shadow-md transition-all duration-300 border-l-4 border-green-500"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                  <p className="text-lg text-gray-700 mb-1">{edu.institution}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">{edu.duration}</span>
                    <span className="text-green-600 font-semibold">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Languages Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 hover:shadow-2xl transition-shadow duration-300">
          <SectionHeader
            title="Languages"
            isOpen={showLanguage}
            onClick={() => setShowLanguage(!showLanguage)}
          />
          {showLanguage && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors border-l-4 border-green-500">
                <h3 className="font-semibold text-gray-800">English</h3>
                <p className="text-gray-600">Professional</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors border-l-4 border-green-500">
                <h3 className="font-semibold text-gray-800">Hindi</h3>
                <p className="text-gray-600">Native</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors border-l-4 border-green-500">
                <h3 className="font-semibold text-gray-800">Gujarati</h3>
                <p className="text-gray-600">Intermediate</p>
              </div>
            </div>
          )}
        </div>

        {/* Certificates Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 hover:shadow-2xl transition-shadow duration-300">
          <SectionHeader
            title="Certificates"
            isOpen={showCertificates}
            onClick={() => setShowCertificates(!showCertificates)}
          />
          {showCertificates && (
            <div className="space-y-6">
              <div className="p-6 bg-gray-100 rounded-xl hover:shadow-md transition-all duration-300 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Frontend Web Development Using JavaScript and React Bootcamp</h3>
                <p className="text-lg text-gray-700 mb-1">Institution: Bootcamp</p>
                <p className="text-gray-500">Date: 2023</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-xl hover:shadow-md transition-all duration-300 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Instagram Clone Using HTML & CSS Bootcamp</h3>
                <p className="text-lg text-gray-700 mb-1">Institution: Bootcamp</p>
                <p className="text-gray-500">Date: 2023</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-xl hover:shadow-md transition-all duration-300 border-l-4 border-green-500">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Frontend Training from Open Weaver</h3>
                <p className="text-lg text-gray-700 mb-1">Institution: Open Weaver</p>
                <p className="text-gray-500">Date: 2023</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
