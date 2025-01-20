import React from "react";
// import Pizza from "@/components/PizzaPoint.png"
// import Echo from "@/components/Echoscrum.png"
// import Garden from "@/components/Garden.png"

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
      "Developed a platform for managing and ordering pizza, with admin functionality to add items and organize them by category. Users can select, and order food seamlessly.",
    technologies: ["HTML", "CSS", "JavaScript", "Next.js", "MongoDB Atlas"],
    deployment: "Hosted on GitHub and Vercel",
    image: "https://img.freepik.com/premium-vector/pizza-point_1071-217.jpg",
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-10">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={`${project.title} thumbnail`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <h3 className="font-medium text-blue-700 mb-2">
                  Technologies Used:
                </h3>
                <ul className="list-disc ml-6 text-gray-700 mb-3">
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500">
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
