import { useState } from "react";

const Nav = ({ className }: { className: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Links = [
    {
      name: "New Movie",
      path: "/NewMovie",
    },
    {
      name: "Top Movie",
      path: "/TopMovie",
    },
    {
      name: "Search",
      path: "/Search",
    },
  ];

  return (
    <div className={`${className} absolute top-0 left-0 z-50 flex justify-between md:justify-around items-center w-full px-4 py-4 md:p-4`}>
      <div className="w-1/3 sm:w-1/4 md:w-1/7">
        <img className="w-20 sm:w-24 md:w-28" src="src\assets\Frame 28.png" alt="Logo" />
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="block md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 lg:gap-14">
        <div className="relative">
          <a
            className="relative text-white font-semibold hover:text-amber-400 transition-colors duration-300 after:content-[''] after:absolute after:h-[3px] after:bg-amber-400 after:bottom-[-8px] after:left-0 after:transition-all after:duration-300 after:w-full"
            href="/"
          >
            Home
          </a>
        </div>
        {Links.map((link, index) => (
          <div className="relative" key={index}>
            <a
              className="relative text-white font-semibold hover:text-amber-400 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-amber-400 after:bottom-[-8px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
              href={link.path}
            >
              {link.name}
            </a>
          </div>
        ))}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black bg-opacity-90 flex flex-col items-center py-4 md:hidden">
          <div className="py-2">
            <a
              className="relative text-white font-semibold hover:text-amber-400 transition-colors duration-300"
              href="/"
            >
              Home
            </a>
          </div>
          {Links.map((link, index) => (
            <div className="py-2" key={index}>
              <a
                className="relative text-white font-semibold hover:text-amber-400 transition-colors duration-300"
                href={link.path}
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;
