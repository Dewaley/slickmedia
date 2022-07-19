import { useState, useEffect } from 'react';
import SearchList from './SearchList';
import MovieList from './MovieList';

const Movies = () => {
  const [search, setSearch] = useState('');
  const [searched, setSearched] = useState();
  const fetchSearch = async () => {
    const res = await fetch(
      `https://www.omdbapi.com/?apiKey=17b9017e&s=${search}`
    );
    const data = await res.json();
    setSearched(data.Search);
  };
  useEffect(() => {
    fetchSearch();
  }, [search]);

  return (
    <div className='px-8'>
      <form action='' className='flex flex-col my-4'>
        <span>Search</span>
        <input
          type='text'
          name=''
          id=''
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='border-2 border-black'
        />
      </form>
      {search !== '' ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4'>
          {searched &&
            searched.map((movie) => {
              return <SearchList image={movie.Poster} title={movie.Title} />;
            })}
        </div>
      ) : (
        <div className='overflow-hidden'>
          <MovieList name={'Batman'} />
          <MovieList name={'Avengers'} />
          <MovieList name={'Lord of the rings'} />
          <MovieList name={'Harry Potter'} />
        </div>
      )}
    </div>
  );
};

export default Movies;
