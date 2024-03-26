import Link from "next/link";
import React from "react";

const NavMenu = () => {
  return (
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white dark:text-grey text-[32px] font-semibold">
          <Link href="/" className="relative hover:top-[2px] hover:left-[3px]">Admin</Link>
          <Link href="/MyPage" className="relative hover:top-[2px] hover:left-[3px]">Min Side</Link>
          <Link href="/" className="relative hover:top-[2px] hover:left-[3px]">Forum</Link>
          <Link href="/" className="relative hover:top-[2px] hover:left-[3px]">Login</Link>
        </div>
  );
};

export default NavMenu;
