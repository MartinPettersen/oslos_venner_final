'use client'
import React from "react";

type Props = {
  children: React.ReactNode;
  toggleWindow: boolean;
  setToggleWindow: React.Dispatch<React.SetStateAction<boolean>>;
};

const PopupWindow = ({ children, toggleWindow, setToggleWindow }: Props) => {
    console.log(toggleWindow)
  return (
    <div>
      {toggleWindow ? (
        <>
          <div
            onClick={() => setToggleWindow(!toggleWindow)}
            className="fixed z-[10]   w-screen h-screen flex top-0 left-0 items-center justify-center"
          >
            {children}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default PopupWindow;
