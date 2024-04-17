"use client"
import { Thread } from "@/types/Thread";
import React, { useState } from "react";

type Props = {
  thread?: Thread;
};

const EditThreadForm = ({ thread }: Props) => {
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState({
    id: thread?.id,
    headline: thread?.headline.toString(),
    userName: thread?.userName,
    content: thread?.content.toString(),
    forumLabel: thread?.forumLabel,
    replies: thread?.replies,
  });

  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrorMessage("");
    const res = await fetch("/api/Threads/EditThreads", {
      method: "POST",
      body: JSON.stringify({ form }),
      headers: new Headers({ "content-type": "application/json" }),
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      // router.refresh();
      // router.push("/");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} method="post" className="flex gap-2">
        <input
          id="headline"
          type="text"
          name="headline"
          onChange={handleChange}
          required={true}
          value={form.headline}
          className="text-black bg-soft-pink dark:bg-grey hover:bg-orange"
        />
        <input
          type="submit"
          value="lagre"
          className="cursor-pointer font-bold"
        />
      </form>
    </div>
  );
};

export default EditThreadForm;
