"use client";

import React, { useEffect, useState } from "react";

type Props = {
  params: { user: string };
};

const page = ({ params }: Props) => {
  const userName = params.user;


  return (
    <div className="flex justify-center flex-col gap-4 sm:gap-10 w-screen items-center p-4">
      <div className="bg-slate-500  p-4 w-full sm:w-[60%] flex">
      
        <div className="w-full flex flex-col gap-2 sm:gap-4 sm:p-4 ">
          <h1 className="text-orange-300 font-bold text-4xl flex items-center justify-center ">
            {userName.replace("%20", " ")}
          </h1>

        </div>
      </div>
      
    </div>
  );
};

export default page;
