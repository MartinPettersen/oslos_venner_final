'use client'

import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { useSession, signOut } from "next-auth/react";

import { options } from "@/app/api/auth/[...nextauth]/options";

const NavLinks = () => {
  // const session = await getServerSession(options);

  const { data: session }: any = useSession();

  return (
    <>
      <Link href="/Admin" className="relative hover:top-[2px] hover:left-[3px]">
        Admin
      </Link>
      <Link
        href="/MyPage"
        className="relative hover:top-[2px] hover:left-[3px]"
      >
        Min Side
      </Link>
      <Link href="/" className="relative hover:top-[2px] hover:left-[3px]">
        Forum
      </Link>

      {session ? (
        <Link href="/api/auth/signout?callbackUrl=/" className="relative hover:top-[2px] hover:left-[3px]">
          Logg Ut
        </Link>
      ) : (
        <Link href="/api/auth/signin" className="relative hover:top-[2px] hover:left-[3px]">
          Login
        </Link>
      )}
    </>
  );
};

export default NavLinks;
