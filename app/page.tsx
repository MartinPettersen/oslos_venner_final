'use client'
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function Home() {

  const {theme, setTheme} = useTheme();
  
  useEffect(() => {
    //setTheme('dark')
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }

  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
    </main>
  );
}
