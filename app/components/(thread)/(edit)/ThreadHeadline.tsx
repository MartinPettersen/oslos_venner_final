"use client";
import React, { useState } from "react";
import { Thread } from "@/types/Thread";
import EditThreadForm from "./EditThreadForm";
import EditThreadHeadline from "./EditThreadHeadline";

type Props = {
  editThread: boolean;
  thread: Thread;
  content: String;
};

const ThreadHeadline = ({ editThread, thread, content }: Props) => {
  return (
    <div>
      {editThread ? (
        <EditThreadHeadline thread={thread} />
      ) : (
        <div className="  flex text-xl items-center justify-center">
          {thread?.headline}
        </div>
      )}
    </div>
  );
};

export default ThreadHeadline;
