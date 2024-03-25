import React from "react";
import Logo from "./(navigation)/Logo";

const Navbar = () => {
  return (
    <div className="bg-orange p-12 flex justify-between">
      <Logo />
      <div className="flex gap-4">
        <div>Admin</div>
        <div>Min Side</div>
        <div>Forum</div>
        <div>Login</div>
      </div>
    </div>
  );
};

export default Navbar;
