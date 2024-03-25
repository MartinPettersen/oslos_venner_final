'use client'
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Home() {

  const {setTheme} = useTheme();
  
  useEffect(() => {
     setTheme('light')
    //setTheme('dark')
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-soft-pink dark:bg-black">
    </main>
  );
}
