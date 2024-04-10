"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const CreateForumForm = () => {
  const { data: session }: any = useSession();

  const router = useRouter();
  const [formData, setFormData] = useState({
    label: "",
    status: "clear",
    threads: [],
    _createdBy: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrorMessage("");
    formData._createdBy = session.user.name;
    const res = await fetch("/api/Forums/CreateForum", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: new Headers({ "content-type": "application/json" }),
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <div className="flex items-start pt-10 justify-center w-screen h-screen">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="rounded-xl dark:text-dark-grey dark:rounded-none bg-light-brown dark:bg-gradient-to-b from-orange to-pink w-[60%] h-[40%] sm:w-[22%] sm:h-[40%] flex items-center justify-center flex-col"
      >
        <div className="flex flex-col items-center  p-1">
          <label>Forum Navn</label>
          <input
            className="rounded-full pl-2 pr-2 text-black bg-soft-pink dark:rounded-none dark:bg-grey w-[80%]"
            id="label"
            type="text"
            name="label"
            required={true}
            onChange={handleChange}
            value={formData.label}
          />
        </div>
        <div>
          <h3 className="text-danger-red">{errorMessage}</h3>
        </div>
        <div className="flex items-center justify-center p-4 sm:p-1 w-full">
          <input
            type="submit"
            value="Opprett Forum"
            className="bg-brown dark:dark:bg-gradient-to-r from-dark-grey to-black text-soft-pink dark:text-pink rounded-full dark:rounded-none w-[80%] dark:w-[90%] dark:sm:w-[54%] dark:h-[30px] drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px]
            "
          />
        </div>
      </form>
    </div>
  );
};

export default CreateForumForm;
