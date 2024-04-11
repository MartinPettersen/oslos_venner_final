import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { redirect } from "next/navigation";

type Props = {
  parent: String;
  parentType: String;
  newReply: boolean;
  setNewReply: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewReply = ({ parent, parentType, newReply, setNewReply }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  const postId = uuidv4();
  const parentId = parent;

  const { data: session }: any = useSession({
    required: true,
    onUnauthenticated() {
      if (newReply) {
        redirect("/api/auth/signin?callbackUrl=/Bruker");
      }
    },
  });

  const [form, setForm] = useState({
    postId: postId,
    parentId: parentId,
    reply: "",
    userName: session?.user?.name,
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

    const res = await fetch("/api/Replies/NewReply", {
      method: "POST",
      body: JSON.stringify({ form, parentType }),
      headers: new Headers({ "content-type": "application/json" }),
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push(pathName);
      //      router.replace(pathName);
    }
  };

  return (
    <div>
      {newReply ? (
        <>
          <div
            onClick={() => setNewReply(!newReply)}
            className="absolute z-[10] top-0 left-0 w-screen h-screen flex items-center justify-center"
          ></div>
          <div className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center">
            <div className="absolute bg-green dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:text-dark-grey rounded-xl dark:rounded-none z-[100] w-[90%] sm:w-[30%]">
              <form
                onSubmit={handleSubmit}
                method="post"
                className="flex flex-col gap-4 items-center py-6"
              >
                <div className="flex flex-col">
                  <label>Svar</label>
                  <textarea
                    id="reply"
                    name="reply"
                    onChange={handleChange}
                    required={true}
                    value={form.reply}
                    className="rounded-full p-2 outline-none text-dark-grey dark:rounded-none bg-soft-pink dark:bg-grey"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value="Svar"
                  className="drop-shadow-xl cursor-pointer hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px] bg-light-brown dark:bg-gradient-to-r p-2 from-orange to-pink text-soft-pink dark:text-dark-grey rounded-xl dark:rounded-none "
                />
              </form>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default NewReply;
