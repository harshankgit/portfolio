import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Sidebar */}
      <div className="bg-white p-4 text-center rounded-2xl lg:col-span-3">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-2xl lg:col-span-9">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
