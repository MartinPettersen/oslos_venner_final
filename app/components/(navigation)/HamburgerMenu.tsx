"use client";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import NavMenu from "./NavMenu";

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
          <div>Admin</div>
          <div>Min Side</div>
          <div>Forum</div>
          <div>Login</div>
        </div>
    </div>
  );
};

export default HamburgerMenu;
