import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTags, FaTimes, FaCode } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  deployment: string;
  image: string;
  demoLink: string;
  githubLink: string;
};

// Fixed the type issue - changed from type to array
const projects: Project[] = [
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
    demoLink: "https://car-rental.vercel.app",
    githubLink: "https://github.com/yourusername/car-rental",
  },
  {
    title: "E-Commerce Website",
    description:
      "An engaging and responsive e-commerce platform featuring product listing, shopping cart, authentication, and payment integration.",
    technologies: ["React.js", "Next.js", "MongoDB", "Redux", "Stripe Payment"],
    deployment: "Live on Vercel",
    image:
      "https://th.bing.com/th/id/OIP.tNzhvGRwyJqirlfAJxWC_wHaEk?w=303&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    demoLink: "https://ecommerce-site.vercel.app",
    githubLink: "https://github.com/yourusername/ecommerce-site",
  },
];

const ProjectsPage = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isLoading, setIsLoading] = useState(true);

  // Get unique technologies for filtering
  const allTechnologies = ["All", ...Array.from(new Set(projects.flatMap(project => project.technologies)))];


  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.technologies.includes(activeFilter))
      );
    }
  }, [activeFilter]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const filterVariants = {
    inactive: { scale: 1 },
    active: { 
      scale: 1.05,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 10 
      }
    }
  };

  const handleShowMoreTechnologies = (techs: string[]) => {
    setSelectedTechnologies(techs);
    setIsModalOpen(true);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16"
    >
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full"
          />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="relative mb-8">
              <motion.h1 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 text-transparent bg-clip-text"
              >
                My Projects
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 mx-auto rounded-full"
              />
            </div>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-300 text-lg max-w-2xl mx-auto"
            >
              A showcase of my passion for web development through various projects
            </motion.p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {allTechnologies.slice(0, 8).map((tech, index) => (
              <motion.button
                key={index}
                variants={filterVariants}
                initial="inactive"
                animate={activeFilter === tech ? "active" : "inactive"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === tech 
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/20" 
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {tech}
              </motion.button>
            ))}
            {/* {allTechnologies.length > 8 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 transition-all duration-300"
              >
                +{allTechnologies.length - 8} more
              </motion.button>
            )} */}
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
              >
                <div 
                  className="relative overflow-hidden aspect-video cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex gap-4 justify-center">
                      <a
                        // href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt className="w-5 h-5" />
                      </a>
                      <a
                        // href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    </div>
                  </div> */}
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-700/50 text-cyan-300 border border-cyan-500/20"
                      >
                        <FaTags className="mr-1 w-3 h-3" />
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowMoreTechnologies(project.technologies);
                        }}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-700/50 text-blue-300 hover:bg-gray-600/50 transition-colors cursor-pointer border border-blue-500/20"
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
              <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
                <motion.div
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="bg-gray-800 rounded-2xl p-6 max-w-md w-full mx-4 shadow-xl border border-gray-700"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">
                      Technologies Used
                    </h3>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="p-2 hover:bg-gray-700 rounded-full transition-colors"
                    >
                      <FaTimes className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedTechnologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-700/50 text-cyan-300 border border-cyan-500/20"
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

          {/* Project Detail Modal */}
          <AnimatePresence>
            {isProjectModalOpen && selectedProject && (
              <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50" onClick={() => setIsProjectModalOpen(false)}>
                <motion.div
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="bg-gray-800 rounded-2xl p-0 max-w-4xl w-full mx-4 shadow-xl border border-gray-700 overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative h-64 md:h-80">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                    <button
                      onClick={() => setIsProjectModalOpen(false)}
                      className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 rounded-full transition-colors"
                    >
                      <FaTimes className="w-5 h-5 text-white" />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                      <p className="text-gray-300 font-medium">{selectedProject.deployment}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-3">About This Project</h3>
                      <p className="text-gray-300">{selectedProject.description}</p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-700/50 text-cyan-300 border border-cyan-500/20"
                          >
                            <FaCode className="mr-1 w-3 h-3" />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* <div className="flex gap-4">
                      <a
                        href={selectedProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-4 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300 text-center"
                      >
                        <FaExternalLinkAlt className="inline-block mr-2 w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-4 rounded-lg bg-gray-700 text-white font-medium hover:bg-gray-600 transition-all duration-300 text-center"
                      >
                        <FaGithub className="inline-block mr-2 w-4 h-4" />
                        View Code
                      </a>
                    </div> */}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectsPage;