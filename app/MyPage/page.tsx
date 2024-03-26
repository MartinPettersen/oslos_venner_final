import React from "react";
import DeleteAccount from "../components/(mypage)/DeleteAccount";
import MyInfo from "../components/(mypage)/MyInfo";

const page = () => {
  return (
    <div className="w-screen h-screen flex sm:items-end items-center justify-center sm:justify-end ">
      <div className="w-[90%] h-[75%] p-4 sm:items-start items-center justify-center sm:justify-end flex flex-col gap-[30px] sm:gap-[60px]">
        <MyInfo />
        <DeleteAccount />
      </div>
    </div>
  );
};

export default page;
