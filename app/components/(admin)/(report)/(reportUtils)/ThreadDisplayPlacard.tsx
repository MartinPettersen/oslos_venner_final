import ThreadDisplayCard from "@/app/components/(thread)/ThreadDisplayCard";
import ThreadDotMenu from "@/app/components/(thread)/ThreadDotMenu";
import TimeStamp from "@/app/components/(util)/TimeStamp";
import { Thread } from "@/types/Thread";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  subjectId: String;
};

const ThreadDisplayPlacard = ({ subjectId }: Props) => {
  const threadId = subjectId;

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
    <div className="flex  flex-col w-[90%] sm:w-[40%] bg-blue rounded-md p-2 dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:text-dark-grey dark:rounded-none">
      <div className="flex w-full justify-between">
        <div className="  flex text-xl items-center justify-center">
          {thread?.headline}
        </div>
        <ThreadDotMenu subjectType={"thread"} subjectId={thread?.id}/>
      </div>
      <div>
      <Link href={`/User/${thread?.userName}`} className="drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px]">
        {thread?.userName}
      </Link>
        <div className="  "></div>
      </div>
      <div className="flex flex-row justify-between ">
        <div className="  flex items-center font-bold justify-center cursor-pointer">
          Svar
        </div>
        <div className="  flex gap-3 items-center justify-center">
          <div className=" flex items-center justify-center">
            {thread?.replies.length}
          </div>
          <TimeStamp createdAt={thread?.createdAt} />
        </div>
      </div>
    </div>
  );
};

export default ThreadDisplayPlacard;
