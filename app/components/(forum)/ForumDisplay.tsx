import { Forum } from "@/types/Forum";
import { Thread } from "@/types/Thread";
import React, { useEffect, useState } from "react";

type Props = {
  forum: Forum;
};

const ForumDisplay = ({ forum }: Props) => {

    const [thread, setThread] = useState<Thread>();
    const [winReady, setwinReady] = useState(false);
  
    const getThread = async () => {
      const forumLabel = forum.label;
      const res = await fetch("/api/Threads/GetNewestThread", {
        method: "POST",
        body: JSON.stringify({ forumLabel }),
        headers: new Headers({ "content-type": "application/json" }),
      });
      if (!res.ok) {
        const response = await res.json();
        console.log(response.message);
      } else {
        const temp = await res.json();
        setThread(temp.data);
        setwinReady(true);
      }
    };
  
    useEffect(() => {
      getThread();
    }, []);

  return (
    <div className="w-[80%] flex gap-2 flex-col items-end">
      <div className="bg-blue text-soft-pink dark:text-dark-grey dark:bg-gradient-to-r from-orange to-pink rounded-full dark:rounded-none flex justify-between w-[90%]">
        <div className=" p-2">{forum.label}</div>
        <div className=" p-2">{`# ${forum.threads.length}`}</div>
      </div>
      <div className={`bg-green dark:bg-gradient-to-r from-orange to-pink rounded-full dark:rounded-none text-soft-pink dark:text-dark-grey text-xs w-[60%] ${typeof thread === 'undefined' ? 'hidden': ''} `}>
        <div className="p-2">
    

        {thread?.headline}
        </div>
      </div>
    </div>
  );
};

export default ForumDisplay;
