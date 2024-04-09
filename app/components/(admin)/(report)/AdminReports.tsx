'use client'
import React, { useState } from 'react'
import ReportBar from './ReportBar'
import AdminReportContent from './AdminReportContent'

const AdminReports = () => {

  const [reportType, setReportType] = useState('user');

  return (
    <div className="flex w-full h-full items-center pt-4 justify-start flex-col sm:gap-12">
        <ReportBar setReportType={setReportType} />
        <AdminReportContent reportType={reportType}/>

    </div>

  )
}

export default AdminReports