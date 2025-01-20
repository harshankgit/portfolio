import {
  RiComputerLine,
  RiCodeSSlashLine,
  RiDatabaseLine,
  RiTeamLine,
  RiStackLine,
  RiReactjsLine,
  RiFileCodeLine,
  RiLayoutLine,
  RiSettings3Line,
} from "react-icons/ri";
import { IconType } from "react-icons";


interface IService {
  title: string;
  about: string;
  Icon: IconType;
}

export const services: IService[] = [
  {
    title: "Frontend Development",
    about:
      "Building responsive and visually appealing user interfaces using modern frameworks like React.js and Next.js.",
    Icon: RiReactjsLine,
  },
  {
    title: "React Development",
    about:
      "Expert in building dynamic and interactive user interfaces using React, leveraging hooks, context, and state management.",
    Icon: RiReactjsLine,
  },
  {
    title: "Next.js Development",
    about:
      "Proficient in creating server-rendered applications with Next.js, implementing SEO optimization, and API integration.",
    Icon: RiFileCodeLine,
  },
  {
    title: "JavaScript Mastery",
    about:
      "In-depth knowledge of ES6+ features, asynchronous programming, and DOM manipulation for modern web development.",
    Icon: RiCodeSSlashLine,
  },
  {
    title: "TypeScript Expertise",
    about:
      "Skilled in using TypeScript for building type-safe and scalable applications, ensuring robust and error-free code.",
    Icon: RiSettings3Line,
  },
  {
    title: "HTML & CSS",
    about:
      "Strong foundation in crafting semantic HTML and responsive CSS layouts, including expertise in frameworks like Tailwind CSS.",
    Icon: RiLayoutLine,
  },
  {
    title: "Backend Development",
    about:
      "Creating robust backend solutions with Node.js, Express.js, and integrating with MongoDB for efficient data handling.",
    Icon: RiDatabaseLine,
  },
  {
    title: "Full-Stack Development",
    about:
      "Developing end-to-end web applications by seamlessly connecting frontend and backend technologies.",
    Icon: RiStackLine,
  },
  {
    title: "UI/UX Design",
    about:
      "Designing user-friendly interfaces with a focus on enhancing the user experience through intuitive design.",
    Icon: RiComputerLine,
  },
  {
    title: "Version Control & Collaboration",
    about:
      "Streamlining development with Git, GitHub, and collaborative tools, ensuring smooth teamwork and code management.",
    Icon: RiTeamLine,
  },
  {
    title: "Problem Solving & Optimization",
    about:
      "Analyzing and optimizing code to ensure performance, scalability, and reliability in web applications.",
    Icon: RiCodeSSlashLine,
  },
];

export const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio to showcase my skills and projects.",
    image: "/images/portfolio.jpg",
    deployed_url: "https://portfolio-example.com",
    github_url: "https://github.com/username/portfolio",
    category: ["react", "frontend"],
  },
  {
    name: "E-Commerce Platform",
    description: "An e-commerce platform with payment gateway integration.",
    image: "/images/ecommerce.jpg",
    deployed_url: "https://ecommerce-example.com",
    github_url: "https://github.com/username/ecommerce",
    category: ["node", "backend"],
  },
  {
    name: "Social Media App",
    description: "A social media app with real-time chat functionality.",
    image: "/images/social.jpg",
    deployed_url: "https://social-example.com",
    github_url: "https://github.com/username/social",
    category: ["react", "fullstack"],
  },
];
