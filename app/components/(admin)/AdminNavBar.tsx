import Link from "next/link";
import React from "react";

const AdminNavBar = () => {
  return (
    <div className="bg-light-brown dark:bg-gradient-to-r from-orange to-pink text-soft-pink rounded-full dark:rounded-none dark:text-dark-grey sm:text-[32px] font-semibold w-[260px] h-[40px] sm:w-[492px] sm:h-[70px] flex items-center gap-4 justify-center flex-row">
      <Link href="/Admin/CreateForum" className="drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px]">
        Opprett Forum
      </Link>
      <div className="font-extrabold">|</div>
      <Link href="/Admin/Reports" className="drop-shadow-xl hover:drop-shadow-none relative hover:top-[2px] hover:left-[3px]">
        Rapporter
      </Link>
    </div>
  );
};

export default AdminNavBar;
