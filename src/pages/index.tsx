"use client";

import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { services } from "../../data";

const inter = Inter({ subsets: ["latin"] });

interface IService {
  title: string;
  about: string;
  Icon: React.ComponentType;
}

const ServiceCard: React.FC<{ service: IService; index: number }> = ({
  service,
  index,
}) => {
  const { Icon, title, about } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="group relative bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <span className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg shadow-lg transform group-hover:scale-110 transition-transform duration-500">
            <Icon />
          </span>
          <h5 className="text-xl font-bold text-white ml-4 transform group-hover:translate-x-2 transition-transform duration-500">
            {title}
          </h5>
        </div>
        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
          {about}
        </p>
      </div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-12 p-8 sm:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-blue-800 opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Welcome to My Portfolio
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg sm:text-xl text-gray-300 text-center"
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
          </div>
        </motion.div>

        {/* Services Section */}
        <div className="space-y-12">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-bold text-gray-200 mb-4"
            >
              What I Do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Exploring new technologies and building innovative solutions
            </motion.p>
          </div>

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
        <div className="mt-16 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 rounded-full"></div>
      </div>
    </main>
  );
}
