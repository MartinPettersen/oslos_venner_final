import React from 'react'

type Props = {
    reply: String
}

const Reply = ({reply}: Props) => {

    
  return (
    <div className="bg-blue rounded-md p-2 text-soft-pink">{reply}</div>
  )
}

export default Reply