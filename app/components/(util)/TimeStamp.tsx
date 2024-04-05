import React from 'react'

type Props = {
    createdAt?: String,
}

const TimeStamp = ({createdAt}: Props) => {
    
  return (
    <div>{`${createdAt?.slice(8,10)}/${createdAt?.slice(5,7)}/${createdAt?.slice(0,4)}`}</div>
  )
}

export default TimeStamp