import React from 'react'

const Pagination = ({ page, setPage, lastPage }) => {
  function scrollPageToTop() {
    scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }

  function handleNextPagination() {
    setPage((prevState) => prevState + 1)
    scrollPageToTop()
  }

  function handlePrevPagination() {
    if (page > 1) {
      setPage((prevState) => prevState - 1)
      scrollPageToTop()
    }
  }

  return (
    <>
      <div className='flex justify-center items-center gap-4 mb-10'>
        <button
          onClick={handlePrevPagination}
          className={`p-2 rounded-lg ${page === 1 ? 'bg-orange-900 cursor-not-allowed text-neutral-400' : 'bg-orange-600 text-white hover:bg-orange-500'}`}
        >
          Prev
        </button>
        <p>{page} of {lastPage}</p>
        <button
          onClick={handleNextPagination}
          className='bg-orange-600 hover:bg-orange-500 text-white p-2 rounded-lg'
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Pagination