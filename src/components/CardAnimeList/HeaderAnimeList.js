import React from 'react'
import Link from 'next/link'

const HeaderAnimeList = ({ headerTitle, linkTitle, linkHref }) => {
  return (
    <div className="flex justify-between items-center md:m-10 m-4">
      <h1 className="font-serif font-bold md:text-xl text-lg">{headerTitle}</h1>
      <Link
        href={linkHref}
        className="text-white text-sm p-2 bg-orange-600 hover:bg-orange-500 rounded-lg">
        {linkTitle}
      </Link>
    </div>
  )
}

export default HeaderAnimeList