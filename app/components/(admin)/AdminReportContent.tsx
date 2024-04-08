'use client'
import React, { useEffect, useState } from 'react'

const AdminReportContent = () => {

    const [reports, setReports] = useState<Report[]>();

    const status = "clear";


    const getReports = async () => {
        const res = await fetch("/api/Reports/GetReports", {
          method: "POST",
          body: JSON.stringify({ status }),
          headers: new Headers({ "content-type": "application/json" }),
        });
        if (!res.ok) {
          const response = await res.json();
          console.log(response.message);
        } else {
          const temp = await res.json();
          setReports(temp.data);
        }
      };
    
      useEffect(() => {
        getReports();
      }, []);

  return (
    <div>reports {reports?.length} s</div>
  )
}

export default AdminReportContent