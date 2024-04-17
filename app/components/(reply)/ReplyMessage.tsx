"use client";
import { Reply } from "@/types/Reply";
import React, { useState } from "react";
import EditReplyForm from "./(edit)/EditReplyForm";

type Props = {
  editToggle: boolean;
  reply: Reply;
};

const ReplyMessage = ({ editToggle, reply }: Props) => {


  return (
    <div>
      {editToggle ? (
          <EditReplyForm reply={reply} />
    ) : (
        <div>{reply?.reply}</div>
      )}
    </div>
  );
};

export default ReplyMessage;
