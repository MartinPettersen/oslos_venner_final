"use client";
import { Reply } from "@/types/Reply";
import React, { useState } from "react";
import ReportToggle from "../(report)/ReportToggle";
import ShareToggle from "../(share)/ShareToggle";
import DeleteButton from "./DeleteButton";

type Props = {
  subjectType: String;
  subjectId?: String;
  creator: boolean;
};

const DotMenu = ({ subjectType, subjectId, creator }: Props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
      {!toggleMenu ? (
        <div
          onClick={() => setToggleMenu(true)}
          className="font-bold  flex items-start justify-start cursor-pointer text-soft-pink dark:text-dark-grey hover:drop-shadow-xl  relative hover:bottom-[2px] hover:right-[3px]
          "
        >{`\u00B7\u00B7\u00B7`}</div>
      ) : (
        <>
          <div
            onClick={() => setToggleMenu(false)}
            className="flex z-[10] absolute top-0 left-0 w-screen h-screen "
          ></div>

          <div className="flex text-lg font-normal flex-col items-center justify-center p-2 rounded-xl dark:rounded-none gap-1 z-[90] fixed sm:fixed right-[5%] sm:right-auto h-30 w-30 bg-green dark:bg-gradient-to-b from-dark-grey to-black">
            <ReportToggle subjectType={subjectType} subjectId={subjectId} />
            <ShareToggle subjectType={subjectType} subjectId={subjectId} />
            {creator ? (
              <>
                <DeleteButton subjectType={subjectType} subjectId={subjectId} />
                <div
                  className="bg-light-brown rounded-full dark:rounded-none px-4 cursor-pointer dark:bg-gradient-to-r hover:drop-shadow-xl  relative hover:bottom-[2px] hover:right-[3px]
 from-orange to-pink text-soft-pink dark:text-dark-grey w-full flex items-center justify-center"
                >
                  Edit
                </div>
              </>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default DotMenu;
