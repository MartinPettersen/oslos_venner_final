'use client'

import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { useSession, signOut } from "next-auth/react";
import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/solid";

import { useTheme } from "next-themes";


import { options } from "@/app/api/auth/[...nextauth]/options";

const NavLinks = () => {
  // const session = await getServerSession(options);

  const { data: session }: any = useSession();

  const { theme, setTheme } = useTheme();



  return (
    <>
    {session?.user?.role === "admin"?
      <Link href="/Admin/Reports" className="drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px]">
        Admin
      </Link>
      : null}
      <Link
        href="/MyPage"
        className="drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px]"
      >
        Min Side
      </Link>
      <Link href="/" className="drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px]">
        Forum
      </Link>
      


      {session ? (
        <Link href="/api/auth/signout?callbackUrl=/" className="drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px]">
          Logg Ut
        </Link>
      ) : (
        <Link href="/api/auth/signin" className="drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px]">
          Login
        </Link>
      )}
      {
        theme !== "light"?
        
       
      <MoonIcon
      onClick={() => setTheme("light")}
        className="h-8 w-[50px] font-bold rounded-md text-white dark:text-grey drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px]"
      />
        :
        <SunIcon
        onClick={() => setTheme("dark")}

        className="h-8 w-[50px] font-bold rounded-md text-white dark:text-grey drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px]"
      />

      }
    </>
  );
};

export default NavLinks;
