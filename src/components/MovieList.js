import { useState, useEffect } from 'react';

const MovieList = ({ name }) => {
  const [movie, setMovie] = useState([]);
  const fetchMovies = async () => {
    const res = await fetch(
      `https://www.omdbapi.com/?apiKey=17b9017e&s=${name}`
    );
    const data = await res.json();
    console.log(data.Search);
    setMovie(data.Search);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className='mb-4'>
      <h1>{name}</h1>
      <div className='flex gap-x-2 overflow-scroll w-screen'>
        {movie &&
          movie.map((film) => {
            return (
              <div
                className={`h-[400px] md:min-w-[30vw] sm:min-w-[50vw] min-w-[70vw] flex justify-center items-center relative`}
              >
                <img
                  src={film.Poster}
                  alt=''
                  className='w-full h-full absolute top-0'
                />
                <span className='z-40 text-white text-2xl text-center'>
                  {film.Title}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MovieList;
