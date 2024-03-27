import React from "react";
import Logo from "./(logo)/Logo";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
  return (
    <div className="z-1 absolute w-screen pt-[50px] sm:pt-[30px] sm:p-12 sm:pl-[127px] sm:pr-[127px] flex flex-col sm:flex-row items-center justify-between">
      <Logo />
      <HamburgerMenu />     
    </div>
  );
};

export default Navbar;
