"use client";
import React, { useState } from "react";

const ThreadDotMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);



  return (
    <div>
      {!toggleMenu ? (
        <div
          onClick={() => setToggleMenu(true)}
          className="font-bold text-3xl flex items-start justify-start cursor-pointer"
        >{`\u00B7\u00B7\u00B7`}</div>
      ) : (
        <>
          <div
            onClick={() => setToggleMenu(false)}
            className="flex z-[10] absolute top-0 left-0 w-screen h-screen "
          ></div>

          <div className="flex flex-col items-center justify-center p-2 rounded-xl dark:rounded-none gap-1 z-[100] fixed sm:fixed right-[5%] sm:right-auto h-30 w-30 bg-green dark:bg-gradient-to-b from-dark-grey to-black">

            <div className="bg-light-brown rounded-full dark:rounded-none px-4 cursor-pointer dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:text-dark-grey w-full flex items-center justify-center">Rapporter</div>
            <div className="bg-light-brown rounded-full dark:rounded-none px-4 cursor-pointer dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:text-dark-grey w-full flex items-center justify-center">Del</div>
            <div className="bg-light-brown rounded-full dark:rounded-none px-4 cursor-pointer dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:text-dark-grey w-full flex items-center justify-center">Slett</div>
            <div className="bg-light-brown rounded-full dark:rounded-none px-4 cursor-pointer dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:text-dark-grey w-full flex items-center justify-center">Edit</div>

          </div>
        </>
      )}
    </div>
  );
};

export default ThreadDotMenu;
