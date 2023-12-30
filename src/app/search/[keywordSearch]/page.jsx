import CardAnimeList from "@/components/CardAnimeList";
import HeaderAnimeList from "@/components/CardAnimeList/HeaderAnimeList";

export default async function searchPage({ params }) {
  let response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + `/anime?q=${params.keywordSearch}`)
  let searchAnime = await response.json()

  return (
    <>
      <section>
        <HeaderAnimeList headerTitle={`Search Results for "${decodeURIComponent(params.keywordSearch)}"...`} />
        <CardAnimeList animes={searchAnime} />
      </section>
    </>
  )
}