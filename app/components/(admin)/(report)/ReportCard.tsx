import { Report } from "@/types/Report";
import React from "react";
import ReportedReply from "./ReportedReply";
import ButtonReport from "./(reportUtils)/ButtonReport";
import ReportPlacard from "./(reportUtils)/ReportPlacard";
import UserDisplayPlacard from "./(reportUtils)/UserDisplayPlacard";
import ThreadDisplayPlacard from "./(reportUtils)/ThreadDisplayPlacard";
import Link from "next/link";

type Props = {
  report: Report;
};

const ReportCard = ({ report }: Props) => {

  const getUrlPath = () => {
    if (report.subjectType !== "post") {
      const subject = report.subjectType.charAt(0).toUpperCase() + report.subjectType.slice(1)
      return `../${subject}/${report.subjectId}`
    } else {
      const subject = "Reply"
      return `../${subject}/${report.subjectId}`
    }
  }

  return (
    <div className="flex flex-col gap-2 text-soft-pink">
      <ReportPlacard label={`Rapportert av: ${report.userName}`} />

      <ReportPlacard label={` Grunn: ${report.reason}`} />

      {report.subjectType !== "user" ? null : (
        <UserDisplayPlacard subjectId={report.subjectId} />
      )}
      {report.subjectType !== "thread" ? null : (
        <ThreadDisplayPlacard subjectId={report.subjectId} />
      )}
      {report.subjectType !== "post" ? null : (
        <ReportedReply subjectId={report.subjectId} />
      )}
      <div className="flex gap-2">
        <div>
          <ButtonReport label="Slett" />
        </div>
        <Link href={getUrlPath()}>
          <ButtonReport
            label={report.subjectType !== "user" ? "Se Tråd" : "Se Bruker"}
          />
        </Link>
      </div>
    </div>
  );
};

export default ReportCard;
