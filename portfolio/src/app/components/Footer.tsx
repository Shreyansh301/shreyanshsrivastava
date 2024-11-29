const Footer = () => {
    const today = new Date();
    return (
      <div className="ml-4 mb-4 mt-10 sm:ml-10 lg:ml-20 text-sm">
        <p>© {today.getFullYear()} Shreyansh Srivastava</p>
      </div>
    );
  };
  
export default Footer;
  