'use client'
import React, { useRef } from 'react'
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from 'next/navigation'

const InputSearch = () => {
  let searchRef = useRef()
  let routerNavigate = useRouter()

  let handleSearchRef = () => {
    let keywordSearch = searchRef.current.value
    if (!keywordSearch || keywordSearch.length <= 2) return
    routerNavigate.push(`/search/${keywordSearch}`)
    searchRef.current.value = ''
  }

  return (
    <>
      <div className='relative'>
        <input
          className='w-full p-1 rounded-xl text-orange-600 border outline-none placeholder-orange-200'
          style={{ textIndent: '10px' }}
          placeholder='Search anime...'
          ref={searchRef}
          onKeyDown={(event) => event.key === 'Enter' && handleSearchRef()}
        />
        <button className='absolute top-1 end-2'>
          <MagnifyingGlass
            className='text-orange-600 hover:text-orange-400'
            size={24}
            onClick={handleSearchRef}
          />
        </button>
      </div>
    </>
  )
}

export default InputSearch