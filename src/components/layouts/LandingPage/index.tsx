"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface LandingPageProps {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
  className?: string;
  playAudio: () => void;
}

export default function LandingPage({
  className,
  state,
  setState,
  playAudio,
}: LandingPageProps) {
  const searchParams = useSearchParams();

  const search = searchParams.get("to");

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center text-center gap-12  py-20 h-full ${className}`}
    >
      <div className="px-16 flex flex-col gap-12">
        <div className={`text-xl font-lobster`}>The Wedding Of</div>
        <div className={`text-4xl font-euphoria`}>
          <div>Kiki Deya</div>
          <div>&</div>
          <div>Dewanto Surya</div>
        </div>
      </div>
      <div className={`font-montserrat`}>
        <div>Special invitation to</div>
        <div className={`font-bold text-lg`}>{search}</div>
      </div>

      <div>
        <button
          onClick={() => {
            setState(true);
            playAudio();
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
