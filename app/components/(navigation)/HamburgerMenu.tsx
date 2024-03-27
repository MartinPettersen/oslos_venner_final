import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import NavMenu from "./NavMenu";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";

const HamburgerMenu = () => {

  return (
    <div className="flex flex-col  items-center justify-center">
      <Hamburger />
      <div className=" hidden sm:flex flex-col sm:flex-row items-center justify-center gap-4  text-white dark:text-grey text-[32px] font-semibold">
          <NavLinks />
        </div>
    </div>
  );
};

export default HamburgerMenu;
