"use client";

import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaMobileAlt, FaDatabase } from "react-icons/fa";
import { useState, useEffect } from "react";
import { IconType } from "react-icons";

const inter = Inter({ subsets: ["latin"] });

// Define TypeScript interfaces
interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface GradientButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

interface CounterAnimationProps {
  value: string;
  label: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const services: Service[] = [
  {
    Icon: FaCode,
    title: "Frontend Development",
    about:
      "Crafting responsive, accessible, and visually stunning interfaces using React, Next.js, Tailwind CSS, and Framer Motion.",
  },
  {
    Icon: FaServer,
    title: "MERN Stack Development",
    about:
      "Developing full-stack applications using MongoDB, Express.js, React, and Node.js — from backend APIs to dynamic UIs.",
  },
  {
    Icon: FaMobileAlt,
    title: "JavaScript / TypeScript Expertise",
    about:
      "Building modern web apps using clean and scalable JavaScript and TypeScript code, ensuring reliability and maintainability.",
  },
  {
    Icon: FaDatabase,
    title: "API Integration & State Management",
    about:
      "Integrating RESTful APIs and managing complex state using Redux, React Query, or Context API for high-performance apps.",
  },


];

// Enhanced Service Card with hover effects and animations
const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const { Icon, title, about } = service;

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: index * 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
      className="relative bg-gray-800 p-6 rounded-2xl shadow-lg"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      <motion.div
        className="relative z-10"
        whileHover={{
          transition: {
            staggerChildren: 0.07,
            delayChildren: 0.1,
          },
        }}
      >
        <div className="flex items-center mb-4">
          <motion.span
            whileHover={{
              scale: 1.2,
              rotate: 5,
              transition: { duration: 0.3 },
            }}
            className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg shadow-lg"
          >
            <Icon className="text-xl" />
          </motion.span>
          <motion.h5
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="text-xl font-bold text-white ml-4"
          >
            {title}
          </motion.h5>
        </div>
        <p className="text-gray-300 leading-relaxed">{about}</p>
      </motion.div>
    </motion.div>
  );
};

// Animated background component
const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-green-500 to-blue-500 opacity-20 blur-3xl"
          initial={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            scale: Math.random() * 0.5 + 0.5,
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            width: `${Math.random() * 30 + 20}%`,
            height: `${Math.random() * 30 + 20}%`,
            left: `${Math.random() * 70}%`,
            top: `${Math.random() * 70}%`,
          }}
        />
      ))}
    </div>
  );
};

// Fancy text reveal animation
const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const words = text.split(" ");

  // Variants for Container of words
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="inline-block mr-1">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Animated gradient border button
const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  href,
  className,
}) => {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium rounded-lg group ${
        className || ""
      }`}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-600 to-blue-600 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></span>
      <span className="relative text-white font-medium">{children}</span>
    </motion.a>
  );
};

// Animated section header
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-3xl font-bold text-gray-200 mb-4"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="h-1 w-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-4"></div>
      </motion.div>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

// Stats counter with animation
const CounterAnimation: React.FC<CounterAnimationProps> = ({
  value,
  label,
}) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(value);
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 mb-2"
      >
        {count}+
      </motion.div>
      <p className="text-gray-300">{label}</p>
    </div>
  );
};

export default function Home(): JSX.Element {
  return (
    <main
      className={`min-h-screen relative bg-gray-900 text-white overflow-hidden ${inter.className}`}
    >
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden mb-24 p-8 sm:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-blue-800 opacity-30"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-3/5 mb-8 md:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <AnimatedText
                  text="Welcome to My Portfolio"
                  className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-300 mb-8"
              >
                With{" "}
                <span className="font-semibold text-green-400">1.6+ years</span>{" "}
                of experience, including a
                <span className="font-semibold text-blue-400">
                  {" "}
                  06-month internship
                </span>{" "}
                and
                <span className="font-semibold text-green-400">
                  {" "}
                  12+ months
                </span>{" "}
                at
                <span className="font-semibold text-blue-400">
                  {" "}
                  IndiaNic Infotech Limited
                </span>
                , I'm eager to grow and take on new challenges.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <GradientButton href="/projects">View Projects</GradientButton>
                <motion.div
                  whileHover={{ scale: 1.05, borderColor: "#4ADE80" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-6 py-3 border border-gray-400 text-white font-medium rounded-lg cursor-pointer transition-all duration-300"
                  onClick={() => {
                    window.open("mailto:harshankkanungo259@gmail.com");
                  }}
                >
                  Contact Me
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="md:w-2/5 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              }}
            >
              <div className="relative w-64 h-64 flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: 360,
                    transition: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-20 blur-md"
                ></motion.div>
                <div className="absolute inset-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                      HK
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gray-800 bg-opacity-70 backdrop-blur-sm p-8 rounded-2xl mb-24"
        >
          <CounterAnimation value="18" label="Projects Completed" />
          <CounterAnimation value="1.6" label="Years Experience" />
          <CounterAnimation value="15" label="Happy Clients" />
          <CounterAnimation value="5" label="Technologies Mastered" />
        </motion.div>

        {/* Services Section */}
        <div className="mb-24">
          <SectionHeader
            title="What I Do"
            subtitle="Exploring new technologies and building innovative solutions"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                service={service}
                key={service.title}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="h-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 rounded-full mt-16"
        ></motion.div>
      </div>
    </main>
  );
}
