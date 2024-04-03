import React from "react";
import AdminLayout from "../../components/(admin)/AdminLayout";

const page = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <AdminLayout>
        <div className="flex items-center justify-center">page</div>
      </AdminLayout>
    </div>
  );
};

export default page;
