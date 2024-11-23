"use client";

import Header from "@/components/header/Header";
import Primeira from "@/components/main-sections/Primeira";
import Quarta from "@/components/main-sections/Quarta";
import Segunda from "@/components/main-sections/Segunda";
import Terceira from "@/components/main-sections/Terceira";

export default function Home() {
  return (
    <div className="">
      <Header main/>
      <main className="flex relative flex-col">
        <Primeira/>
        <Segunda/>
        <Terceira/>
        <Quarta/>
      </main>
    </div>
  );
}
