import ForumPageContent from "@/app/components/(forum)/ForumPageContent";
import React from "react";

type Props = {
  params: { forum: string };
};

const page = ({ params }: Props) => {
  const forumLabel = params.forum;


  return (
    <>
      <ForumPageContent forumLabel={forumLabel} />
    </>
  );
};

export default page;
