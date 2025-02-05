import { Inter } from "next/font/google";
import { services } from "../../data";

const inter = Inter({ subsets: ["latin"] });

interface IService {
  title: string;
  about: string;
  Icon: React.ComponentType;
}

const ServiceCard: React.FC<{ service: IService }> = ({ service }) => {
  const { Icon, title, about } = service;

  return (
    <div className="group relative overflow-hidden bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <span className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-lg transform group-hover:scale-110 transition-transform duration-500">
            <Icon />
          </span>
          <h5 className="text-xl font-bold text-gray-800 ml-4 transform group-hover:translate-x-2 transition-transform duration-500">{title}</h5>
        </div>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">{about}</p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 opacity-50"></div>
          <div className="relative z-10 p-8 sm:p-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Welcome to My Portfolio
              </span>
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
                With over <span className="font-semibold text-green-600">1.4+ years</span> of professional experience, 
                including a <span className="font-semibold text-blue-600">06-month internship</span> and 
                <span className="font-semibold text-green-600"> 10+ months</span> of hands-on work on real-time projects at 
                <span className="font-semibold text-blue-600"> IndiaNic Infotech Limited</span>, I am eager to further advance my career. 
                I am seeking new opportunities to contribute to organizational growth, enhance my skills, and take on greater responsibilities.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-500"></div>
        </div>

        {/* Services Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="inline-block text-3xl font-bold text-gray-800 mb-4 relative">
              What I am doing
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Exploring new technologies and creating innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard service={service} key={service.title} />
            ))}
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div className="mt-16 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 rounded-full"></div>
      </div>
    </main>
  );
}
