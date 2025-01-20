import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="grid grid-cols-12 gap-6 lg:my-14 px-48">
        <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl col-span-12">
          <Sidebar />
        </div>

        <div className="col-span-12  lg:col-span-9 bg-white rounded-2xl col-span-12">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
