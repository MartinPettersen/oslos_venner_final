import React from 'react'
import ReportBar from './ReportBar'
import AdminReportContent from './AdminReportContent'

const AdminReports = () => {
  return (
    <div className="flex w-full h-full items-center pt-4 justify-start flex-col sm:gap-12">
        <ReportBar />
        <AdminReportContent />

    </div>

  )
}

export default AdminReports