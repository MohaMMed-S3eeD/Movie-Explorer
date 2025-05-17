import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "./Card";
import { useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { GSDevTools } from "gsap/GSDevTools";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, GSDevTools, ScrollTrigger);
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
}

const GetData = () => {
  const [search, setSearch] = useState("");
  const [dataSearch, setDataSearch] = useState([]);
  const Api_Key =
    "https://api.themoviedb.org/3/movie/popular?api_key=5a23d51eb14dc6a2d13ea339428fb84b&language=ar-EG&page=1";

  const { data, isLoading, error } = useQuery({
    queryKey: ["movies"],
    queryFn: () => axios.get(Api_Key),
  });

  const handleSearch = async () => {
    const searchApi = `https://api.themoviedb.org/3/search/movie?api_key=5a23d51eb14dc6a2d13ea339428fb84b&query=${search}`;
    const { data: dataSearch1 } = await axios.get(searchApi);
    setDataSearch(dataSearch1.results);
    console.log(dataSearch);
  };

  useGSAP(() => {
    gsap.fromTo(
      ".section-title",
      { opacity: 0 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".section-title",
          start: "top bottom-=100",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });

  return (
    <div className="bg-[#08161E] min-h-screen">
      {isLoading && (
        <div className="text-center py-10 text-white">Loading...</div>
      )}
      {error && (
        <div className="text-center py-10 text-red-500">
          Error: {error.message}
        </div>
      )}
      <div className="relative mt-20 mb-4 sm:mb-5 md:mb-6 mx-auto px-4 sm:px-6 md:px-8 max-w-md w-full">
        <div className="relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search for movies..."
            className="w-full bg-black bg-opacity-50 text-white border border-gray-600 rounded-md py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
          <button
            onClick={() => handleSearch()}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-400 text-black px-4 py-2 rounded-md"
          >
            Search
          </button>
        </div>
      </div>
      <div className="section-title  flex items-center gap-3 mb-4 px-4 sm:px-5 md:px-5 lg:mx-60">
        <div className="w-1 h-8 bg-yellow-400 rounded-full"></div>
        <h1 className="text-white text-xl font-bold">Search Results</h1>
      </div>
      {search ? (
        <div>
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-6 md:px-8 lg:mx-60 lg:p-5">
            {dataSearch.map((movie: Movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-white text-center text-2xl font-bold mb-10">
            No results found
          </h1>
        </div>
      )}
      {data && (
        <div className="px-4 sm:px-6 md:px-8 lg:mx-60 lg:p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-8 bg-yellow-400 rounded-full"></div>
            <h1 className="section-title text-white text-xl font-bold">
              Popular Movies
            </h1>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.data.results.map((movie: Movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GetData;
