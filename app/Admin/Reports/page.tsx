import React from "react";
import AdminLayout from "../../components/(admin)/AdminLayout";
import AdminReports from "@/app/components/(admin)/(report)/AdminReports";

const page = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <AdminLayout>
        <AdminReports />
      </AdminLayout>
    </div>
  );
};

export default page;
