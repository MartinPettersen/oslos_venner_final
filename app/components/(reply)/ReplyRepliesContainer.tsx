import { Thread } from "@/types/Thread";
import React from "react";
import {Reply} from "@/types/Reply";
import ReplyDisplay from "./ReplyDisplay";

type Props = {
  parentReply?: Reply;
};

const ReplyRepliesContainer = ({ parentReply }: Props) => {
  return (
    <div className="flex flex-col gap-2 pl-2 w-full overflow-scroll no-scrollbar overflow-y-auto items-center">
      {parentReply?.children.map((reply, index) => (
        <div key={index} className="flex w-full  pl-2 ">
          <ReplyDisplay replyId={reply} />
        </div>
      ))}
    </div>
  );
};

export default ReplyRepliesContainer;
