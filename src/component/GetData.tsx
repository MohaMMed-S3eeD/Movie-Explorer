import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const GetData = () => {
  const Api_Key =
    "https://api.themoviedb.org/3/movie/popular?api_key=5a23d51eb14dc6a2d13ea339428fb84b&language=ar-EG&page=1";

  const { data, isLoading, error } = useQuery({
    queryKey: ["movies"],
    queryFn: () => axios.get(Api_Key),
  });

  console.log(data);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && (
        <div className=" flex flex-col">
          {data.data.results.map((movie: any) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h1>{movie.title}</h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetData;
