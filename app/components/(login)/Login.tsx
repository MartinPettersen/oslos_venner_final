"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  className?: string;
  callbackUrl?: string;
};

const Login = ({ className, callbackUrl }: Props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: true,
      callbackUrl: callbackUrl ?? "/",
    });

    console.log("fe");
  };

  const handleChange = (e: any) => {
    const value = e.target.value.toLowerCase();
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div
      className={`${className} flex items-center justify-center  w-full h-full`}
    >
      <form
        onSubmit={handleSubmit}
        method="post"
        className="rounded-xl dark:text-dark-grey dark:rounded-none bg-light-brown dark:bg-gradient-to-b from-orange to-pink w-[60%] h-[40%] flex items-center justify-center flex-col"
      >
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

        <div className="flex flex-col w-[90%] items-center justify-center ">

        <div className="flex items-center justify-center p-4 w-full">
          <input
            type="submit"
            value="Login"
            className="bg-brown dark:dark:bg-gradient-to-r from-dark-grey to-black text-soft-pink dark:text-pink rounded-full dark:rounded-none w-[15rem] sm:w-[170px]  dark:h-[30px] drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px] cursor-pointer"
          />
        </div>
        <Link
          href="/CreateUser"
          className="flex items-center justify-center bg-brown dark:dark:bg-gradient-to-r from-dark-grey to-black text-soft-pink dark:text-pink rounded-full dark:rounded-none w-[170px] dark:h-[30px] drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px] cursor-pointer"
        >
          Opprett bruker
        </Link>
        </div>

      </form>
    </div>
  );
};

export default Login;
