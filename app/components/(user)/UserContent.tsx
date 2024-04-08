import React from "react";
import UserReplies from "./UserReplies";
import UserThreads from "./UserThreads";

type Props = {
  userName: String;
  contentType: String;
};

const UserContent = ({ userName, contentType }: Props) => {
  return (
    <div>
      {contentType === "threads" ? (
        <UserThreads user={userName} />
      ) : (
        <UserReplies user={userName} />
      )}
    </div>
  );
};

export default UserContent;
