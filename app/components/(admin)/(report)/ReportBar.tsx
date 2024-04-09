import React from 'react'

const ReportBar = () => {
  return (
    <div className='flex flex-row gap-4  sm:w-[70%]'>
        <div className='rounded-full bg-green dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:rounded-none dark:text-dark-grey p-1 sm:px-8'>Tråder</div>
        <div className='rounded-full bg-green dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:rounded-none dark:text-dark-grey  p-1 sm:px-8'>Kommentarer</div>
        <div className='rounded-full bg-green dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:rounded-none dark:text-dark-grey  p-1 sm:px-8'>Brukere</div>

    </div>
  )
}

export default ReportBar