import React from 'react';
import Link from 'next/link';

const CardAnimeList = ({ topAnime }) => {
  return (
    <div className='md:m-10 m-4 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
      {topAnime.data.map((anime, i) => {
        return (
          <div key={i} className="card bg-orange-300 border shadow-md rounded-xl flex flex-col">
            <img
              className="w-full md:max-h-60 max-h-52 rounded-xl object-cover"
              src={anime.images.webp.image_url}
              alt="image"
            />
            <div className="p-4 flex flex-col justify-between flex-1">
              <h4 className="text-xl font-semibold tracking-tight">{anime.title}</h4>
              <div className="mt-3 max-w-52 mb-1">
                <p className="mb-4 leading-normal">Rating : {anime.score}</p>
                <Link
                  href={`/detail-anime/${anime.mal_id}`}
                  className="px-4 py-2 text-center text-sm text-white bg-orange-600 hover:bg-orange-500 rounded-lg shadow">
                  Detail
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default CardAnimeList;
