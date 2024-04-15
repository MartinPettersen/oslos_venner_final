import React from "react";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

type Props = {
  subjectType: String;
  subjectId?: String;
};

const ShareWindow = ({ subjectId, subjectType }: Props) => {
  return (
    <div className="absolute z-[100] bg-green dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:text-dark-grey rounded-xl dark:rounded-none  w-[90%]  sm:w-[30%] flex flex-col gap-2">
      <div>{window.location.hostname}</div>
      <div>{window.location.href}</div>

      <DocumentDuplicateIcon className="h-8 w-[50px] font-bold rounded-md sm:hidden text-soft-pink dark:text-dark-grey" />
    </div>
  );
};

export default ShareWindow;
