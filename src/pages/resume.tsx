import React from "react";

const ResumePage = () => {
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
        institution: "Medicaps University, Indore",
        duration: "2020 - 2024",
        grade: "CGPA: 8.76",
      },
      {
        degree: "Intermediate",
        institution: "S.V.M Higher Secondary, Khandwa",
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
      {
        role: "Frontend Development Intern",
        company: "BasketHunt Pvt Ltd",
        duration: "03/2024 - 04/2024",
        description:
          "Developed skills in HTML, CSS, JavaScript, React during Tech Alpha internship.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto bg-white p-8 shadow-xl rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          {personalDetails.name}
        </h1>
        <p className="text-center text-gray-600 mb-8 italic">
          {personalDetails.profile}
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-gray-200 pb-2 mb-4">
            Contact Information
          </h2>
          <ul className="text-gray-600">
            <li>
              <strong>Phone:</strong> {personalDetails.contact.phone.join(", ")}
            </li>
            <li>
              <strong>Email:</strong> {personalDetails.contact.email}
            </li>
            <li>
              <strong>Website:</strong> {personalDetails.contact.website}
            </li>
            <li>
              <strong>Address:</strong> {personalDetails.contact.address}
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-gray-200 pb-2 mb-4">
            Skills
          </h2>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 text-gray-600">
            {personalDetails.skills.map((skill, index) => (
              <li
                key={index}
                className="flex items-center justify-center gap-2"
              >
                <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm shadow-md hover:bg-blue-300 transition-all duration-300">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-gray-200 pb-2 mb-4">
            Education
          </h2>
          {personalDetails.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-medium text-gray-800">
                {edu.degree}
              </h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">
                {edu.duration} - <strong>{edu.grade}</strong>
              </p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-gray-200 pb-2 mb-4">
            Work Experience
          </h2>
          {personalDetails.experience.map((exp, index) => (
            <div key={index} className="mb-6 border-b-2 border-gray-200 pb-4">
              <h3 className="text-xl font-medium text-gray-800">{exp.role}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
