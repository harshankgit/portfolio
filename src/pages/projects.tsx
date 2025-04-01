import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTags, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "Echo-Scrum",
    description:
      "Developed a comprehensive portal for managing employee and company details, including real-time project timesheet tracking.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Real-time updates",
      "Detailed reporting",
    ],
    deployment: "Live and operational for real-time use",
    image:
      "https://echoscrum.net/static/media/auth.45df5b5e561e5de9c3d39c5063717b04.svg",
    demoLink: "https://echoscrum.net",
    githubLink: "https://github.com/yourusername/echo-scrum",
  },
  {
    title: "Merge Garden Booking Website",
    description:
      "Creating a customizable booking platform enabling users to tailor packages based on food preferences, room requirements, and budget.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Booking API", "Responsive Design", "Payment Integration", "Form Validation"],
    deployment: "Hosted on Vercel",
    image:
      "https://cdn0.weddingwire.in/vendor/5056/3_2/640/jpg/wedding-venue-jade-banquets-mumbai-lawn-space-5_15_385056-163386246872609.jpeg",
    demoLink: "https://merge-garden.vercel.app",
    githubLink: "https://github.com/yourusername/merge-garden",
  },
  {
    title: "Pizza Point",
    description:
      "Developed a platform for managing and ordering pizza, with admin functionality to add items and organize them by category. Users can select and order food seamlessly.",
    technologies: ["HTML", "CSS", "JavaScript", "Next.js", "MongoDB Atlas", "Authentication", "Payment Gateway", "Admin Dashboard"],
    deployment: "Hosted on GitHub and Vercel",
    image: "https://img.freepik.com/premium-vector/pizza-point_1071-217.jpg",
    demoLink: "https://pizza-point.vercel.app",
    githubLink: "https://github.com/yourusername/pizza-point",
  },
  {
    title: "Live Weather Website",
    description:
      "Designed and built a live weather tracking website using modern APIs to provide real-time weather updates and forecasts.",
    technologies: ["HTML", "CSS", "React.js", "Weather API", "Responsive UI", "Geolocation", "Data Visualization", "Error Handling"],
    deployment: "Deployed on Vercel for demonstration purposes",
    image:
      "https://s.cafebazaar.ir/images/upload/screenshot/forecast.weather.live-7f8f298e-838e-45ab-9a9e-5bb2842c6ce5.jpeg?x-img=v1/resize,h_600,lossless_false/optimize",
    demoLink: "https://weather-app.vercel.app",
    githubLink: "https://github.com/yourusername/weather-app",
  },
  {
    title: "Complex To-Do List",
    description:
      "Developed a complex to-do list application with advanced features like search, delete, and real-time task updates.",
    technologies: [
      "React.js",
      "JavaScript",
      "CSS",
      "State Management",
      "LocalStorage",
      "Search Functionality",
      "Drag and Drop",
      "Categories",
    ],
    deployment: "Deployed on Vercel for demonstration purposes",
    image:
      "https://miro.medium.com/v2/resize:fit:800/1*NhwJI7t4NOUMHXDNhXDYew.png",
    demoLink: "https://todo-app.vercel.app",
    githubLink: "https://github.com/yourusername/todo-app",
  },

  {
    title: "Car Rental Website",
    description:
      "A user-friendly platform allowing customers to rent cars efficiently, filter by price, model, and location, and complete transactions securely.",
    technologies: ["React.js", "Next.js", "MongoDB", "Authentication", "Payment Gateway"],
    deployment: "Hosted on Vercel",
    image:
      "https://th.bing.com/th/id/OIP.KZ_u6iIKSiENDocHfGicrQHaEK?w=322&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    details:
      "The car rental website provides an efficient platform to rent vehicles based on user preferences. It includes authentication, payment gateway integration, and seamless booking functionality.",
  },
  {
    title: "E-Commerce Website",
    description:
      "An engaging and responsive e-commerce platform featuring product listing, shopping cart, authentication, and payment integration.",
    technologies: ["React.js", "Next.js", "MongoDB", "Redux", "Stripe Payment"],
    deployment: "Live on Vercel",
    image:
      "https://th.bing.com/th/id/OIP.tNzhvGRwyJqirlfAJxWC_wHaEk?w=303&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    details:
      "The e-commerce website is a full-fledged platform supporting various product categories, an intuitive shopping experience, and a secure payment gateway.",
  },
];

const ProjectsPage = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const handleShowMoreTechnologies = (techs: string[]) => {
    setSelectedTechnologies(techs);
    setIsModalOpen(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
            My Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A showcase of my passion for web development through various projects
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex gap-4 justify-center">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 p-2 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div> */}
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-green-500 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                    >
                      <FaTags className="mr-1 w-3 h-3" />
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <button
                      onClick={() => handleShowMoreTechnologies(project.technologies)}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors cursor-pointer"
                    >
                      +{project.technologies.length - 3} more
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies Modal */}
        <AnimatePresence>
          {isModalOpen && selectedTechnologies && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full mx-4 shadow-xl"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    Technologies Used
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <FaTimes className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedTechnologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                    >
                      <FaTags className="mr-1 w-3 h-3" />
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
