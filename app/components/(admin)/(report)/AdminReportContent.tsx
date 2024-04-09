"use client";
import React, { useEffect, useState } from "react";
import { Report } from "@/types/Report";
import ReportedReply from "./ReportedReply";
import ButtonReport from "./ButtonReport";

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
          <div key={index} className="flex flex-col gap-2 text-soft-pink">
            <div className="bg-green rounded-xl dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:rounded-none dark:text-dark-grey p-1 px-3 sm:w-[30%]">
              Rapportert av: {report.userName}
            </div>
            <div className="bg-green rounded-xl dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:rounded-none dark:text-dark-grey p-1 px-3 sm:w-[30%]">
              Grunn: {report.reason}
            </div>
            <ReportedReply subjectId={report.subjectId} />
            <div className="flex gap-2">
              <div >
                
                <ButtonReport label="Slett" />
              </div>
              <div >
                <ButtonReport label={report.subjectType !== "user" ? "Se Tråd" : "Se Bruker"} />

                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminReportContent;
