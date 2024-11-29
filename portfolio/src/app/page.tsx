import Head from "next/head";

export default function Home() {
  return (
    <div className="font-mono flex flex-col min-h-screen">
      <Head>
        <title>Portfolio-Shreyansh-Srivastava</title>
      </Head>

      <div className="ml-4 mt-24 sm:ml-10 lg:ml-20 flex-grow">
        <div>
          <p className="text-9xl">Hi,</p>
          <p className="text-4xl mt-4 mr-6">I'm an Engineering Undergrad...</p>
        </div>
        <div className="text-lg mt-4 mr-6">
          <p>
            I am a passionate software developer with hands-on experience in
            cloud computing (AWS, GCP), frontend and backend development, and
            DevOps practices. Outside of coding, I enjoy analyzing the stock
            market and exploring market trends. I also stay up-to-date with
            industry trends and share insights on platforms like Quora and
            Medium.
          </p>

          <p className="mt-4">
            Feel free to explore my portfolio to see some of my projects and
            work.
          </p>
        </div>
      </div>
    </div>
  );
}
