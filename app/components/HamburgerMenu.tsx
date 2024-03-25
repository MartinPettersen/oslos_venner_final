"use client";
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const HamburgerMenu = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {!toggle ? (
        <Bars3Icon onClick={() => setToggle(!toggle)} className="h-8 w-8 rounded-md" />
      ) : (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white dark:text-grey text-[32px] font-semibold">
          <div>Admin</div>
          <div>Min Side</div>
          <div>Forum</div>
          <div>Login</div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
