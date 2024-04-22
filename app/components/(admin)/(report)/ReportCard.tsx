'use client'
import { Report } from "@/types/Report";
import React, { useState } from "react";
import ReportedReply from "./ReportedReply";
import ButtonReport from "./(reportUtils)/ButtonReport";
import ReportPlacard from "./(reportUtils)/ReportPlacard";
import UserDisplayPlacard from "./(reportUtils)/UserDisplayPlacard";
import ThreadDisplayPlacard from "./(reportUtils)/ThreadDisplayPlacard";
import Link from "next/link";
import DeleteButton from "../../(util)/DeleteButton";
import PopupWindow from "../../(util)/PopupWindow";
import DeleteWindow from "../../(util)/DeleteWindow";

type Props = {
  report: Report;
};

const ReportCard = ({ report }: Props) => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleWindow, setToggleWindow] = useState(false);
  
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
          <DeleteButton  label={"Slett"} setToggleWindow={setToggleWindow} setToggleMenu={setToggleMenu} />
        </div>
        <Link href={getUrlPath()}>
          <ButtonReport
            label={report.subjectType !== "user" ? "Se Tråd" : "Se Bruker"}
          />

        </Link>
      </div>
      <PopupWindow
        setToggleWindow={setToggleWindow}
        toggleWindow={toggleWindow}
      >

        <DeleteWindow subjectType={report.subjectType} subjectId={report.subjectId} setToggleWindow={setToggleWindow}/>
      </PopupWindow>
    </div>
  );
};

export default ReportCard;
