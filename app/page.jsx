"use client";

import Image from "next/image";

import Intro from "@/com/Intro";
import Summary from "@/com/Summary";
import Experience from "@/com/Experience";
import Skills from "@/com/Skills";
import Portfolio from "@/com/Portfolio";
import Works from "@/com/Works";
import Education from "@/com/Education";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center min-w-full">
      <div className="page max-w-[968px] flex flex-col mx-auto gap-16 py-16">
        <Intro />
        <Summary />
        <Experience />
        <Skills />
        <Portfolio />
        <Works />
        <Education />
      </div>
    </div>
  );
}
