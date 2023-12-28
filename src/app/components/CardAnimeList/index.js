import React from 'react';

const CardAnimeList = ({ anime }) => {
  return (
    <>
      <div className="bg-base-100 shadow-lg border">
        <img src={anime.images.webp.image_url} alt="anime_image" />
        <h2 className="card-title">{anime.title}</h2>
        <p>Rating : {anime.score}</p>
      </div>
    </>
  );
};

export default CardAnimeList;
