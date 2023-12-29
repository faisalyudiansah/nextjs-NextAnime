'use client'
import React, { useEffect } from 'react'
import { FileSearch } from "@phosphor-icons/react"
import Link from 'next/link'

const Page = () => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'visible'
        }
    }, [])

    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='text-center'>
                <div className='mb-2'>
                    <FileSearch size={44} className='mx-auto' />
                </div>
                <h2 className='text-4xl font-bold mb-2'>404 | Not Found</h2>
                <p className='text-orange-500'>The page you're looking for does not exist.</p>
                <Link href={'/'} className='text-orange-500 underline'>Back to homepage</Link>
            </div>
        </div>
    )
}

export default Page