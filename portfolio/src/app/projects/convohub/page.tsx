import Head from 'next/head';
import Link from 'next/link';

const ConvoHub = () => {
  return (
    <div className="font-mono flex flex-col min-h-screen">
      <Head>
        <title>Project - ConvoHub</title>
      </Head>

      <div className="ml-4 mt-24 sm:ml-10 lg:ml-20 flex-grow sm:mr-10 lg:mr-16">
        <p className="text-6xl mb-6 font-semibold">ConvoHub</p>
        <p className="text-lg mb-4">
          A real-time web chat app allowing users to create rooms for secure, instant messaging.
        </p>

        <p className="font-medium text-xl mt-4">🚀 Features:</p>
        <ul className="text-lg list-disc pl-6">
          <li>Create and join chat rooms for quick messaging</li>
          <li>Real-time communication with Socket.io</li>
          <li>Interactive and responsive UI</li>
        </ul>

        <p className="font-medium text-xl mt-6">🔧 Tech Stack:</p>
        <ul className="text-lg list-disc pl-6">
          <li>Socket.io: For real-time, bidirectional communication</li>
          <li>Postgres: Scalable database management</li>
          <li>Next.js & TypeScript: For building an interactive, responsive web app</li>
        </ul>

        <div className="mt-6">
          <a 
            href="https://github.com/Shreyansh301/ConvoHub" 
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

export default ConvoHub;
