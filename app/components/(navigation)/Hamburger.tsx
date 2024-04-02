"use client";

import React, { useState } from 'react'

import { Bars3Icon } from "@heroicons/react/24/solid";
import NavMenu from "./NavMenu";

const Hamburger = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
    <Bars3Icon
        onClick={() => setToggle(!toggle)}
        className="h-8 w-[50px] font-bold rounded-md sm:hidden text-green dark:text-grey"
      />
      {!toggle ? null : (
        <div  onClick={() => setToggle(!toggle)}>

          <NavMenu />
        </div>
      )}  
    </>
  )
}

export default Hamburger