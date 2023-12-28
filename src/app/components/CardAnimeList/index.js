import React from 'react';
import Link from 'next/link';

const CardAnimeList = ({ anime }) => {
  return (
    <div className="bg-base-100 shadow-lg border overflow-hidden">
      <img
        className="w-full max-h-48"
        src={anime.images.webp.image_url}
        alt={`Image of ${anime.title}`}
      />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{anime.title}</h2>
        <p className="text-gray-600">Rating: {anime.score}</p>
        <Link href={`/detail-anime/${anime.mal_id}`} className="btn bg-[tomato] inline-block mt-2">
          Detail
        </Link>
      </div>
    </div>
  );
};

export default CardAnimeList;
