import React, { useEffect, useState } from 'react'
import ForumDisplay from './ForumDisplay';
import { Forum } from '@/types/Forum';



const ForumContainer = () => {

    const [forums, setForums] = useState<Forum[]>([]);

    const [winReady, setwinReady] = useState(false);
  
    const status = "clear";
  
    const getForums = async () => {
      const res = await fetch("/api/Forums/GetForums", {
        method: "POST",
        body: JSON.stringify({ status }),
        headers: new Headers({ "content-type": "application/json" }),
      });
      if (!res.ok) {
        const response = await res.json();
        console.log(response.message);
      } else {
        const temp = await res.json();
        setForums(temp.data);
        console.log(temp.data)
        setwinReady(true);
      }
    };
  
    useEffect(() => {
      getForums();
    }, []);

  return (
    <div className='flex flex-col items-center gap-4 p-4 w-screen sm:w-[80%] h-[90%] no-scrollbar overflow-y-auto  mt-16 '>
        {forums.map((forum, index) => (
            <ForumDisplay key={index} forum={forum} />
        ))}
    </div>
  )
}

export default ForumContainer