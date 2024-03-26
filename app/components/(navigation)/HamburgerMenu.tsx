"use client";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import NavMenu from "./NavMenu";
import Link from "next/link";

const HamburgerMenu = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-col  items-center justify-center">
      <Bars3Icon
        onClick={() => setToggle(!toggle)}
        className="h-8 w-[50px] font-bold rounded-md sm:hidden text-green dark:text-grey"
      />
      {!toggle ? null : (
        <NavMenu />
      )}
      <div className=" hidden sm:flex flex-col sm:flex-row items-center justify-center gap-4 text-white dark:text-grey text-[32px] font-semibold">
          <Link href="/" className="relative hover:top-[2px] hover:left-[3px]">Admin</Link>
          <Link href="/MyPage" className="relative hover:top-[2px] hover:left-[3px]">Min Side</Link>
          <Link href="/" className="relative hover:top-[2px] hover:left-[3px]">Forum</Link>
          <Link href="/" className="relative hover:top-[2px] hover:left-[3px]">Login</Link>
        </div>
    </div>
  );
};

export default HamburgerMenu;
