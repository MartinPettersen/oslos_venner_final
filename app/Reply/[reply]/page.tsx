"use client";

import ReplyDisplay from "@/app/components/(reply)/ReplyDisplay";
import React, { useEffect, useState } from "react";

type Props = {
  params: { reply: string };
};

const page = ({ params }: Props) => {
  const replyId = params.reply;

  return (
    <div className="flex justify-center h-screen w-screen items-center p-4">
      <div className=" p-4 w-full sm:w-[60%] flex">
          <div className="w-full flex flex-col gap-2 sm:p-4 ">
            <ReplyDisplay replyId={replyId!} />
          </div>
      </div>
    </div>
  );
};

export default page;
