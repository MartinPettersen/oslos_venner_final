import { Thread } from '@/types/Thread'
import React from 'react'
import TimeStamp from '../(util)/TimeStamp'
import ThreadDotMenu from './ThreadDotMenu'

type Props = {
    thread?: Thread
}

const ThreadDisplayCard = ({thread}: Props) => {
  return (
<div className="flex  flex-col w-[90%] sm:w-[40%] bg-green rounded-md p-2 dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:text-dark-grey dark:rounded-none">
        <div className="flex w-full justify-between">
          <div className="  flex text-xl items-center justify-center">
            {thread?.headline}
          </div>
          <ThreadDotMenu />
        </div>
        <div>
          <div className="  ">{thread?.userName}</div>
        </div>
        <div className="flex flex-row justify-between ">
          <div className="  flex items-center font-bold justify-center cursor-pointer">
            Svar
          </div>
          <div className="  flex gap-3 items-center justify-center">
            <div className=" flex items-center justify-center">
              {thread?.replies.length}
            </div>
            <TimeStamp createdAt={thread?.createdAt} />
          </div>
        </div>
      </div>
  )
}

export default ThreadDisplayCard