import { Thread } from "@/types/Thread";
import React from "react";
import Reply from "../(reply)/Reply";

type Props = {
    thread?: Thread
}

const ThreadRepliesContainer = ({thread}: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {thread?.replies.map((reply, index) => (

          <Reply reply={reply} key={index}/>
      ))}
    </div>
  );
};

export default ThreadRepliesContainer;
