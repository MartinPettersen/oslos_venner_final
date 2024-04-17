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

const ThreadContent = ({ editThread, thread, content }: Props) => {
  return (
    <div>
      {editThread ? (
        <EditThreadForm thread={thread} />
      ) : (
        <div>
        {thread?.content}
      </div>
      )}
    </div>
  );
};

export default ThreadContent;
