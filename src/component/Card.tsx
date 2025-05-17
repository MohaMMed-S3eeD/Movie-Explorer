import axios from "axios";
import { useState } from "react";
import Model from "./Model";

// gsap
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, GSDevTools, ScrollTrigger);

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
}

const Card = ({ movie }: { movie: Movie }) => {
  const api_Search_Id = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=5a23d51eb14dc6a2d13ea339428fb84b&language=ar-EG`;
  const [openModel, setOpenModel] = useState(false);

  const handleOpenModel = async () => {
    setOpenModel(true);
    const { data: dataSearch1 } = await axios.get(api_Search_Id);
    console.log(dataSearch1);
  };

  const handleCloseModel = () => {
    setOpenModel(false);
  };
  useGSAP(() => {
    gsap.fromTo(
      ".card",
      { opacity: 0, y: 50, scale :0.5},
      {
        opacity: 1,
        y: 0,
scale:1
        duration: 0.5,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: ".card",
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
  return (
    <div
      className={`card relative rounded-lg shadow-md overflow-hidden transition-all duration-300 transform  hover:shadow-xl hover:border-yellow-400 hover:border-2 cursor-pointer`}
    >
      <div key={movie.id}>
        <div className="relative">
          <img
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-110"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="absolute bottom-0 left-0 flex flex-col justify-end p-4 z-0 bg-gradient-to-t from-black/80 to-transparent w-full h-full transition-colors duration-300 hover:from-yellow-900/80">
          <h1 className="text-white text-2xl font-bold mb-1 drop-shadow-lg">
            {movie.title}
          </h1>
          <div className="flex items-center space-x-2">
            <span className="bg-yellow-500 text-black px-2 py-0.5 text-xs font-semibold rounded-md">
              {new Date(movie.release_date).getFullYear()}
            </span>
            <span className="text-gray-300 text-sm">{movie.release_date}</span>
          </div>
          <button
            onClick={() => handleOpenModel()}
            className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded-md cursor-pointer"
          >
            View Details
          </button>
        </div>
      </div>
      {openModel && <Model movie={movie} onClose={handleCloseModel} />}
    </div>
  );
};

export default Card;
