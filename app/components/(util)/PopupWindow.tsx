"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  toggleWindow: boolean;
  setToggleWindow: React.Dispatch<React.SetStateAction<boolean>>;
};

const PopupWindow = ({ children, toggleWindow, setToggleWindow }: Props) => {
  console.log(toggleWindow);
  return (
    < >
      {toggleWindow ? (
        <div className="fixed top-0 left-0  w-screen h-screen flex items-center justify-center">
          {children}
          <div
            onClick={() => setToggleWindow(!toggleWindow)}
            className="absolute [z-10]  w-screen h-screen flex top-0 left-0 items-center justify-center"
          ></div>
        </div>
      ) : null}
    </>
  );
};

export default PopupWindow;
