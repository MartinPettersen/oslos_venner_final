'use client'
import { Thread } from "@/types/Thread";
import React from "react";
import ReplyDisplay from "../(reply)/ReplyDisplay";

type Props = {
    replies: String[]
}

const RepliesContainer = ({replies}: Props) => {
    console.log(replies)
  return (
    <div className="flex flex-col gap-2 overflow-scroll no-scrollbar overflow-y-auto items-center">
      {replies!.map((reply: String, index: number) => (

          <ReplyDisplay replyId={reply} key={index}/>
      ))}
    </div>
  );
};

export default RepliesContainer;