import React from 'react'

type Props = {
    label: String
}

const ButtonReport = ({label}: Props) => {
  return (
    <div className='rounded-full bg-green dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:rounded-none dark:text-dark-grey  p-1 sm:px-8 cursor-pointer'>{label}</div>

  )
}

export default ButtonReport