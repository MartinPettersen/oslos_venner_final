'use client'
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";

type Props = {
    subjectType: String,
    subjectId?: String,
    setToggleWindow: React.Dispatch<React.SetStateAction<boolean>>;
} 

const ReportForm = ({subjectId, subjectType, setToggleWindow}: Props) => {

    const id = uuidv4();

    const { data: session }: any = useSession({
        required: true,
        onUnauthenticated() {
          // redirect("/api/auth/signin?callbackUrl=/Bruker");
    
        },
      });

    const [report, setReport] = useState({
        reportId: id,
        subjectType: subjectType,
        subjectId: subjectId,
        reason: "",
        userName: session?.user?.name,
      });


      const [errorMessage, setErrorMessage] = useState("");
    
      const handleChange = (e: any) => {
        const value = e.target.value;
        const name = e.target.name;
        setReport((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (e: any) => {
        e.preventDefault();
        setErrorMessage("");
    
        const res = await fetch("/api/Report", {
            method: "POST",
            body: JSON.stringify({ report }),
            headers: new Headers({ "content-type": "application/json" }),
          });
      
    
        if (!res.ok) {
          const response = await res.json();
          setErrorMessage(response.message);
        } else {
            setToggleWindow(false)
        }
      };

  return (
    <div className="absolute z-[100] bg-green dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:text-dark-grey rounded-xl dark:rounded-none  w-[90%] sm:w-[30%]">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-4 items-center py-6"
      >
        <div className="flex flex-col">
          <label>Oppgi Grunn</label>
          <textarea
            id="reason"
            name="reason"
            onChange={handleChange}
            required={true}
            value={report.reason}
            className="rounded-full p-2 outline-none text-dark-grey dark:rounded-none bg-soft-pink dark:bg-grey"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Opprett Innlegg"
          className="drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px]
bg-light-brown dark:bg-gradient-to-r p-2 from-orange to-pink text-soft-pink dark:text-dark-grey rounded-xl dark:rounded-none "
        />
      </form>
    </div>
  )
}

export default ReportForm