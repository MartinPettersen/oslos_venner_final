"use client";

import React, { useEffect, useState } from "react";
import UserContent from "@/app/components/(user)/UserContent";
import DotMenu from "../(util)/DotMenu";

type Props = {
  userName: String;
};

const UserPage = ({ userName }: Props) => {
  const [contentType, setContentType] = useState("replies");

  return (
    <div className="flex  flex-col  w-screen h-screen items-center p-4 gap-4">
      <div className="h-1/5"></div>

      <div className="bg-green dark:bg-gradient-to-r from-orange to-pink w-[90%] sm:w-[30%] py-10 rounded-xl dark:rounded-none flex flex-col gap-4 items-center justify-center">
        <div className="flex w-full items-center justify-center">
          <div className="w-1/6 "></div>
          <div className="text-xl sm:text-3xl w-4/6 flex justify-center items-center text-soft-pink dark:text-dark-grey">
            {userName.replace("%20", " ")}
          </div>
          <div className="w-1/6 text-3xl font-bold">
            <DotMenu
              subjectType={"user"}
              subjectId={userName}
              creator={false}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-12">
          <div
            onClick={() => setContentType("replies")}
            className="bg-brown dark:bg-gradient-to-b from-dark-grey to-black text-soft-pink cursor-pointer dark:text-pink p-2 rounded-full dark:rounded-none flex items-center justify-center sm:font-bold drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px]
            "
          >
            Kommentarer
          </div>
          <div
            onClick={() => setContentType("threads")}
            className="bg-brown dark:bg-gradient-to-b from-dark-grey to-black text-soft-pink cursor-pointer dark:text-orange p-2 rounded-full dark:rounded-none flex items-center justify-center sm:font-bold drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px]
            "
          >
            Tråder
          </div>
        </div>
      </div>

      <div className="w-[90%] sm:w-[30%]">
        <UserContent userName={userName} contentType={contentType} />
      </div>
    </div>
  );
};

export default UserPage;
