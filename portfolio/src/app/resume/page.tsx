const resume = () => {
  return (
    <div className="font-mono flex flex-col min-h-screen">
      <div className="ml-4 mt-24 sm:ml-10 lg:ml-20 flex-grow">
        <div className="text-6xl mb-6">
          <p>Resume</p>
          {/* Download Button */}
          <a
            href="https://drive.google.com/file/d/1eaEZk6Qcn9-Xs11tLYCVdWcWguUuMwc5/view?usp=sharing" // path to resume file 
            target="_blank"
            download="VIT_CSE_Shreyansh_Srivastava.pdf" // Name of the file when downloaded
            className="relative bg-gray-700 text-white text-sm py-1 px-3 rounded hover:bg-gray-800 shadow group"
          >
            Download Resume
            {/* Animated Border */}
            <span className="absolute inset-0 border-2 border-yellow-400 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform scale-105" />
          </a>
        </div>
        <div className="text-lg divide-y-4 divide-gray-600 divide-dashed pr-8 space-y-2 sm:pr-10 lg:pr-20">
          <div className="">
            <p className="mt-4 font-bold text-blue-300">technical skills</p>
            <div className="grid grid-cols-3 sm:flex sm:space-x-8">
              <p>HTML</p>
              <p>CSS</p>
              <p>Java</p>
              <p>React</p>
              <p>Next.js</p>
              <p>AWS</p>
              <p>MySQL</p>
              <p>MongoDB</p>
            </div>
          </div>
          <div className="">
            <p className="mt-4 font-bold text-purple-300">experience</p>

            <div className="pb-4">
              <p>ConvoHub | Sept 2024 - November 2024</p>
              <p className="font-semibold">
                Technologies: Socket.io, Postgres, Next.js, TypeScript
              </p>
              <ul className="list-inside list-disc pl-4 sm:pl-8">
                <li>
                  Developed a real-time chat application with Socket.io for
                  bi-directional communication.
                </li>
                <li>
                  Implemented a scalable backend using Postgres for database
                  management.
                </li>
                <li>
                  Built an interactive and responsive UI with Next.js and
                  TypeScript.
                </li>
                <li>
                  Ensured efficient data handling and optimized performance for
                  real-time updates.
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <p>
                Emergency Response and Information System | Dec 2023 - May 2024
              </p>
              <p className="font-semibold">Key Contributions</p>
              <ul className="list-inside list-disc pl-4 sm:pl-8">
                <li>
                  Led development of SOS button feature for swift emergency
                  notifications.
                </li>
                <li>
                  Implemented real-time location monitoring for enhanced
                  response efficiency.
                </li>
                <li>
                  Developed frontend for detailed issue description and
                  submission.
                </li>
                <li>
                  Collaborated on backend integration to ensure seamless
                  functionality.
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <p>Drowsiness Alert System | Feb 2022 - Aug 2023</p>
              <p className="font-semibold">Technologies: Computer Vision</p>
              <ul className="list-inside list-disc pl-4 sm:pl-8">
                <li>
                  Developed a Drowsiness Alert System using computer vision
                  techniques.
                </li>
                <li>
                  Implemented algorithms to detect driver drowsiness in
                  real-time.
                </li>
                <li>
                  Enhanced road safety through early detection and alert
                  mechanisms.
                </li>
              </ul>
            </div>
          </div>

          <div className="">
            <p className="mt-4 font-bold text-red-300">education</p>
            <div className="pb-4">
              <p>VIT Bhopal University | 2021 - 2025</p>
              <p>
                Computer Science and Engineering (Cloud Computing and
                Automation)
              </p>
            </div>
            <div className="pb-4">
              <p>DR A I Memo Sunbeam School | 2017 - 2020</p>
              <p>12th: 82.8%</p>
              <p>10th: 87%</p>
            </div>
          </div>
          <div className="">
            <p className="mt-4 font-bold text-green-300">certifications</p>
            <div className="pb-4">
              <p>Googe Cloud Digital Leader</p>
              <a
                href="https://drive.google.com/file/d/1bcvndZbe4qytuS56AEYi0odA5b_133RE/view?usp=sharing"
                target="_blank"
              >
                View Certificate
              </a>
            </div>
            <div className="pb-4">
              <p>High Performance Coding in Java</p>
              <a
                href="https://drive.google.com/file/d/1M0jYKGNgGeu58uYpz9rKz6Ggw9r0Jhtu/view?usp=sharing"
                target="_blank"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
