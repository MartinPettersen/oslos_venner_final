"use client";
import { Reply } from "@/types/Reply";
import React, { useState } from "react";
import EditReplyForm from "./EditReplyForm";

type Props = {
  editReply: boolean;
  reply: Reply;
};

const ReplyMessage = ({ editReply, reply }: Props) => {


  return (
    <div>
      {editReply ? (
          <EditReplyForm reply={reply} />
    ) : (
        <div>{reply?.reply}</div>
      )}
    </div>
  );
};

export default ReplyMessage;
