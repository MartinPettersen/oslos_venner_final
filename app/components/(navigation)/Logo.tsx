import React from 'react'
import { Alex_Brush } from "next/font/google";
import { La_Belle_Aurore } from "next/font/google";

const alex = Alex_Brush({ subsets: ["latin"], weight: "400" });
const bella = La_Belle_Aurore({ subsets: ["latin"], weight: "400" });

const Logo = () => {
  return (
    <div className='flex dark:gap-1 flex-col dark:flex-row'>
        <div className={`${bella.className} dark:${alex.className} text-6xl text-brown dark:text-pink `}>Oslo{"'"}s</div>
        <div className={`${bella.className} dark:${alex.className} pl-[70px] mt-[-20px] text-4xl dark:text-6xl text-light-brown dark:text-pink `}>Venner</div>
    </div>
  )
}

export default Logo