"use client";
import React, { useState } from "react";
import { Thread } from "@/types/Thread";
import EditThreadForm from "./EditThreadForm";

type Props = {
  editThread: boolean;
  thread: Thread;
  content: String;
};

const ReplyMessage = ({ editThread, thread, content }: Props) => {
  return (
    <div>
      {editThread ? (
        <EditThreadForm thread={thread} />
      ) : (
        <div className="  flex text-xl items-center justify-center">
          {thread?.headline}
        </div>
      )}
    </div>
  );
};

export default ReplyMessage;
