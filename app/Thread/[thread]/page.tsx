import React from "react";

type Props = {
  params: { threadId: string };
};

const page = ({ params }: Props) => {
  const threadId = params.threadId;

  return (
    <div className="w-full h-screen  flex items-center justify-center flex-col gap-2">
      <div className="bg-green rounded-md p-2 text-soft-pink">thread subject</div>
      <div className="flex flex-col gap-2">
        <div className="bg-blue rounded-md p-2 text-soft-pink">replies</div>
        <div className="bg-blue rounded-md p-2 text-soft-pink">replies</div>
        <div className="bg-blue rounded-md p-2 text-soft-pink">replies</div>
      </div>
    </div>
  );
};

export default page;
