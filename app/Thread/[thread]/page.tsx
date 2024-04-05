/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import ThreadDisplayCard from "@/app/components/(thread)/ThreadDisplayCard";
import TimeStamp from "@/app/components/(util)/TimeStamp";
import { Thread } from "@/types/Thread";
import React, { useEffect, useState } from "react";

type Props = {
  params: { thread: string };
};

const page = ({ params }: Props) => {
  const threadId = params.thread;

  const [thread, setThread] = useState<Thread>();

  const getThread = async () => {
    console.log(threadId);
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
    <div className="w-full h-screen  flex items-center justify-center flex-col gap-2">
      <ThreadDisplayCard thread={thread} />
      <div className="flex flex-col gap-2">
        <div className="bg-blue rounded-md p-2 text-soft-pink">replies</div>
        <div className="bg-blue rounded-md p-2 text-soft-pink">replies</div>
        <div className="bg-blue rounded-md p-2 text-soft-pink">replies</div>
      </div>
    </div>
  );
};

export default page;
