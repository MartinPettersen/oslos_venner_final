import { Thread } from '@/types/Thread'
import React from 'react'
import TimeStamp from '../(util)/TimeStamp'

type Props = {
    thread?: Thread
}

const ThreadDisplayCard = ({thread}: Props) => {
  return (
<div className="flex flex-col w-[90%]  bg-green rounded-md p-2">
        <div className="flex w-full justify-between">
          <div className=" text-soft-pink flex text-xl items-center justify-center">
            {thread?.headline}
          </div>
          <div className=" text-soft-pink font-bold text-3xl flex items-start justify-start cursor-pointer">{`\u00B7\u00B7\u00B7`}</div>
        </div>
        <div>
          <div className=" text-soft-pink ">{thread?.userName}</div>
        </div>
        <div className="flex flex-row justify-between ">
          <div className=" text-soft-pink flex items-center font-bold justify-center cursor-pointer">
            Svar
          </div>
          <div className=" text-soft-pink flex gap-3 items-center justify-center">
            <div className=" text-soft-pink flex items-center justify-center">
              {thread?.replies.length}
            </div>
            <TimeStamp createdAt={thread?.createdAt} />
          </div>
        </div>
      </div>
  )
}

export default ThreadDisplayCard