const contact = () => {
  return (
    <div className="font-mono flex flex-col min-h-screen">
      <div className="ml-4 mt-24 sm:ml-10 lg:ml-20 flex-grow">
        <div className="text-6xl mb-6">
          <p>Contact</p>
        </div>
        <div className="text-lg">
          <p className="mt-4">I'd love to hear from you.</p>
          <p>
            You can email me at{" "}
            <a href="mailto:shreyanshsriv5@gmail.com" target="_blank">
              shreyanshsriv5@gmail.com
            </a>{" "}
          </p>
          <p>Or connect through my</p>
          <p>
            <a href="https://www.linkedin.com/in/srshrey/" target="_blank">
              LinkedIn
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/Shreyansh301"
              target="_blank"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default contact;
