'use client'
import CardAnimeList from "./components/CardAnimeList";

export default async function Home() {
  let response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/top/anime')
  let animeList = await response.json()

  return (
    <>
      <div>Popular anime</div>
      <div className='grid grid-cols-3 gap-4'>
        {animeList.data.map((anime, i) => {
          return <CardAnimeList key={i} anime={anime} />
        })}
      </div>
    </>
  )
}