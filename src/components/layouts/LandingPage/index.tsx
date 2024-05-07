"use client";

import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface LandingPageProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export default function LandingPage({
  className,
  state,
  setState,
}: LandingPageProps) {
  const router = useRouter();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center text-center gap-12 px-16 py-20 h-full ${className}`}
    >
      <div className={`text-xl font-lobster`}>The Wedding Of</div>
      <div className={`text-4xl font-euphoria`}>
        <div>Kiki Deya</div>
        <div>&</div>
        <div>Dewanto Surya</div>
      </div>
      <div className={`font-montserrat`}>
        <div>Special invitation to</div>
        <div className={`font-bold text-lg`}>Someone like youuuuuu</div>
      </div>

      <div>
        <button
          onClick={() => {
            setState(true);
            router.push(`#content`);
          }}
          className={`bg-sky-200 px-4 py-2 rounded-lg active:bg-sky-300 transform transition-all duration-100 ${
            state && "invisible"
          }`}
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
