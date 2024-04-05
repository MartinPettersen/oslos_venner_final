import React, { useEffect, useState } from 'react'
import { Reply } from "@/types/Reply";

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
    <div className="bg-blue rounded-md p-2 text-soft-pink">{reply?.reply}</div>
  )
}

export default Reply