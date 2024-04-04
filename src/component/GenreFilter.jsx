import React from 'react';
import './display.css'
const GenreFilter = ({ genres }) => {
  const handleGenreClick = (genre) => {
    console.log(`Selected genre: ${genre} is rendering`);
  };

  return (
    <div className='filter'>
      <h2> Filter By Genres</h2>
      <div className="genre-buttons">
        {genres.map((genre, index) => (
          <button className="btn btn-secondary btns"key={index} onClick={() => handleGenreClick(genre)}>
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
