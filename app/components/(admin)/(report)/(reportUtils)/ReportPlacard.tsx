import React from "react";

type Props = {
  label: String;
};

const ReportPlacard = ({ label }: Props) => {
  return (
    <div className="bg-green rounded-xl dark:bg-gradient-to-r from-orange to-pink text-soft-pink dark:rounded-none dark:text-dark-grey p-1 px-3 sm:w-[30%]">
        {label}
    </div>
  );
};

export default ReportPlacard;
