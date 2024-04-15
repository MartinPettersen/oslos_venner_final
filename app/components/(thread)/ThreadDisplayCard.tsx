import { Thread } from "@/types/Thread";
import React, { useState } from "react";
import TimeStamp from "../(util)/TimeStamp";
import ThreadDotMenu from "./ThreadDotMenu";
import NewReply from "./NewReply";
import Link from "next/link";

type Props = {
  thread?: Thread;
};

const ThreadDisplayCard = ({ thread }: Props) => {
  const [newReply, setNewReply] = useState(false);

  return (
    <div className="flex  flex-col w-[90%] sm:w-[40%] bg-green rounded-md p-2 dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:text-dark-grey dark:rounded-none">
      <div className="flex w-full justify-between">
        <div className="  flex text-xl items-center justify-center">
          {thread?.headline}
        </div>
        <ThreadDotMenu subjectType={"thread"} subjectId={thread?.id} />
      </div>
      <div>
        <Link
          href={`/User/${thread?.userName}`}
          className="drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px]"
        >
          {thread?.userName}
        </Link>
      </div>
      <div className="flex flex-row justify-between ">
        <div
          onClick={() => setNewReply(true)}
          className="  flex items-center font-bold justify-center cursor-pointer hover:drop-shadow-xl  relative hover:bottom-[2px] hover:right-[3px]"
        >
          Svar
        </div>
        {thread ? (
          <NewReply
            parent={thread!.id}
            parentType={"thread"}
            newReply={newReply}
            setNewReply={setNewReply}
          />
        ) : null}
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

export default ThreadDisplayCard;
