import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Sidebar */}
      <div className="relative bg-white/20 p-4 text-center rounded-2xl lg:col-span-3 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://wallpaperaccess.com/full/5651999.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Sidebar />
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-2xl lg:col-span-9">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
