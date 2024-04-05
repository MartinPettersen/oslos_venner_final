import React, { useEffect, useState } from 'react'
import { Reply } from "@/types/Reply";
import ReplyDisplayCard from './ReplyDisplayCard';

type Props = {
    replyId: String
}

const Reply = ({replyId}: Props) => {

    const [reply, setReply] = useState<Reply>();
  
    const getReply = async () => {
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
        console.log(temp.data)
      }
    };
  
    useEffect(() => {
      getReply();
    }, []);
  return (
    <ReplyDisplayCard reply={reply} />
  )
}

export default Reply