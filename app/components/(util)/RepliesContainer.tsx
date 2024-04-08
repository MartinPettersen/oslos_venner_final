"use client";
import { Thread } from "@/types/Thread";
import React from "react";
import ReplyDisplay from "../(reply)/ReplyDisplay";
import { Reply } from "@/types/Reply";

type Props = {
  replies: Reply[];
};

const RepliesContainer = ({ replies }: Props) => {
  console.log(replies);
  return (
    <div className="flex flex-col gap-2 no-scrollbar overflow-y-auto h-[20rem] items-center">
      {replies.map((reply, index: number) => (
          <ReplyDisplay replyId={reply.postId} key={index} />
      ))}
    </div>
  );
};

export default RepliesContainer;
