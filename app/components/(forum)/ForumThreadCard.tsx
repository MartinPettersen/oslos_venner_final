"use client";
import { Thread } from "@/types/Thread";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TimeStamp from "../(util)/TimeStamp";

type Props = {
  threadId: String;
};

const ForumThreadCard = ({ threadId }: Props) => {
  const [thread, setThread] = useState<Thread>();


  const getThread = async () => {
    const res = await fetch("/api/Threads/GetThread", {
      method: "POST",
      body: JSON.stringify({ threadId }),
      headers: new Headers({ "content-type": "application/json" }),
    });
    if (!res.ok) {
      const response = await res.json();
      console.log(response.message);
    } else {
      const temp = await res.json();
      setThread(temp.data);
    }
  };

  useEffect(() => {
    getThread();
  }, []);

  return (
    <Link href={`../Thread/${thread?.id}`} className="bg-blue dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:text-dark-grey text-xs flex justify-between rounded-full dark:rounded-none p-1 ">
      <div className="w-3/6 flex items-center">{thread?.headline}</div>
      <div className="w-1/6 sm:w-1/12 flex items-center">{thread?.userName}</div>
      <div className="w-1/6 sm:w-1/12 flex items-center">
        <TimeStamp createdAt={thread?.createdAt} />
      </div>
      <div className="w-1/6 sm:w-1/12 justify-end flex items-center"># {thread?.replies.length}</div>
    </Link>
  );
};

export default ForumThreadCard;
