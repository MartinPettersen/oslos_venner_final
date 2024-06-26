'use client'
import React, { useEffect, useState } from 'react'
import RepliesContainer from '../(util)/RepliesContainer'
import { Reply } from '@/types/Reply'

type Props = {
    user: String
}

const UserReplies = ({user}: Props) => {
    const userName = user;
    const [replies, setReplies] = useState<Reply[]>([]);

    const getUserReplies = async () => {
        const res = await fetch("/api/Replies/GetUserReplies", {
          method: "POST",
          body: JSON.stringify({ userName }),
          headers: new Headers({ "content-type": "application/json" }),
        });
        if (!res.ok) {
          const response = await res.json();
          console.log(response.message);
        } else {
          const temp = await res.json();
          setReplies(temp.data);
        }
      };
    
      useEffect(() => {

        getUserReplies();
      }, []);


  return (
    <div>
        <RepliesContainer replies={replies} />
    </div>
  )
}

export default UserReplies