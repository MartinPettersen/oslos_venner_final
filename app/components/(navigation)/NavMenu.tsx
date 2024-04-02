import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";

const NavMenu = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white dark:text-grey text-[32px] font-semibold">
      <NavLinks />
    </div>
  );
};

export default NavMenu;
