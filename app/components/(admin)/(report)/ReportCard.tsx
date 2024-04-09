import { Report } from "@/types/Report";
import React from "react";
import ReportedReply from "./ReportedReply";
import ButtonReport from "./ButtonReport";

type Props = {
  report: Report;
};

const ReportCard = ({ report }: Props) => {
  return (
    <div className="flex flex-col gap-2 text-soft-pink">
      <div className="bg-green rounded-xl dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:rounded-none dark:text-dark-grey p-1 px-3 sm:w-[30%]">
        Rapportert av: {report.userName}
      </div>
      <div className="bg-green rounded-xl dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:rounded-none dark:text-dark-grey p-1 px-3 sm:w-[30%]">
        Grunn: {report.reason}
      </div>
      <ReportedReply subjectId={report.subjectId} />
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
