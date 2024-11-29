import Head from 'next/head';
import Link from 'next/link';

const ECommerceApp = () => {
  return (
    <div className="font-mono flex flex-col min-h-screen">
      <Head>
        <title>Project - E-Commerce App</title>
      </Head>

      <div className="ml-4 mt-24 sm:ml-10 lg:ml-20 flex-grow sm:mr-10 lg:mr-16">
        <p className="text-6xl mb-6 font-semibold">E-Commerce App</p>
        <p className="text-lg mb-4">
          A streamlined e-commerce platform with essential features like user authentication, product listings, shopping cart, and a checkout process.
        </p>

        <p className="font-medium text-xl mt-4">🚀 Features:</p>
        <ul className="text-lg list-disc pl-6">
          <li>Sign up, login, and logout functionality with Firebase Authentication</li>
          <li>Product listings fetched from a mock database</li>
          <li>Shopping cart management</li>
          <li>Checkout process with cart summary</li>
        </ul>

        <p className="font-medium text-xl mt-6">🔧 Tech Stack:</p>
        <ul className="text-lg list-disc pl-6">
          <li>Frontend: React, JavaScript, CSS</li>
          <li>Backend: Firebase for authentication and database</li>
          <li>State Management: Redux</li>
          <li>API Requests: Axios</li>
          <li>Hosting: Firebase Hosting</li>
        </ul>

        <div className="mt-6">
          <a 
            href="https://github.com/Shreyansh301/Amazon" 
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

export default ECommerceApp;
