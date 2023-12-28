import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <header className="bg-[tomato] ">
        <div className='text-white flex md:flex-row flex-col justify-between md:mx-5 md:p-5 p-4 gap-2'>
          <div>
            <Link href={'/'} className='font-serif font-bold text-2xl'>NEXTANIME</Link>
          </div>
          <input
            type="text"
            className='p-1 rounded-xl'
            placeholder='Search anime...' />
        </div>
      </header>
    </>
  )
}

export default Navbar