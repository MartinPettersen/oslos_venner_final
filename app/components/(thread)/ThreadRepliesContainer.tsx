import { Thread } from "@/types/Thread";
import React from "react";
import ReplyDisplay from "../(reply)/ReplyDisplay";

type Props = {
    thread?: Thread
}

const ThreadRepliesContainer = ({thread}: Props) => {
  return (
    <div className="flex flex-col gap-2 overflow-scroll no-scrollbar overflow-y-auto items-center">
      {thread?.replies.map((reply, index) => (

          <ReplyDisplay replyId={reply} key={index}/>
      ))}
    </div>
  );
};

export default ThreadRepliesContainer;