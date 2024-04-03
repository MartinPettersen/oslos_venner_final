import { Forum } from '@/types/Forum'
import React from 'react'

type Props = {
    forum: Forum
}

const ForumDisplay = ({forum}: Props) => {
  return (
    <div >{forum.label}</div>

  )
}

export default ForumDisplay