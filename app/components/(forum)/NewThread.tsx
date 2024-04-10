"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

type Props = {
  newThread: boolean;
  setNewThread: React.Dispatch<React.SetStateAction<boolean>>;
  forumLabel: String;
};

const NewThread = ({ newThread, setNewThread, forumLabel }: Props) => {
  console.log(newThread);

  const router = useRouter();

  const id = uuidv4();

  const { data: session }: any = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/Bruker");
    },
  });

  const [form, setForm] = useState({
    id: id,
    headline: "",
    userName: session?.user?.name,
    content: "",
    forumLabel: forumLabel,
    replies: [],
  });
  const [errorMessage, setErrorMessage] = useState("");

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

    const res = await fetch("/api/Threads", {
      method: "POST",
      body: JSON.stringify({ form, forumLabel, id }),
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
    <div>
      {newThread ? (
        <>
          <div
            onClick={() => setNewThread(!newThread)}
            className="absolute z-[10] top-0 left-0 w-screen h-screen flex items-center justify-center"
          ></div>
          <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
            <div className="absolute bg-green dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:text-dark-grey rounded-xl dark:rounded-none z-[100] w-[90%] sm:w-[30%]">
              <form className="flex flex-col items-center py-6">
                <label>Overskrift</label>
                <>dette er skrevet</>
                <label>Innhold</label>
                <>dette er Textareat</>
                <div className="bg-light-brown dark:bg-gradient-to-r p-2 from-orange to-pink text-soft-pink dark:text-dark-grey rounded-xl dark:rounded-none drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px] cursor-pointer">
                  Opprett
                </div>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default NewThread;
