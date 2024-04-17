import React from "react";

type Props = {
  setEditReply?: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditButton = ({ setEditReply }: Props) => {

    const handleEdit = () => {
        setEditReply!(true)
    }
  return (
    <div
    onClick={() => handleEdit()}
      className="bg-light-brown rounded-full dark:rounded-none px-4 cursor-pointer dark:bg-gradient-to-r hover:drop-shadow-xl  relative hover:bottom-[2px] hover:right-[3px]
 from-orange to-pink text-soft-pink dark:text-dark-grey w-full flex items-center justify-center"
    >
      Edit
    </div>
  );
};

export default EditButton;
