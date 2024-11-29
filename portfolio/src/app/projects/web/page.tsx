import Head from 'next/head';
import Link from 'next/link';

const WebProject = () => {
  return (
    <div className="font-mono flex flex-col min-h-screen">
      <Head>
        <title>Project - This Website</title>
      </Head>

      <div className="ml-4 mt-24 sm:ml-10 lg:ml-20 flex-grow sm:mr-10 lg:mr-16">
        <p className="text-6xl mb-6 font-semibold">This Website</p>
        <p className="text-lg mb-4">This website is a personal portfolio showcasing my skills, projects, and achievements. It serves as a platform to demonstrate my expertise in full-stack development, design, and problem-solving.</p>

        <p className="font-medium text-xl mt-4">Frontend:</p>
        <p className="text-lg">Built with Next.js and Tailwind CSS, providing a fast and responsive user experience.</p>

        <div className="mt-6">
        <a href="https://github.com/Shreyansh301" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
      </div>

      <Link href="/portfolio" className="flex justify-center">
        &#8592; back to projects
      </Link>
    </div>
  );
};

export default WebProject;

      
      
