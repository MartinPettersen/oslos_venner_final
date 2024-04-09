import React from 'react'

type Props = {
    subjectId: String
}

const UserDisplayPlacard = ({ subjectId }: Props ) => {
    const userName = subjectId;
  return (
    <div className="bg-blue dark:bg-gradient-to-r from-orange to-pink w-[90%] sm:w-[30%] py-10 rounded-xl dark:rounded-none flex flex-col gap-4 items-center justify-center">
        <div className="flex w-full items-center justify-center">
          <div className="w-1/6 "></div>
          <div className="text-xl sm:text-3xl w-4/6 flex justify-center items-center text-soft-pink dark:text-dark-grey">
            {userName.replace("%20", " ")}
          </div>
          <div className="w-1/6"></div>
        </div>
    </div>
  )
}

export default UserDisplayPlacard