"use client";
import { Thread } from "@/types/Thread";
import React, { useEffect, useState } from "react";
import ForumThreadCard from "../(forum)/ForumThreadCard";

type Props = {
  user: String;
};

const UserThreads = ({ user }: Props) => {
  const userName = user;
  const [threads, setThreads] = useState<Thread[]>();

  const getUserThreads = async () => {
    const res = await fetch("/api/Threads/GetUserThreads", {
      method: "POST",
      body: JSON.stringify({ userName }),
      headers: new Headers({ "content-type": "application/json" }),
    });
    if (!res.ok) {
      const response = await res.json();
      console.log(response.message);
    } else {
      const temp = await res.json();
      setThreads(temp.data);
      console.log(temp.data);
    }
  };

  useEffect(() => {
    getUserThreads();
  }, []);

  return (
    <div className="w-full flex flex-col gap-2">
      {threads?.map((thread, index) => (
        <ForumThreadCard threadId={thread.id} key={index} />
      ))}
    </div>
  );
};

export default UserThreads;
