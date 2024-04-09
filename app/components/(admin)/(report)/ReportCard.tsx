import { Report } from "@/types/Report";
import React from "react";
import ReportedReply from "./ReportedReply";
import ButtonReport from "./(reportUtils)/ButtonReport";
import ReportPlacard from "./(reportUtils)/ReportPlacard";

type Props = {
  report: Report;
};

const ReportCard = ({ report }: Props) => {
  return (
    <div className="flex flex-col gap-2 text-soft-pink">
      <ReportPlacard label={`Rapportert av: ${report.userName}`} />


      <ReportPlacard label={` Grunn: ${report.reason}`} />

      {report.subjectType !== "user" ? <></> : "Se Bruker"}
      {report.subjectType !== "thread" ? <></> : "Se Bruker"}
      {report.subjectType !== "post" ? <></> : 
      <ReportedReply subjectId={report.subjectId} />
      }
      <div className="flex gap-2">
        <div>
          <ButtonReport label="Slett" />
        </div>
        <div>
          <ButtonReport
            label={report.subjectType !== "user" ? "Se Tråd" : "Se Bruker"}
          />
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
