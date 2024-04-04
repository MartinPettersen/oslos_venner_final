import React from 'react'


type Props = {
    params: { threadId: string };
  };

const page = ({ params }: Props) => {
  const threadId = params.threadId;

  return (
    <div className='w-full h-full '>page</div>
  )
}


export default page