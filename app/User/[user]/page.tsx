"use client";

import React, { useEffect, useState } from "react";

type Props = {
  params: { user: string };
};

const page = ({ params }: Props) => {
  const userName = params.user;

  return (
    <div className="flex  flex-col  w-screen h-screen items-center p-4">
      <div className="h-1/5"></div>

      <div className="bg-green dark:bg-gradient-to-r from-orange to-pink w-[90%] p-4 rounded-xl dark:rounded-none flex flex-col gap-4 items-center justify-center">
        <div className="flex w-full items-center justify-center">
          <div className="w-1/6 "></div>
          <div className="text-xl w-4/6 flex justify-center items-center text-soft-pink dark:text-dark-grey">
            {userName.replace("%20", " ")}
          </div>
          <div className="w-1/6">...</div>
        </div>

        <div className="flex flex-col sm:flex-col gap-2"> 
            <div className="bg-brown dark:bg-gradient-to-b from-dark-grey to-black text-soft-pink dark:text-pink p-2 rounded-full dark:rounded-none flex items-center justify-center">Kommentarer</div>
            <div className="bg-brown dark:bg-gradient-to-b from-dark-grey to-black text-soft-pink dark:text-orange p-2 rounded-full dark:rounded-none flex items-center justify-center">Tråder</div>

        </div>
      </div>
    </div>
  );
};

export default page;
