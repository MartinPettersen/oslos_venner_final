import React from 'react'

type Props = {
    createdAt?: String,
    updatedAt?: String,
}

const EditedSign = ({createdAt, updatedAt}: Props) => {
  return (
    <div>
        {createdAt !== updatedAt ? <div>Edited</div> : null}
    </div>
  )
}

export default EditedSign