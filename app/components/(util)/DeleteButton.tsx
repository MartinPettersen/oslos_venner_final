'use client'
import React from "react";

type Props = {
  label: String
  setToggleWindow: React.Dispatch<React.SetStateAction<boolean>>;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;

};

const DeleteButton = ({ label, setToggleWindow, setToggleMenu}: Props) => {




  return (
    <div onClick={() =>  {
      setToggleWindow(true); setToggleMenu(false)}}
      className="bg-light-brown rounded-full dark:rounded-none px-4  dark:bg-gradient-to-r cursor-pointer hover:drop-shadow-xl  relative hover:bottom-[2px] hover:right-[3px]
from-orange to-pink text-soft-pink dark:text-dark-grey w-full flex items-center justify-center"
    >
      {label}
    </div>
  );
};

export default DeleteButton;
