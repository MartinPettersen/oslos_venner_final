"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Thread } from "@/types/Thread";
import { Reply } from "@/types/Reply";

type Props = {
  subjectType: String;
  subjectId?: String;
  setToggleWindow: React.Dispatch<React.SetStateAction<boolean>>;
};

const DeleteWindow = ({ subjectId, subjectType, setToggleWindow }: Props) => {
  const router = useRouter();

  const threadId = subjectId;

  const [thread, setThread] = useState<Thread>();
  const [reply, setReply] = useState<Reply>();

  const getReply = async () => {
    const replyId = subjectId;
    const res = await fetch("/api/Replies/GetReply", {
      method: "POST",
      body: JSON.stringify({ replyId }),
      headers: new Headers({ "content-type": "application/json" }),
    });
    if (!res.ok) {
      const response = await res.json();
      console.log(response.message);
    } else {
      const temp = await res.json();
      setReply(temp.data);
    }
  };

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
    if (subjectType === "thread") {
      getThread();
    }
    if (subjectType === "post") {
      getReply();
    }
  }, []);

  const handleDeleteThread = async () => {
    const res = await fetch("/api/Threads/DeleteThread", {
      method: "POST",
      body: JSON.stringify({ thread }),
      headers: new Headers({ "content-type": "application/json" }),
    });

    if (!res.ok) {
      const response = await res.json();
    } else {
      router.refresh();
      router.push("/");
    }
  };

  const handleDeleteUser = async () => {
    const userName = subjectId;
    const res = await fetch("/api/Users/DeleteUser", {
      method: "POST",
      body: JSON.stringify({ userName }),
      headers: new Headers({ "content-type": "application/json" }),
    });

    if (!res.ok) {
      const response = await res.json();
    } else {
      router.refresh();
      router.push("/");
    }
  };

  const handleDeleteReply = async () => {
    const replyId = subjectId;
    const parentId = reply?.parentId;
    const res = await fetch("/api/Replies/DeleteReply", {
      method: "POST",
      body: JSON.stringify({ replyId, parentId }),
      headers: new Headers({ "content-type": "application/json" }),
    });

    if (!res.ok) {
      const response = await res.json();
    } else {
      router.refresh();
      router.push("/");
    }
  };

  const handleDelete = () => {
    if (subjectType === "thread") {
      handleDeleteThread();
    } else if (subjectType === "post") {
      handleDeleteReply();
    } else if (subjectType === "user") {
      handleDeleteUser();
    }
  };

  return (
    <div className="p-4 absolute z-[120] bg-light-brown dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:text-dark-grey w-[80%] sm:w-[30%] flex items-center justify-center flex-col rounded-xl dark:rounded-none">
      <div>Er du sikker på at du ønsker å slette?</div>
      <div className="p-4 flex flex-row gap-20">
        <div
          onClick={() => {
            handleDelete();
            setToggleWindow(false);
          }}
          className="bg-green dark:bg-dark-grey text-danger-red p-2 px-4 font-bold rounded-md dark:rounded-none cursor-pointer hover:drop-shadow-xl  relative hover:bottom-[2px] hover:right-[3px]"
        >
          Ja
        </div>
        <div
          onClick={() => setToggleWindow(false)}
          className="bg-green dark:bg-dark-grey text-soft-pink dark:text-orange p-2 px-4 font-bold rounded-md dark:rounded-none cursor-pointer hover:drop-shadow-xl  relative hover:bottom-[2px] hover:right-[3px]"
        >
          Nei
        </div>
      </div>
    </div>
  );
};

export default DeleteWindow;
