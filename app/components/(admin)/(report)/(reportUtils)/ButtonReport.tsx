import React from 'react'

type Props = {
    label: String
}

const ButtonReport = ({label}: Props) => {
  return (
    <div className='rounded-full bg-green dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:rounded-none dark:text-dark-grey  p-1 sm:px-8 cursor-pointer drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px]'>{label}</div>

  )
}

export default ButtonReport