import React, { useEffect, useState } from 'react'
import { Reply } from "@/types/Reply";
import ReplyDisplayCard from './ReplyDisplayCard';
import ReplyRepliesContainer from './ReplyRepliesContainer';

type Props = {
    replyId: String
}

const ReplyDisplay = ({replyId}: Props) => {

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
    <div className='w-full flex flex-col gap-2 items-center'>
    <ReplyDisplayCard reply={reply} />
    <ReplyRepliesContainer parentReply={reply} />
    </div>
  )
}

export default ReplyDisplay