'use client'
import { Thread } from '@/types/Thread'
import React, { useEffect, useState } from 'react'

type Props = {
    threadId: String
}

const ForumThreadCard = ({threadId}: Props) => {

    const [thread, setThread] = useState<Thread>();
    const [winReady, setwinReady] = useState(false);
  
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
        setwinReady(true);
      }
    };
  
    useEffect(() => {
      getThread();
    }, []);

  return (
    <div>
        {
        thread?.headline
         
    }
        </div>
  )
}

export default ForumThreadCard