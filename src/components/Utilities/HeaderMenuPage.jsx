import React from 'react'

const HeaderMenuPage = ({ headerTitle, page }) => {
  return (
    <div className="md:m-10 m-4">
      <h1 className="font-serif text-center font-bold md:text-xl text-orange-600 text-lg">{headerTitle} #{page}</h1>
    </div>
  )
}

export default HeaderMenuPage