import React from "react";
import Logo from "./(navigation)/Logo";

const Navbar = () => {
  return (
    <div className="z-1 absolute w-screen p-12 flex justify-between">
      <Logo />
      <div className="flex gap-4 text-white dark:text-grey text-[32px] font-semibold">
        <div>Admin</div>
        <div>Min Side</div>
        <div>Forum</div>
        <div>Login</div>
      </div>
    </div>
  );
};

export default Navbar;
