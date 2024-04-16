import React from 'react'

type Props = {
    subjectType: String,
    subjectId?: String,
}

const DeleteButton = ({subjectType, subjectId}: Props) => {


    const handleDelete = async () => {
        const parentId = post?.parentId;
        const res = await fetch("/api/DeletePost", {
          method: "POST",
          body: JSON.stringify({ postId, parentId }),
          headers: new Headers({ "content-type": "application/json" }),
        });
    
        if (!res.ok) {
          const response = await res.json();
        } else {
        }
      };

  return (
    <div
    className="bg-light-brown rounded-full dark:rounded-none px-4 cursor-pointer dark:bg-gradient-to-r hover:drop-shadow-xl  relative hover:bottom-[2px] hover:right-[3px]
from-orange to-pink text-soft-pink dark:text-dark-grey w-full flex items-center justify-center"
  >
    Slett
  </div>
  )
}

export default DeleteButton