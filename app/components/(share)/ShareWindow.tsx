import React from "react";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

type Props = {
  subjectType: String;
  subjectId?: String;
};

const ShareWindow = ({ subjectId, subjectType }: Props) => {
  const getUrl = () => {
    if (subjectType === "thread") {
        return `${window.location.hostname}/Thread/${subjectId}`;
    } else if (subjectType === "post") {
      return `${window.location.hostname}/Reply/${subjectId}`;
    } else if (subjectType === "user") {
      return `${window.location.hostname}/User/${subjectId}`;
    }
  };

  const handleCopy = async () => {
    const text = getUrl();
    return await navigator.clipboard.writeText(text!);
  };

  return (
    <div className="absolute z-[100] bg-green dark:bg-gradient-to-r from-orange to-pink h-[20%] text-soft-pink dark:text-dark-grey rounded-xl dark:rounded-none  w-[90%]  sm:w-[30%] flex flex-col sm:flex-row items-center justify-center gap-2">
      <div className="border border-soft-pink dark:border-dark-grey">{getUrl()}</div>

      <div onClick={() => handleCopy()}>
        <DocumentDuplicateIcon className="h-8 w-[50px] font-bold rounded-md text-soft-pink dark:text-dark-grey cursor-pointer" />
      </div>
    </div>
  );
};

export default ShareWindow;
