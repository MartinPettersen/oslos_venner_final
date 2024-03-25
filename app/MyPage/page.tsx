import React from 'react'
import DeleteAccount from '../components/(mypage)/DeleteAccount'
import MyInfo from '../components/(mypage)/MyInfo'

const page = () => {
  return (
    <div className='w-screen h-screen flex items-end justify-end '>
        <div className='w-[90%] h-[80%]  flex flex-col gap-[82px]'>

        <MyInfo />
        <DeleteAccount />
        </div>

    </div>
  )
}

export default page