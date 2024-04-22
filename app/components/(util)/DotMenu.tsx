"use client";
import React, { useState } from "react";
import ReportToggle from "../(report)/ReportToggle";
import ShareToggle from "../(share)/ShareToggle";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import PopupWindow from "./PopupWindow";
import DeleteWindow from "./DeleteWindow";

type Props = {
  subjectType: String;
  subjectId?: String;
  creator: boolean;
  setEditToggle?: React.Dispatch<React.SetStateAction<boolean>>;
};

const DotMenu = ({ subjectType, subjectId, creator, setEditToggle }: Props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [toggleWindow, setToggleWindow] = useState(false);

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
                <DeleteButton

                  label={"Slett"}
                  setToggleWindow={setToggleWindow}
                  setToggleMenu={setToggleMenu}
                />
                <EditButton setEditToggle={setEditToggle} />
              </>
            ) : null}
          </div>
        </>
      )}

      <PopupWindow
        setToggleWindow={setToggleWindow}
        toggleWindow={toggleWindow}
      >

        <DeleteWindow subjectType={subjectType} subjectId={subjectId} setToggleWindow={setToggleWindow}/>
      </PopupWindow>
    </div>
  );
};

export default DotMenu;
