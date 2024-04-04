"use client";
import { Thread } from "@/types/Thread";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  threadId: String;
};

const ForumThreadCard = ({ threadId }: Props) => {
  const [thread, setThread] = useState<Thread>();
  const [winReady, setwinReady] = useState(false);
  const [timeStamp, setTimeStamp] = useState("");

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
      setTimeStamp(`${temp.data.createdAt.slice(8,10)}/${temp.data.createdAt.slice(5,7)}/${temp.data.createdAt.slice(0,4)}`)
      setwinReady(true);
    }
  };

  useEffect(() => {
    getThread();
  }, []);

  return (
    <Link href={`../Thread/${thread?.id}`} className="bg-blue dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:text-dark-grey text-xs flex justify-between rounded-full dark:rounded-none p-1">
      <div className="w-3/6">{thread?.headline}</div>
      <div className="w-1/6 sm:w-1/12">{thread?.userName}</div>
      <div className="w-1/6 sm:w-1/12">{timeStamp}</div>
      <div className="w-1/6 sm:w-1/12 flex justify-end"># {thread?.replies.length}</div>
    </Link>
  );
};

export default ForumThreadCard;
