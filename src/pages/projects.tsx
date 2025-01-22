import React from "react";

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
  },
  {
    title: "Merge Garden Booking Website",
    description:
      "Creating a customizable booking platform enabling users to tailor packages based on food preferences, room requirements, and budget.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Booking API"],
    deployment: "Hosted on GitHub Pages",
    image:
      "https://cdn0.weddingwire.in/vendor/5056/3_2/640/jpg/wedding-venue-jade-banquets-mumbai-lawn-space-5_15_385056-163386246872609.jpeg",
  },
  {
    title: "Pizza Point",
    description:
      "Developed a platform for managing and ordering pizza, with admin functionality to add items and organize them by category. Users can select and order food seamlessly.",
    technologies: ["HTML", "CSS", "JavaScript", "Next.js", "MongoDB Atlas"],
    deployment: "Hosted on GitHub and Vercel",
    image: "https://img.freepik.com/premium-vector/pizza-point_1071-217.jpg",
  },
  {
    title: "Live Weather Website",
    description:
      "Designed and built a live weather tracking website using modern APIs to provide real-time weather updates and forecasts.",
    technologies: ["HTML", "CSS", "React.js", "Weather API", "Responsive UI"],
    deployment: "Deployed on Vercel for demonstration purposes",
    image:
      "https://s.cafebazaar.ir/images/upload/screenshot/forecast.weather.live-7f8f298e-838e-45ab-9a9e-5bb2842c6ce5.jpeg?x-img=v1/resize,h_600,lossless_false/optimize",
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
    ],
    deployment: "Deployed on Vercel for demonstration purposes",
    image:
      "https://miro.medium.com/v2/resize:fit:800/1*NhwJI7t4NOUMHXDNhXDYew.png",
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-100 via-teal-50 to-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center text-teal-800 mb-10">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={`${project.title} thumbnail`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-teal-900 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <h3 className="font-semibold text-teal-700 mb-2">
                  Technologies Used:
                </h3>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-4">
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 font-medium">
                  <strong>Deployment:</strong> {project.deployment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
