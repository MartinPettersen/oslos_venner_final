'use client'

import React from "react";
import DeleteAccount from "../components/(mypage)/DeleteAccount";
import MyInfo from "../components/(mypage)/MyInfo";

import { useSession } from 'next-auth/react'
import { redirect } from "next/navigation";

const page = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {data: session} = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/MyPage")
    }
  })


  return (
    <div className="w-screen h-screen flex sm:items-end items-center justify-center sm:justify-end ">
      <div className="w-[90%] h-[75%] p-4 sm:items-start items-center justify-center sm:justify-end flex flex-col gap-[30px] sm:gap-[60px]">
        <MyInfo user={session?.user!} />
        <DeleteAccount />
      </div>
    </div>
  );
};

export default page;
