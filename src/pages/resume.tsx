import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

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
      website: "www.harshankkanungo.com",
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

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 py-10">
      <div className="max-w-5xl mx-auto bg-white p-8 shadow-xl rounded-lg hover:shadow-2xl transition-all">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
          {personalDetails.name}
        </h1>
        <p className="text-center text-gray-600 mb-8 italic">
          {personalDetails.profile}
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 pb-2">
            Contact Information
          </h2>
          <ul className="text-gray-600 space-y-2 mt-4">
            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-500" />
              {personalDetails.contact.phone.join(", ")}
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <span
                onClick={() =>
                  window.open("mailto:harshankkanungo259@gmail.com")
                }
              >
                {" "}
                {personalDetails.contact.email}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaGlobe className="text-blue-500" />
              <a href="https://www.linkedin.com/in/harshank-kanungo-a4b178251/">
                {personalDetails.contact.website}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              {personalDetails.contact.address}
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 pb-2">Skills</h2>
          <ul className="grid grid-cols-2 gap-4 text-gray-600 mt-4">
            {personalDetails.skills.map((skill, index) => (
              <li
                key={index}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full shadow-sm hover:bg-blue-200 transition-all"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2
            className="text-2xl font-semibold text-gray-700 cursor-pointer hover:text-green-500 transition duration-300 ease-in-out"
            onClick={() => setShowEducation(!showEducation)}
          >
            Education
            <span className="text-sm text-gray-500 ml-2">
              (Click to {showEducation ? "hide" : "show"})
            </span>
          </h2>

          {showEducation &&
            personalDetails.education.map((edu, index) => (
              <div
                key={index}
                className="mt-4 p-4 rounded-lg border-2 border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out animate-fade-in-up"
              >
                <h3 className="text-xl font-medium text-gray-800">
                  {edu.degree}
                </h3>
                <p className="text-gray-700">{edu.institution}</p>
                <p className="text-sm text-gray-500">
                  {edu.duration} - <strong>{edu.grade}</strong>
                </p>
              </div>
            ))}
        </div>

        <div>
          <h2
            className="text-2xl font-semibold text-gray-700 cursor-pointer mb-4"
            onClick={() => setShowExperience(!showExperience)}
          >
            Work Experience
            <span className="text-sm text-gray-500 ml-2">
              (Click to {showExperience ? "hide" : "show"})
            </span>
          </h2>
          {showExperience && (
            <div className="space-y-6">
              {personalDetails.experience.map((exp, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
                >
                  <h3 className="text-xl font-medium text-blue-600">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-gray-800 font-semibold">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 italic">{exp.duration}</p>
                  <p className="mt-2 text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mb-8">
          <h2
            className="text-2xl font-semibold text-gray-700 cursor-pointer  transition-all duration-300 ease-in-out my-4"
            onClick={() => setShowLanguage(!showLanguage)}
          >
            Languages
            <span className="text-sm text-gray-500 ml-2">
              (Click to {showLanguage ? "hide" : "show"})
            </span>
          </h2>

          {showLanguage && (
            <div className="mt-4 p-4 rounded-lg border-2 border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out animate-fade-in-up">
              <div className="flex justify-between">
                <p className="text-lg font-medium text-gray-800">Hindi</p>
                <p className="text-sm text-gray-500">Fluent</p>
              </div>
              <div className="flex justify-between mt-2">
                <p className="text-lg font-medium text-gray-800">English</p>
                <p className="text-sm text-gray-500">Fluent</p>
              </div>
            </div>
          )}
        </div>
        <div className="mb-8">
          <h2
            className="text-2xl font-semibold text-gray-700 cursor-pointer  transition-all duration-300 ease-in-out"
            onClick={() => setShowCertificates(!showCertificates)}
          >
            Certificates
            <span className="text-sm text-gray-500 ml-2">
              (Click to {showCertificates ? "hide" : "show"})
            </span>
          </h2>
          {showCertificates && (
            <div className="mt-4 space-y-4">
              <div className="p-4 border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <h3 className="text-xl font-medium">
                  Frontend Web Development Using JavaScript and React Bootcamp
                </h3>
                <p className="text-sm text-gray-500">
                  Institution: Bootcamp
                </p>
                <p className="text-sm text-gray-500">Date: 2023</p>
              </div>

              <div className="p-4  rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <h3 className="text-xl font-medium">
                  Instagram Clone Using HTML & CSS Bootcamp
                </h3>
                <p className="text-sm text-gray-500">
                  Institution: Bootcamp
                </p>
                <p className="text-sm text-gray-500">Date: 2023</p>
              </div>

              <div className="p-4  rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <h3 className="text-xl font-medium">
                  Frontend Training from Open Weaver
                </h3>
                <p className="text-sm text-gray-500">
                  Institution: Open Weaver
                </p>
                <p className="text-sm text-gray-500">Date: 2023</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
