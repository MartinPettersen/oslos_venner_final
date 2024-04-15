'use client'
import React, { useState } from "react";
import PopupWindow from "../(util)/PopupWindow";

const ReportToggle = () => {
  const [toggle, setToggle] = useState(false);

  console.log(toggle)

  return (
    <div>
      <div onClick={() => setToggle(true)}
        className="bg-light-brown rounded-full dark:rounded-none px-4 cursor-pointer dark:bg-gradient-to-r hover:drop-shadow-xl  relative hover:bottom-[2px] hover:right-[3px]
 from-orange to-pink text-soft-pink dark:text-dark-grey w-full flex items-center justify-center"
      >
        Rapporter f
      </div>
      <PopupWindow toggleWindow={toggle} setToggleWindow={setToggle}>
        <div>test</div>
      </PopupWindow>
    </div>
  );
};

export default ReportToggle;
