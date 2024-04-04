import React from "react";

type Props = {
  params: { forum: string };
};

const page = ({ params }: Props) => {
    const forumLabel = params.forum;

  return <div className="flex w-screen h-screen items-center justify-end pt-44 sm:justify-center sm:pt-0 flex-col-reverse sm:flex-row gap-4 sm:gap-0">
    <div className="bg-green w-2/3">
d
    </div>
    <div className=" w-1/3 sm:h-[60%] flex flex-col gap-2 sm:gap-4 items-center">
        <div className="flex items-center justify-center text-3xl sm:text-6xl text-brown">{forumLabel}</div>
        <div className="flex items-center justify-center text-md text-soft-pink p-2  bg-green w-26 rounded-full cursor-pointer">Nytt Innlegg</div>

    </div>

  </div>;
};

export default page;
