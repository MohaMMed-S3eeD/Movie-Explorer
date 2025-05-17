import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, GSDevTools, ScrollTrigger);

const Home = ({ className }: { className: string }) => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".Home",
      { opacity: 0, x: -100, delay: 2 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <div
      className={`${className} relative w-full min-h-screen flex items-center`}
      style={{
        backgroundImage: "url('src/assets/1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="Home w-full sm:w-[90%] md:w-[80%] lg:w-[50%] min-h-[auto] sm:min-h-0 md:min-h-0 absolute left-0 sm:left-[5%] md:left-[10%] lg:left-[10%] top-[50%] sm:top-[50%] md:top-[50%] lg:top-[50%] -translate-y-1/2 px-4 sm:px-8 md:px-10 lg:px-20 py-6 sm:py-8 z-10 flex flex-col justify-start text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-0.5 sm:mb-1">
          Spider man
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3 sm:mb-4">
          No Way Home
        </h2>
        <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2 sm:mb-3">
          <span className="text-yellow-400 text-lg sm:text-xl font-bold">
            8.2
          </span>
          <span className="text-gray-400 text-sm sm:text-base">(12,827)</span>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base mb-2 sm:mb-3 sm:mb-4">
          <span>2021</span>
          <span>1 hour 55 minutes</span>
          <span>Sci-fi</span>
        </div>
        <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-5 sm:mb-6 max-w-2xl">
          Scelerisque sed ultricies tristique. Mi in vivamus aliquam varius eu
          felis. Id ultricies diam turpis mi tincidunt...
        </p>
        <div className="flex flex-col xs:flex-row sm:flex-row gap-2 sm:gap-3 sm:gap-4 w-full">
          <button className="bg-[#F5C51C] hover:bg-amber-600 px-4 sm:px-5 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-medium text-black w-full xs:w-auto sm:w-auto">
            Watch trailer
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black transition-colors px-4 sm:px-5 py-2.5 sm:py-3 rounded-md text-sm sm:text-base font-medium w-full xs:w-auto sm:w-auto">
            Watch now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
