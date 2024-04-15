'use client'
import React, { useState } from "react";
import PopupWindow from "../(util)/PopupWindow";
import ReportForm from "./ReportForm";

type Props = {
    subjectType: String,
    subjectId?: String,
}

const ReportToggle = ({ subjectType, subjectId}: Props) => {
  const [toggle, setToggle] = useState(false);

  console.log(toggle)

  return (
    <div>
      <div onClick={() => setToggle(true)}
        className="bg-light-brown rounded-full dark:rounded-none px-4 cursor-pointer dark:bg-gradient-to-r hover:drop-shadow-xl  relative hover:bottom-[2px] hover:right-[3px]
 from-orange to-pink text-soft-pink dark:text-dark-grey w-full flex items-center justify-center"
      >
        Rapporter
      </div>
      <PopupWindow toggleWindow={toggle} setToggleWindow={setToggle}>
        <ReportForm subjectType={subjectType} subjectId={subjectId} setToggleWindow={setToggle} />
      </PopupWindow>
    </div>
  );
};

export default ReportToggle;
