"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface LandingPageProps {
  className?: string;
}

export default function LandingPage({ className }: LandingPageProps) {
  const router = useRouter();

  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval = useRef()

  // const startTimer = () => {
  //   const countdownDate = new Date("May 4 2024 00:00:00")

  //   interval = setInterval(())
  // }

  useEffect(()=>{
    
  },[])
  return (
    <div
      className={`flex flex-col items-center justify-center text-center gap-12 px-16 py-20 h-full ${className}`}
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
            router.push("/content");
          }}
          className={`bg-sky-200 px-4 py-2 rounded-lg active:bg-sky-300 transform transition-all duration-100 `}
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
