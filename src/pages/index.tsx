import { Inter } from "next/font/google";
import { services } from "../../data";
// import {
//   GetServerSideProps,
//   GetServerSidePropsContext,
//   GetStaticProps,
//   GetStaticPropsContext,
//   NextPage,
// } from "next";

const inter = Inter({ subsets: ["latin"] });

interface IService {
  title: string;
  about: string;
  Icon: React.ComponentType;
}

const ServiceCard: React.FC<{ service: IService }> = ({ service }) => {
  const { Icon, title, about } = service;

  return (
    <div className="flex items-center p-4 space-x-4 bg-gray-200 rounded-lg shadow-md dark:bg-dark-200">
      <span className="w-12 h-12 text-green-500">
        {" "}
        <Icon />
      </span>
      <div>
        <h5 className="text-lg font-semibold">{title}</h5>
        <p className="text-sm text-black-200 dark:text-black-300">{about}</p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main>
      <div className="flex flex-col flex-grow px-6 pt-1">
        <h6 className="my-3 text-base font-medium">
          With over 1.3+ year of professional experience, including a 06-month
          internship and 09+ months of hands-on work on real-time projects at
          IndiaNic Infotech Limited, where I am currently employed, I am eager
          to further advance my career. I am seeking a new opportunity where I
          can contribute to the organization's growth, build on my existing
          skills, and take on greater responsibilities. As a highly motivated
          and dedicated professional, I am excited to bring my expertise and
          enthusiasm to a dynamic role within a reputable company.
        </h6>

        <div
          className="flex-grow p-4 mt-5 bg-gray-400 rounded-lg dark:bg-dark-100"
          style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <h4 className="my-3 text-xl font-semibold tracking-wide">
            What I am doing
          </h4>

          <div className="grid gap-6 my-3 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard service={service} key={service.title} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
