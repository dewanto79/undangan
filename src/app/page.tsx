"use client";

import LandingPage from "@/components/layouts/LandingPage";
import { useRef, useState } from "react";
import Content from "./content/page";
import { VolumeCross, VolumeHigh } from "iconsax-react";

export default function Home() {
  const [state, setState] = useState<boolean>(false);
  const [audioStatus, setAudioStatus] = useState<boolean>(false);
  const myRef = useRef<HTMLAudioElement>();

  const startAudio = () => {
    myRef.current?.play();
    setAudioStatus(true);
  };

  const pauseAudio = () => {
    myRef.current?.pause();
    setAudioStatus(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-montserrat max-w-[375px] mx-auto">
      <div className={`bg-cover h-full snap-y snap-mandatory`}>
        <LandingPage
          className={``}
          state={state}
          setState={setState}
          playAudio={startAudio}
        />
      </div>
      {state && <Content />}
      {state && (
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
            <VolumeCross size={24} className={` text-sky-300 `} />
          )}
        </button>
      )}

      <audio ref={myRef as any} src="/audio/bgm.mp3" />
    </main>
  );
}
