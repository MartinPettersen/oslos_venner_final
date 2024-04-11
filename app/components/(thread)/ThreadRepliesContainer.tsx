import { Thread } from "@/types/Thread";
import React from "react";
import ReplyDisplay from "../(reply)/ReplyDisplay";

type Props = {
    thread?: Thread
}

const ThreadRepliesContainer = ({thread}: Props) => {
  return (
    <div className="flex flex-col  w-full  sm:w-[40%] h-[40%]  sm:h-[50%] gap-2 overflow-scroll no-scrollbar overflow-y-auto items-start justify-start">
      {thread?.replies.map((reply, index) => (

          <ReplyDisplay replyId={reply} key={index}/>
      ))}
    </div>
  );
};

export default ThreadRepliesContainer;
