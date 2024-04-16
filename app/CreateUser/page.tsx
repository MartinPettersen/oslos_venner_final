import React from 'react'
import CreateUserForm from '../components/(createuser)/CreateUserForm'

const page = () => {
  return (
    <div className='w-screen h-screen flex flex-col gap-4 items-center  justify-center'>
        
        <div className='flex flex-col items-center justify-center   w-full  sm:w-[40%] h-full sm:h-[100%]'>

        <div className='text-3xl sm:text-6xl p-2 text-light-brown dark:text-grey'>Ny Bruker</div>
        <CreateUserForm />
        
        </div>
        </div>
  )
}

export default page