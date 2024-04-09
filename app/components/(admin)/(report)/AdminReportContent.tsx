"use client";
import React, { useEffect, useState } from "react";
import { Report } from "@/types/Report";
import ReportedReply from "./ReportedReply";
import ButtonReport from "./(reportUtils)/ButtonReport";
import ReportCard from "./ReportCard";

type Props = {
  reportType: String,
}

const AdminReportContent = ({reportType}: Props) => {
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
      console.log(temp.data);
    }
  };

  useEffect(() => {
    getReports();
  }, []);

  return (
    <div className=" sm:w-[70%] h-[70%] no-scrollbar overflow-y-auto">
      <div>{reports?.length} rapporter {reportType}</div>
      <div className="flex flex-col gap-8">
        {reports?.map((report, index) => (
          
          <ReportCard report={report} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default AdminReportContent;
