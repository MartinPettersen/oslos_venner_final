"use client";

import { User } from "@/types/User";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";

const CreateUserForm = () => {
  const id = uuidv4();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    id: id,
    password: "",
    email: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [matchingMessage, setMatchingMessage] = useState("");

  const handleChange = (e: any) => {
    const value = e.target.value.toLowerCase();
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const passwordMatch = () => {
    if (formData.password !== repeatPassword) {
      setMatchingMessage("Passordene er ulike");
      return false;
    } else {
      setMatchingMessage("");
      return true;
    }
  };

  const handleChangeRepeatPassword = (e: any) => {
    const value = e.target.value;
    setRepeatPassword(value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setErrorMessage("");

    if (passwordMatch()) {
      const res = await fetch("/api/Users", {
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
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      className="rounded-xl dark:text-dark-grey dark:rounded-none bg-light-brown dark:bg-gradient-to-b from-orange to-pink w-[60%] h-[40%] flex items-center justify-center flex-col"
    >
      <div className="flex flex-col items-center  p-1">
        <label>Brukernavn</label>
        <input
          className="rounded-full pl-2 pr-2 text-black bg-soft-pink dark:rounded-none dark:bg-grey w-[80%]"
          id="name"
          type="text"
          name="name"
          required={true}
          onChange={handleChange}
          value={formData.name}
        />
      </div>
      <div className="flex flex-col items-center p-1">
        <label>E-Post</label>
        <input
          className="rounded-full pl-2 pr-2 text-black bg-soft-pink dark:rounded-none dark:bg-grey w-[80%]"
          id="email"
          type="text"
          name="email"
          required={true}
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div className="flex flex-col items-center p-1">
        <label>Passord</label>
        <input
          className="rounded-full pl-2 pr-2 text-black bg-soft-pink dark:rounded-none dark:bg-grey w-[80%]"
          id="password"
          type="password"
          name="password"
          required={true}
          onChange={handleChange}
          value={formData.password}
        />
      </div>
      <div>
        <h3 className="text-danger-red">{matchingMessage}</h3>
      </div>
      <div className="flex flex-col items-center p-1">
        <label>Gjenta Passord</label>
        <input
          className="rounded-full text-black bg-soft-pink dark:rounded-none dark:bg-grey w-[80%]"
          id="repeatpassword"
          type="password"
          name="repeatpassword"
          required={true}
          onChange={handleChangeRepeatPassword}
          value={repeatPassword}
        />
      </div>
      <div>
        <h3 className="text-danger-red">{errorMessage}</h3>
      </div>
      <div className="flex items-center justify-center p-4 w-full">
        <input
          type="submit"
          value="Opprett Bruker"
          className="bg-brown dark:dark:bg-gradient-to-r from-dark-grey to-black text-soft-pink dark:text-pink rounded-full dark:rounded-none w-[80%] dark:w-[90%] dark:sm:w-[54%] dark:h-[30px] drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px] cursor-pointer
          "
        />
      </div>
    </form>
  );
};

export default CreateUserForm;
