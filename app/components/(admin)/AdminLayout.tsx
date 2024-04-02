import React from "react";
import AdminNavBar from "./AdminNavBar";

type Props = {
    children: React.ReactNode;
}

const AdminLayout = ({children}: Props) => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex justify-center pt-[50%] sm:pt-24 sm:justify-end sm:pr-[127px] ">
        <AdminNavBar />
      </div>
      {children}
    </div>
  );
};

export default AdminLayout;
