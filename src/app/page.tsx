"use client";

import Doa from "@/components/layouts/Doa";
import LandingPage from "@/components/layouts/LandingPage";
import Image from "next/image";
import { useState } from "react";
import Content from "./content/page";

export default function Home() {
  const [state, setState] = useState<boolean>(true);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-montserrat max-w-[375px] mx-auto  ">
      <div className={`bg-cover h-full snap-y snap-mandatory`}>
        <LandingPage className={``} state={state} setState={setState} />
      </div>
      {state && <Content />}
    </main>
  );
}
