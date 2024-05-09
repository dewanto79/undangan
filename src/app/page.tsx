"use client";

import Doa from "@/components/layouts/Doa";
import LandingPage from "@/components/layouts/LandingPage";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Content from "./content/page";
import {
  Pause,
  Play,
  VolumeCross,
  VolumeHigh,
  VolumeMute,
} from "iconsax-react";

export default function Home() {
  const [state, setState] = useState<boolean>(true);
  const [audioStatus, setAudioStatus] = useState<boolean>(false);
  const audio = new Audio("/audio/bgm.mp3");
  const myRef = useRef<HTMLAudioElement>();

  const startAudio = () => {
    myRef.current?.play();

    setAudioStatus(true);
  };

  const pauseAudio = () => {
    console.log("here");
    myRef.current?.pause();
    setAudioStatus(false);
  };

  useEffect(() => {
    state && startAudio();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-montserrat max-w-[375px] mx-auto  ">
      <div className={`bg-cover h-full snap-y snap-mandatory`}>
        <LandingPage className={``} state={state} setState={setState} />
      </div>
      {state && <Content />}
      <button
        className={`fixed bottom-5 right-5 ${
          audioStatus ? "bg-sky-200" : "bg-sky-100"
        } p-2 rounded-lg text-xs`}
        onClick={() => {
          audioStatus ? pauseAudio() : startAudio();
        }}
      >
        {audioStatus ? (
          <VolumeHigh size={24} className={` text-sky-500 `} />
        ) : (
          <VolumeCross size={24} className={` text-sky-500 text-sky-300 `} />
        )}
      </button>
      <audio ref={myRef as any} src="/audio/bgm.mp3" />
    </main>
  );
}
