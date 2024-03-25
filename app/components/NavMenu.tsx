import React from "react";

const NavMenu = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white dark:text-grey text-[32px] font-semibold">
      <div>Admin</div>
      <div>Min Side</div>
      <div>Forum</div>
      <div>Login</div>
    </div>
  );
};

export default NavMenu;
