import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Thread } from "@/types/Thread";
import { Reply } from "@/types/Reply";

type Props = {
  subjectType: String;
  subjectId?: String;
};

const DeleteButton = ({ subjectType, subjectId }: Props) => {

  const router = useRouter();

  const threadId = subjectId

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
    if (subjectType === 'thread') {
      getThread();
    }
    if (subjectType === 'post') {
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


  const handleDeleteReply = async () => {
    console.log("jeg blir kalt")
    const replyId = subjectId
    const parentId = reply?.parentId
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

  const handleDeleteUser = () => {
    console.log("later")
  }

  const handleDelete = () => {
    if (subjectType === 'thread') {
      handleDeleteThread()
    } 
    else if (subjectType === 'post') {
      handleDeleteReply()
    }  
    else if (subjectType === 'user') {
      handleDeleteUser()
    }  
  }

  return (
    <div onClick={() =>  handleDelete()}
      className="bg-light-brown rounded-full dark:rounded-none px-4 cursor-pointer dark:bg-gradient-to-r hover:drop-shadow-xl  relative hover:bottom-[2px] hover:right-[3px]
from-orange to-pink text-soft-pink dark:text-dark-grey w-full flex items-center justify-center"
    >
      Slett
    </div>
  );
};

export default DeleteButton;
