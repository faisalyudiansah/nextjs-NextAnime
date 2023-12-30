import CardAnimeList from "@/components/CardAnimeList";
import HeaderAnimeList from "@/components/CardAnimeList/HeaderAnimeList";

export default async function Home() {
  let response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + '/top/anime?limit=8')
  let topAnime = await response.json()

  return (
    <>
      <section>
        <HeaderAnimeList headerTitle="Top-Rated Anime Series" linkTitle="See All" linkHref="/popular" />
        <CardAnimeList animes={topAnime} />
      </section>
    </>
  )
}