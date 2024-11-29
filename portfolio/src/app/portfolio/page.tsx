import Head from "next/head";
import ProjectCard from "../components/ProjectCard";

const portfolio = () => {
  return (
    <div className="font-mono flex flex-col min-h-screen">
      <Head>
        <title>Portfolio</title>
      </Head>

      <div className="ml-4 mt-24 sm:ml-10 lg:ml-20 flex-grow sm:mr-10 lg:mr-16">
        <div className="text-6xl mb-6">
          <p>Portfolio</p>
        </div>
        <div className="grid flex-wrap space-y-4 sm:space-y-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProjectCard
            href="/projects/web"
            projectName={"this website"}
            category={"side project"}
          />
          <ProjectCard
            href="/projects/convohub"
            projectName={'Chat web App'}
            category={'side project'}
          />
          <ProjectCard
            href="/projects/nifty"
            projectName={'Nifty50StockAnalysis'}
            category={'Data Analysis'}
          />
          <ProjectCard
            href="/projects/ZestyBite"
            projectName={"ZestyBite"}
            category={"side project"}
          />
          <ProjectCard
            href="/projects/ecomm"
            projectName={'E-commerce platform'}
            category={'side project'}
          />
        </div>
      </div>
    </div>
  );
};

export default portfolio;
