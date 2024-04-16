import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Thread } from "@/types/Thread";

type Props = {
  subjectType: String;
  subjectId?: String;
};

const DeleteButton = ({ subjectType, subjectId }: Props) => {

  const router = useRouter();

  const threadId = subjectId

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
    console.log("hm")
    getThread();
  }, []);

  const handleDelete = async () => {
    console.log("forsøkt slettet")
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

  return (
    <div onClick={() =>  handleDelete()}
      className="bg-light-brown rounded-full dark:rounded-none px-4 cursor-pointer dark:bg-gradient-to-r hover:drop-shadow-xl  relative hover:bottom-[2px] hover:right-[3px]
from-orange to-pink text-soft-pink dark:text-dark-grey w-full flex items-center justify-center"
    >
      Slettes
    </div>
  );
};

export default DeleteButton;
