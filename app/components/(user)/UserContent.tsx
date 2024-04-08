import React from 'react'
import UserReplies from './UserReplies'

type Props = {
    userName: String
    contentType: String
}

const UserContent = ({userName, contentType}: Props) => {
  return (
    <div>
        {contentType === 'threads'? <></> :
        <UserReplies user={userName} />
        }

    </div>
  )
}

export default UserContent