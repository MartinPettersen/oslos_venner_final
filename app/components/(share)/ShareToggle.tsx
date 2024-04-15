'use client'
import React, { useState } from "react";
import PopupWindow from "../(util)/PopupWindow";
import ReportForm from "../(report)/ReportForm";
import ShareWindow from "./ShareWindow";

type Props = {
    subjectType: String,
    subjectId?: String,
}

const ShareToggle = ({ subjectType, subjectId}: Props) => {
  const [toggle, setToggle] = useState(false);


  return (
    <div>
      <div onClick={() => setToggle(true)}
        className="bg-light-brown  rounded-full dark:rounded-none px-4 cursor-pointer dark:bg-gradient-to-r hover:drop-shadow-xl  relative hover:bottom-[2px] hover:right-[3px]
 from-orange to-pink text-soft-pink dark:text-dark-grey w-full flex items-center justify-center"
      >
        Del
      </div>
      <PopupWindow toggleWindow={toggle} setToggleWindow={setToggle}>
        <ShareWindow subjectType={subjectType} subjectId={subjectId} />
      </PopupWindow>
    </div>
  );
};

export default ShareToggle;
