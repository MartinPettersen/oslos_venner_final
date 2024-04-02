import React from "react";
import AdminLayout from "../../components/(admin)/AdminLayout";
import CreateForumForm from "@/app/components/(admin)/CreateForumForm";

const page = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <AdminLayout>
        <CreateForumForm />
      </AdminLayout>
    </div>
  );
};

export default page;
