import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";

const NavMenu = () => {
  return (
    <div className="bg-light-brown relative left-0 top-100 z-100 rounded-md p-2 dark:bg-gradient-to-t from-orange to-pink text-soft-pink dark:text-dark-grey dark:rounded-none flex flex-col sm:flex-row items-center justify-center gap-4  text-[32px] font-semibold">
      <NavLinks />
    </div>
  );
};

export default NavMenu;
