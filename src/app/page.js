'use client'
import CardAnimeList from "@/components/CardAnimeList";
import Link from 'next/link'

export default async function Home() {
  let response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/top/anime?limit=8')
  let animeList = await response.json()

  return (
    <>
      <div className="flex justify-between items-center md:m-10 m-4">
        <h1 className="font-serif font-bold md:text-xl text-lg">Popular anime</h1>
        <Link
          href={'/populer'}
          className="text-white text-sm p-2 bg-orange-600 hover:bg-orange-500 rounded-lg">
          Popular anime
        </Link>
      </div>
      <section className='md:m-10 m-4 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4'>
        {animeList.data.map((anime, i) => {
          return <CardAnimeList key={i} anime={anime} />
        })}
      </section>
    </>
  )
}