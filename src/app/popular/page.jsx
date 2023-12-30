'use client'
import React, { useEffect, useState } from 'react'
import CardAnimeList from '@/components/CardAnimeList'
import HeaderMenuPage from '@/components/Utilities/HeaderMenuPage'
import Pagination from '@/components/Utilities/Pagination'

const PopularPage = () => {
  const [page, setPage] = useState(1)
  const [dataAnime, setDataAnime] = useState([])

  async function fetchData() {
    try {
      let response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL + `/top/anime?page=${page}`)
      let data = await response.json()
      setDataAnime(data)
    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(() => {
    fetchData()
  }, [page])

  return (
    <>
      <HeaderMenuPage headerTitle="List of all popular anime" page={page} />
      <CardAnimeList animes={dataAnime} />
      <Pagination page={page} setPage={setPage} lastPage={dataAnime.pagination?.last_visible_page} />
    </>
  )
}

export default PopularPage