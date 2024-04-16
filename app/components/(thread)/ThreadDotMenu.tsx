"use client";
import React, { useState } from "react";
import ReportToggle from "../(report)/ReportToggle";
import ShareToggle from "../(share)/ShareToggle";
import DeleteThread from "./DeleteThread";

type Props = {
  subjectType: String,
  subjectId?: String,
}

const ThreadDotMenu = ({ subjectType, subjectId}: Props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      <div
        onClick={() => setToggleMenu(true)}
        className="font-bold text-3xl flex items-end justify-end cursor-pointer rounded-full p-1 px-2 bg-green "
      >
        {`\u00B7\u00B7\u00B7`}
      </div>
      {!toggleMenu ? null : (
        <>
          <div
            onClick={() => setToggleMenu(false)}
            className="flex z-[10] absolute top-0 left-0 w-screen h-screen "
          ></div>

          <div className="flex flex-col items-center justify-center p-2 rounded-xl dark:rounded-none gap-1 z-[100] fixed sm:fixed right-[5%] sm:right-auto h-30 w-30 bg-green dark:bg-gradient-to-b from-dark-grey to-black">
            
            <ReportToggle subjectType={subjectType} subjectId={subjectId} />
            <ShareToggle subjectType={subjectType} subjectId={subjectId}/>

            <DeleteThread subjectType={subjectType} subjectId={subjectId} />
            <div
              className="bg-light-brown rounded-full dark:rounded-none px-4 cursor-pointer dark:bg-gradient-to-r hover:drop-shadow-xl  relative hover:bottom-[2px] hover:right-[3px]
 from-orange to-pink text-soft-pink dark:text-dark-grey w-full flex items-center justify-center"
            >
              Edit
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ThreadDotMenu;
