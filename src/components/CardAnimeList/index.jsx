import React from 'react';
import Link from 'next/link';

const CardAnimeList = ({ animes }) => {
  return (
    <div className='md:m-10 m-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-4'>
      {animes.data?.map((anime, i) => (
        <div key={i} className="card bg-orange-300 shadow-md rounded-xl flex flex-col">
          <Link href={`/detail-anime/${anime.mal_id}`}>
            <img
              className="w-full h-72 md:h-96 object-cover rounded-t-xl"
              src={anime.images.webp.image_url}
              alt="image"
            />
          </Link>
          <div className="p-4 flex flex-col justify-between flex-1">
            <h4 className="text-xl text-black font-semibold tracking-tight">{anime.title}</h4>
            <div className="mt-3 max-w-52 mb-1">
              <p className="mb-4 leading-normal text-black">Rating : {anime.score}</p>
              <Link
                href={`/detail-anime/${anime.mal_id}`}
                className="px-4 py-2 text-center text-sm text-white bg-orange-600 hover:bg-orange-500 rounded-lg shadow">
                Detail
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardAnimeList;
