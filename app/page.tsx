"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import ForumContainer from "./components/(forum)/ForumContainer";

export default function Home() {

  return (
    <main className="flex h-screen flex-col items-center justify-start p-24 ">
      <ForumContainer />

    </main>
  );
}
