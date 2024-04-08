import UserPage from "@/app/components/(user)/UserPage";
import React from "react";

type Props = {
  params: { user: string };
};

const page = ({ params }: Props) => {
  const userName = params.user;





  return (
    <UserPage userName={userName}/>
  );
};

export default page;
