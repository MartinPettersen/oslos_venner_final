'use client'

import React from "react";
import MyInfo from "../components/(mypage)/MyInfo";

import { useSession } from 'next-auth/react'
import { redirect } from "next/navigation";
import DeleteButton from "../components/(util)/DeleteButton";

const page = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {data: session} = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/MyPage")
    }
  })


  return (
    <div className="w-screen h-screen flex  items-center justify-center  ">
      <div className="w-[90%] h-[75%] p-4  items-center justify-center flex flex-col gap-[30px] sm:gap-[60px]">
        <MyInfo user={session?.user!} />
        <div>

        <DeleteButton subjectType={"user"} subjectId={session?.user!.name!} label={"Slett Bruker"} />
        </div>
      </div>
    </div>
  );
};

export default page;
