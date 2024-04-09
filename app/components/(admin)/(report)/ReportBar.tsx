import React from 'react'
import ButtonReport from './ButtonReport'

type Props = {
  setReportType: React.Dispatch<React.SetStateAction<string>>
}

const ReportBar = ({setReportType}: Props) => {
  return (
    <div className='flex flex-row gap-4  sm:w-[70%]'>
        <div onClick={() => setReportType('thread')} ><ButtonReport label="Tråder" /></div>
        <div onClick={() => setReportType('post')} ><ButtonReport label="Kommentarer" /></div>
        <div onClick={() => setReportType('user')} ><ButtonReport label="Brukere" /></div>
    </div>
  )
}

export default ReportBar