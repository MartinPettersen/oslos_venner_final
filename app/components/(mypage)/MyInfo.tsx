import { User } from '@/types/User'
import React from 'react'

type Props = {
  user: User
}

const MyInfo = ({user}: Props) => {
  return (
    <div className='w-[173px] sm:w-[573px] h-[70px] p-2 sm:h-[243px] text-[10px] sm:text-[40px] dark:border dark:border-pink overflow-auto flex flex-col justify-center bg-blue dark:bg-transparent text-soft-pink dark:text-grey items-start rounded-xl sm:rounded-3xl dark:rounded-none'>
        <div>
            {`Bruker Navn: ${user.name}`} 
        </div>
        <div>
        {`E-post: ${user.email}`}
        </div>
        <div>
            Status: Ikke Verifisert
        </div>
    </div>
  )
}

export default MyInfo