'use client'
import { Forum } from '@/types/Forum';
import React, { useEffect, useState } from 'react'
import ForumThreadCard from './ForumThreadCard';

type Props = {
    forumLabel: string
}

const ForumPageContent = ({forumLabel}: Props) => {


    const [forum, setForum] = useState<Forum>();
    const [winReady, setwinReady] = useState(false);
  
    const getForum = async () => {
      const res = await fetch("/api/Forums/GetForum", {
        method: "POST",
        body: JSON.stringify({ forumLabel }),
        headers: new Headers({ "content-type": "application/json" }),
      });
      if (!res.ok) {
        const response = await res.json();
        console.log(response.message);
      } else {
        const temp = await res.json();
        setForum(temp.data);
        setwinReady(true);
      }
    };
  
    useEffect(() => {
      getForum();
    }, []);

  return (
<div className="flex w-screen h-screen items-center justify-end pt-44 sm:justify-center sm:pt-0 flex-col-reverse sm:flex-row gap-4 sm:gap-0">
      <div className="w-[96%] sm:w-2/3 ">
        <div className="flex justify-between text-light-brown dark:text-grey text-xs">
          <div className="w-3/6">Tema</div>
          <div className="w-1/6">Forfatter</div>
          <div className="w-1/6">Dato</div>
          <div className="w-1/6 flex justify-end">Svar</div>
        </div>
        <div className='w-full flex flex-col gap-2'>
            {forum?.threads.map((thread, index) => (
                <ForumThreadCard threadId={thread} key={index}/>
            ))}
        </div>
      </div>
      <div className=" w-1/3 sm:h-[60%] flex flex-col gap-2 sm:gap-4 items-center">
        <div className="flex items-center justify-center text-3xl sm:text-6xl text-brown dark:text-orange">
          {forumLabel}
        </div>
        <div className="flex items-center justify-center text-md text-soft-pink dark:text-dark-grey p-2  bg-green dark:bg-gradient-to-r from-orange to-pink w-26 rounded-full dark:rounded-none cursor-pointer">
          Nytt Innlegg
        </div>
      </div>
    </div>
  )
}

export default ForumPageContent