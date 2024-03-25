"use client";
import React from "react";
import { Alex_Brush } from "next/font/google";
import { La_Belle_Aurore } from "next/font/google";
import { useTheme } from "next-themes";

const alex = Alex_Brush({ subsets: ["latin"], weight: "400" });
const bella = La_Belle_Aurore({ subsets: ["latin"], weight: "400" });

const Logo = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex dark:gap-1 flex-col dark:flex-row">
      {theme === "light" ? (
        <div>
          <div
            className={`${bella.className} dark:${alex.className} text-6xl text-brown dark:text-pink `}
          >
            Oslo{"'"}s
          </div>
          <div
            className={`${bella.className} dark:${alex.className} pl-[70px] mt-[-20px] text-4xl dark:pl-[0px] dark:mt-[0px] dark:text-6xl text-light-brown dark:text-pink `}
          >
            Venner
          </div>
        </div>
      ) : (
        <div>
          <div
            className={`${alex.className} text-6xl text-brown dark:text-pink `}
          >
            Oslo{"'"}s Venner
          </div>

        </div>
      )}
    </div>
  );
};

export default Logo;
