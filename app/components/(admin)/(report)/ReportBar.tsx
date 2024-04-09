import React from 'react'

type Props = {
  setReportType: React.Dispatch<React.SetStateAction<string>>
}

const ReportBar = ({setReportType}: Props) => {
  return (
    <div className='flex flex-row gap-4  sm:w-[70%]'>
        <div onClick={() => setReportType('thread')} className='rounded-full bg-green dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:rounded-none dark:text-dark-grey p-1 sm:px-8 cursor-pointer'>Tråder</div>
        <div onClick={() => setReportType('post')} className='rounded-full bg-green dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:rounded-none dark:text-dark-grey  p-1 sm:px-8 cursor-pointer'>Kommentarer</div>
        <div onClick={() => setReportType('user')} className='rounded-full bg-green dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:rounded-none dark:text-dark-grey  p-1 sm:px-8 cursor-pointer'>Brukere</div>

    </div>
  )
}

export default ReportBar