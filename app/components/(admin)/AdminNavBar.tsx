import React from "react";

const AdminNavBar = () => {
  return (
    <div className="bg-light-brown dark:bg-gradient-to-r from-orange to-pink text-soft-pink rounded-full dark:rounded-none dark:text-dark-grey sm:text-[32px] font-semibold w-[260px] h-[40px] sm:w-[492px] sm:h-[70px] flex items-center gap-4 justify-center flex-row">
      <div>Opprett Forum</div>
      <div className="font-extrabold">|</div>
      <div>Rapporter</div>
    </div>
  );
};

export default AdminNavBar;
