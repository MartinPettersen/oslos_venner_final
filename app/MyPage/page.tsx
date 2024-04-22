/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";
import MyInfo from "../components/(mypage)/MyInfo";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import DeleteButton from "../components/(util)/DeleteButton";
import PopupWindow from "../components/(util)/PopupWindow";
import DeleteWindow from "../components/(util)/DeleteWindow";

const page = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const [toggleWindow, setToggleWindow] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/MyPage");
    },
  });



  return (
    <div className="w-screen h-screen flex  items-center justify-center  ">
      <div className="w-[90%] h-[75%] p-4  items-center justify-center flex flex-col gap-[30px] sm:gap-[60px]">
        <MyInfo user={session?.user!} />
        <div>
          <DeleteButton
            label={"Slett Bruker"}
            setToggleWindow={setToggleWindow}
            setToggleMenu={setToggleMenu}
          />
        </div>
      </div>
      <PopupWindow
        setToggleWindow={setToggleWindow}
        toggleWindow={toggleWindow}
      >
        <DeleteWindow subjectType={"user"} subjectId={session?.user!.name!} setToggleWindow={setToggleWindow}/>
      </PopupWindow>
    </div>
  );
};

export default page;
