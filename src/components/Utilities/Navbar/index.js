import React from 'react'
import Link from 'next/link'
import InputSearch from './InputSearch'

const Navbar = () => {
  return (
    <>
      <header className="bg-[tomato] ">
        <div className='text-white flex md:flex-row flex-col justify-between md:mx-5 md:p-5 p-4 gap-2'>
          <Link href={'/'} className='font-serif font-bold text-2xl'>NEXTANIME</Link>
          <InputSearch />
        </div>
      </header>
    </>
  )
}

export default Navbar