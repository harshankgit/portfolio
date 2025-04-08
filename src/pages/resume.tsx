import React, { useState, useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaBriefcase,
  FaGraduationCap,
  FaLanguage,
  FaCertificate,
  FaCode,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ResumePage = () => {
  const [showExperience, setShowExperience] = useState(true);
  const [showEducation, setShowEducation] = useState(true);
  const [showLanguage, setShowLanguage] = useState(true);
  const [showCertificates, setShowCertificates] = useState(true);
  const [showProjects, setShowProjects] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const personalDetails = {
    name: "Harshank Kanungo",
    title: "Frontend Developer",
    contact: {
      phone: ["+91 8109774968", "+91 8965992035"],
      email: "harshankkanungo259@gmail.com",
      website: "harshankkanungo.com",
      address: "Narol Ahmedabad, Gujarat 380001",
      social: {
        github: "github.com/harshankkanungo",
        linkedin: "https://www.linkedin.com/in/harshank-kanungo-a4b178251/",
        // twitter: "twitter.com/harshankkanungo",
      },
    },
    profile:
      "With over 1.4+ years of professional experience, including a 06-month internship and 10+ months of hands-on work on real-time projects at IndiaNic Infotech Limited, where I am currently employed, I am eager to further advance my career. I specialize in building responsive, performant web applications with modern JavaScript frameworks.",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "Redux", level: 75 },
      { name: "Bootstrap", level: 80 },
      { name: "Tailwind CSS", level: 80 },
      { name: "GitHub", level: 90 },
      { name: "GitLab", level: 85 },
      { name: "Vercel", level: 85 },
    ],
    education: [
      {
        degree: "B.Tech Computer Science",
        institution: "Medicaps University, Indore, MP",
        duration: "2020 - 2024",
        grade: "CGPA: 8.76",
        description:
          "Focused on web technologies and full-stack development. Participated in multiple hackathons and coding challenges.",
      },
      {
        degree: "Board Of Intermediate Institute",
        institution: "S.V.M Higher Secondary, Khandwa, MP",
        duration: "2019 - 2020",
        grade: "77%",
        description:
          "Studied Computer Science, Mathematics, and Physics as main subjects.",
      },
      {
        degree: "Board Of Secondary Institute",
        institution: "S.V.M Higher Secondary, Khandwa, MP",
        duration: "2017 - 2018",
        grade: "81.40%",
        description: "Developed strong foundation in Mathematics and Science.",
      },
    ],
    experience: [
      {
        role: "Frontend Developer",
        company: "IndiaNic Infotech Limited",
        duration: "04/2024 - Present",
        description:
          "Gained real-time experience in React.js, working on dynamic web applications and enhancing frontend capabilities.",
        responsibilities: [
          "Developed responsive and interactive UI components using React and Next.js",
          "Implemented state management using Redux and Context API",
          "Collaborated with backend team to integrate REST APIs",
          "Optimized application performance and accessibility",
          "Participated in code reviews and agile development process",
        ],
      },
      {
        role: "Frontend Development Intern",
        company: "BasketHunt Pvt Ltd",
        duration: "09/2023 - 03/2024",
        description:
          "Developed skills in HTML, CSS, JavaScript, React during BasketHunt Pvt Ltd internship.",
        responsibilities: [
          "Built responsive web pages using HTML, CSS, and JavaScript",
          "Learned and implemented React components and hooks",
          "Assisted in UI/UX improvements for existing projects",
          "Participated in daily standups and team meetings",
        ],
      },
    ],
    projects: [
      {
        title: "E-Commerce Dashboard",
        description:
          "A responsive admin dashboard for e-commerce analytics with real-time data visualization",
        technologies: ["React", "Redux", "Chart.js", "Tailwind CSS"],
        duration: "3 months",
      },
      {
        title: "Social Media Platform",
        description:
          "A full-featured social networking site with user profiles, posts, and real-time messaging",
        technologies: ["Next.js", "Firebase", "Tailwind CSS", "Socket.io"],
        duration: "4 months",
      },
      {
        title: "Portfolio Website",
        description:
          "Personal portfolio website showcasing projects and skills with interactive elements",
        technologies: ["React", "Framer Motion", "Styled Components"],
        duration: "1 month",
      },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  interface SectionHeaderProps {
    title: string;
    isOpen: boolean;
    onClick: () => void;
    icon: React.ReactNode;
  }

  const SectionHeader = ({ title, isOpen, onClick, icon }: SectionHeaderProps) => (
    <motion.div
      onClick={onClick}
      className="flex items-center justify-between cursor-pointer group mb-4"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex items-center">
        <div className="mr-3 text-green-400 text-xl">{icon}</div>
        <h2 className="text-2xl font-bold text-gray-300 group-hover:text-green-500 transition-colors">
          {title}
        </h2>
      </div>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? (
          <FaChevronUp className="text-gray-400 group-hover:text-green-500 transition-colors" />
        ) : (
          <FaChevronDown className="text-gray-400 group-hover:text-green-500 transition-colors" />
        )}
      </motion.div>
    </motion.div>
  );

  // Loading animation
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-green-500 border-gray-700 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-green-500">
            Loading Resume...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 p-4 md:p-8">
      <motion.div
        className="max-w-4xl mx-auto bg-gray-900 rounded-xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-blue-900 opacity-30"></div>
          <div className="bg-gray-800 p-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                {personalDetails.name}
              </h1>
              <p className="text-center text-xl mt-2 text-green-400 font-medium">
                {personalDetails.title}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex justify-center space-x-4 mt-4">
                <motion.a
                  href={`https://${personalDetails.contact.social.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a
                  // href={`https://${personalDetails.contact.social.linkedin}`}
                  href="https://www.linkedin.com/in/harshank-kanungo-a4b178251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                >
                  <FaLinkedin size={24} />
                </motion.a>
                {/* {personalDetails.contact.social.twitter && (
                  <motion.a
                    href={`https://${personalDetails.contact.social.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <FaTwitter size={24} />
                  </motion.a>
                )} */}
              </div>
            </motion.div>

            <motion.div
              className="mt-6 text-center text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p>{personalDetails.profile}</p>
            </motion.div>
          </div>
        </div>
        <div className="p-6">
          {/* Contact Information */}
          <motion.div
            className="bg-gray-800 rounded-2xl shadow-xl p-6 mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ boxShadow: "0 0 15px rgba(72, 187, 120, 0.3)" }}
          >
            <h2 className="text-2xl font-bold text-gray-200 mb-6 flex items-center">
              <FaPhone className="mr-2 text-green-400" />
              Contact Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="bg-gray-700 p-3 rounded-full">
                  <FaPhone className="text-green-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-gray-300">
                    {personalDetails.contact.phone.join(", ")}
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                onClick={() =>
                  window.open("mailto:" + personalDetails.contact.email)
                }
              >
                <div className="bg-gray-700 p-3 rounded-full">
                  <FaEnvelope className="text-green-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-gray-300">
                    {personalDetails.contact.email}
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="bg-gray-700 p-3 rounded-full">
                  <FaGlobe className="text-green-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Website</p>
                  <a
                    href="https://www.linkedin.com/in/harshank-kanungo-a4b178251/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    {personalDetails.contact.website}
                  </a>
                </div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="bg-gray-700 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-green-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-gray-300">
                    {personalDetails.contact.address}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="bg-gray-800 rounded-2xl shadow-xl p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: "0 0 15px rgba(72, 187, 120, 0.3)" }}
          >
            <h2 className="text-2xl font-bold text-gray-200 mb-6 flex items-center">
              <FaCode className="mr-2 text-green-400" />
              Skills
            </h2>
            <div className="space-y-4">
              {personalDetails.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-green-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-gradient-to-r from-green-500 to-cyan-500 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.1 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="bg-gray-800 rounded-2xl shadow-xl p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: "0 0 15px rgba(72, 187, 120, 0.3)" }}
          >
            <SectionHeader
              title="Work Experience"
              isOpen={showExperience}
              onClick={() => setShowExperience(!showExperience)}
              icon={<FaBriefcase />}
            />
            {showExperience && (
              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {personalDetails.experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-gray-900 rounded-xl border-l-4 border-green-500 hover:border-cyan-400 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex flex-col md:flex-row justify-between items-start mb-2">
                      <motion.h3
                        className="text-xl font-bold text-green-400"
                        whileHover={{ x: 5 }}
                      >
                        {exp.role}
                      </motion.h3>
                      <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full mt-2 md:mt-0">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-lg text-gray-200 mb-2">{exp.company}</p>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="mt-4">
                      <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
                        Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Projects Section */}
          <motion.div
            className="bg-gray-800 rounded-2xl shadow-xl p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: "0 0 15px rgba(72, 187, 120, 0.3)" }}
          >
            <SectionHeader
              title="Projects"
              isOpen={showProjects}
              onClick={() => setShowProjects(!showProjects)}
              icon={<FaCode />}
            />
            {showProjects && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {personalDetails.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-gray-900 rounded-xl border-l-4 border-green-500 hover:border-cyan-400 flex flex-col h-full"
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)",
                    }}
                  >
                    <h3 className="text-xl font-bold text-green-400 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div>
                      <p className="text-sm text-gray-400 mb-2">
                        Duration: {project.duration}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-700 text-green-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Education Section */}
          <motion.div
            className="bg-gray-800 rounded-2xl shadow-xl p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: "0 0 15px rgba(72, 187, 120, 0.3)" }}
          >
            <SectionHeader
              title="Education"
              isOpen={showEducation}
              onClick={() => setShowEducation(!showEducation)}
              icon={<FaGraduationCap />}
            />
            {showEducation && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {personalDetails.education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="p-6 bg-gray-900 rounded-xl border-l-4 border-green-500 hover:border-cyan-400 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)",
                    }}
                  >
                    <h3 className="text-xl font-bold text-gray-200 mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-gray-300 mb-1">
                      {edu.institution}
                    </p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-400">{edu.duration}</span>
                      <span className="text-green-400 font-semibold">
                        {edu.grade}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{edu.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Languages Section */}
          <motion.div
            className="bg-gray-800 rounded-2xl shadow-xl p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: "0 0 15px rgba(72, 187, 120, 0.3)" }}
          >
            <SectionHeader
              title="Languages"
              isOpen={showLanguage}
              onClick={() => setShowLanguage(!showLanguage)}
              icon={<FaLanguage />}
            />
            {showLanguage && (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="p-6 bg-gray-900 rounded-xl border-l-4 border-green-500"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="font-semibold text-xl text-gray-200 mb-2">
                    English
                  </h3>
                  <p className="text-gray-400 mb-3">Professional</p>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-gradient-to-r from-green-500 to-cyan-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      style={{ width: "75%" }}
                    ></motion.div>
                  </div>
                </motion.div>
                <motion.div
                  className="p-6 bg-gray-900 rounded-xl border-l-4 border-green-500"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="font-semibold text-xl text-gray-200 mb-2">
                    Hindi
                  </h3>
                  <p className="text-gray-400 mb-3">Native</p>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-gradient-to-r from-green-500 to-cyan-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      style={{ width: "100%" }}
                    ></motion.div>
                  </div>
                </motion.div>
                <motion.div
                  className="p-6 bg-gray-900 rounded-xl border-l-4 border-green-500"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="font-semibold text-xl text-gray-200 mb-2">
                    Gujarati
                  </h3>
                  <p className="text-gray-400 mb-3">Intermediate</p>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className="bg-gradient-to-r from-green-500 to-cyan-500 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      transition={{ duration: 1 }}
                      viewport={{ once: true }}
                      style={{ width: "60%" }}
                    ></motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>{" "}
      </motion.div>
    </div>
  );
};
export default ResumePage;