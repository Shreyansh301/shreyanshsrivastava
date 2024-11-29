import Head from 'next/head';
import Link from 'next/link';

const ZestyBite = () => {
  return (
    <div className="font-mono flex flex-col min-h-screen">
      <Head>
        <title>Project - ZestyBite</title>
      </Head>

      <div className="ml-4 mt-24 sm:ml-10 lg:ml-20 flex-grow sm:mr-10 lg:mr-16">
        <p className="text-6xl mb-6 font-semibold">ZestyBite</p>
        <p className="text-lg mb-4">
          React application simulating a landing page, built using React and styled with Tailwind CSS.
        </p>

        <p className="font-medium text-xl mt-4">🚀 Features:</p>
        <ul className="text-lg list-disc pl-6">
          <li>Responsive landing page structure</li>
          <li>Responsive design using Tailwind CSS</li>
          <li>Component-based structure for maintainability</li>
          <li>Testing setup with React Testing Library</li>
        </ul>

        <p className="font-medium text-xl mt-6">🔧 Tech Stack:</p>
        <ul className="text-lg list-disc pl-6">
          <li>React: Frontend library for building user interfaces</li>
          <li>Tailwind CSS: Utility-first CSS framework for styling</li>
          <li>React Icons: For adding icons to the UI</li>
          <li>React Testing Library: For writing unit tests</li>
          <li>MealDB API: For fetching meal data</li>
        </ul>

        <div className="mt-6">
          <a 
            href="https://github.com/Shreyansh301/ZestyBite" 
            target="_blank" 
            rel="noopener noreferrer" 
          >
            Check out the code on GitHub
          </a>
        </div>
      </div>

      <Link href="/portfolio" className="flex justify-center">
        &#8592; Back to Projects
      </Link>
    </div>
  );
};

export default ZestyBite;
