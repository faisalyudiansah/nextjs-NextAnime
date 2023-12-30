'use client'
import React, { useEffect } from 'react'

const LoadingPage = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [])

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='text-center'>
        <div className="custom-loader mx-auto mb-2"></div>
        <h2 className='text-4xl font-bold mb-2'>Loading...</h2>
      </div>
    </div>
  )
}

export default LoadingPage