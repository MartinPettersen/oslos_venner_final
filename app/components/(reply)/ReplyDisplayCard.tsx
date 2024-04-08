import { Reply } from '@/types/Reply'
import React from 'react'
import TimeStamp from '../(util)/TimeStamp'

type Props = {
    reply?: Reply
}

const ReplyDisplayCard = ({reply}: Props) => {
  return (
    <div className="bg-blue w-[80%] text-xs rounded-md p-2 dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:text-dark-grey dark:rounded-none">
        <div className='flex flex-row justify-between'>
            <div>{reply?.userName}</div>
            <div>{`\u00B7\u00B7\u00B7`}</div>
        </div>
        <div>
        {reply?.reply}
        </div>
        <div className='flex flex-row justify-between'>
            <div className='flex items-center font-bold justify-center cursor-pointer'>svar</div>
            <div><TimeStamp createdAt={reply?.createdAt} /></div>
        </div>
    </div>
  )
}

export default ReplyDisplayCard