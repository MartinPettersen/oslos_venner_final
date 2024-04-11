'use client'
import { Reply } from '@/types/Reply'
import React, { useState } from 'react'
import TimeStamp from '../(util)/TimeStamp'
import ReplyDotMenu from './ReplyDotMenu'
import NewReply from '../(thread)/NewReply'

type Props = {
    reply?: Reply
}

const ReplyDisplayCard = ({reply}: Props) => {

  const [newReply, setNewReply] = useState(false);


  return (
    <div className="bg-blue w-[80%] text-xs rounded-md p-2 dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:text-dark-grey dark:rounded-none">
        <div className='flex flex-row justify-between'>
            <div>{reply?.userName}</div>
            <ReplyDotMenu reply={reply} />
        </div>
        <div>
        {reply?.reply}
        </div>
        <div className='flex flex-row justify-between'>
            <div onClick={() => setNewReply(true)} className='flex items-center font-bold justify-center cursor-pointer hover:drop-shadow-xl  relative hover:bottom-[2px] hover:right-[3px]'>svar</div>
            {reply ?
            
            <NewReply parent={reply?.postId} parentType={"reply"} newReply={newReply} setNewReply={setNewReply}/>
          :
          null}
            <div><TimeStamp createdAt={reply?.createdAt} /></div>
        </div>
    </div>
  )
}

export default ReplyDisplayCard