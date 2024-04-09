import { Report } from "@/types/Report";
import React from "react";
import ReportedReply from "./ReportedReply";
import ButtonReport from "./(reportUtils)/ButtonReport";
import ReportPlacard from "./(reportUtils)/ReportPlacard";
import UserDisplayPlacard from "./(reportUtils)/UserDisplayPlacard";
import ThreadDisplayPlacard from "./(reportUtils)/ThreadDisplayPlacard";

type Props = {
  report: Report;
};

const ReportCard = ({ report }: Props) => {
  return (
    <div className="flex flex-col gap-2 text-soft-pink">
      <ReportPlacard label={`Rapportert av: ${report.userName}`} />

      <ReportPlacard label={` Grunn: ${report.reason}`} />

      {report.subjectType !== "user" ? null : (
        <UserDisplayPlacard subjectId={report.subjectId} />
      )}
      {report.subjectType !== "thread" ? null : 
        <ThreadDisplayPlacard subjectId={report.subjectId} /> 
      }
      {report.subjectType !== "post" ? null : (
        <ReportedReply subjectId={report.subjectId} />
      )}
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
