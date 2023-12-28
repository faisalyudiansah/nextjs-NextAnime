'use client'
import CardAnimeList from "./components/CardAnimeList";
import Link from 'next/link'

export default async function Home() {
  let response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/top/anime?limit=8')
  let animeList = await response.json()

  return (
    <>
      <div className="flex justify-between p-4">
        <div>Popular anime</div>
        <Link href={'/populer'} className="btn p-3 bg-[tomato] rounded-xl">Popular anime</Link>
      </div>
      <div className='m-4 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
        {animeList.data.map((anime, i) => {
          return <CardAnimeList key={i} anime={anime} />
        })}
      </div>
    </>
  )
}