"use client";

import { useEffect, useRef, useState } from "react";

interface WeddingEventProps {
  className?: string;
}

export default function WeddingEvent({ className }: WeddingEventProps) {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  let interval = useRef<NodeJS.Timeout>();
  const startTimer = () => {
    const weddingDate = new Date("June 18, 2024 10:00:00").getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = (weddingDate as any) - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  const getTime = () => {
    const time =
      new Date("June 18, 2024 10:00:00").getTime() - new Date().getTime();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const time =
        new Date("June 18, 2024 10:00:00").getTime() - new Date().getTime();

      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Number(Math.floor((time / 1000) % 60)));
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className={`text-center p-5`}>
      {/* Wedding Event */}
      <div className={`bg-white bg-opacity-50 rounded-lg py-6 px-4 w-full`}>
        <div>
          <div className={`font-lobster text-4xl`}>Wedding Event</div>
          <div className={`mt-6`}>
            <div className={`font-euphoria text-5xl`}>Selasa</div>
            <div className={`font-inter font-bold text-4xl`}>
              18 . 06 . 2024
            </div>
          </div>
        </div>

        {/* Akad Nikah */}
        <div className={`mt-4 font-montserrat`}>
          <div className={`font-bold text-2xl`}>Akad Nikah</div>
          <div className={``}>Pukul 10.00 WIB</div>
        </div>

        <div className={`h-20 w-[3px] bg-black mx-auto my-3`} />

        {/* Resepsi Pernikahan */}
        <div className={` font-montserrat`}>
          <div className={`font-bold text-2xl`}>Resepsi Pernikahan</div>
          <div>Pukul 11.00 s.d 17.00 WIB</div>
        </div>

        {/* Timer */}
        <div className={`flex items-center justify-center gap-1 mt-7`}>
          <div
            className={`flex flex-col items-center justify-center p-4 drop shadow-lg border bg-white`}
          >
            <div className={`font-bold font-inter`}>{days}</div>
            <div className={`italic font-inter text-xs`}>Hari</div>
          </div>
          <div
            className={`flex flex-col items-center justify-center p-4 drop shadow-lg border bg-white`}
          >
            <div className={`font-bold font-inter`}>{hours}</div>
            <div className={`italic font-inter text-xs`}>Jam</div>
          </div>
          <div
            className={`flex flex-col items-center justify-center p-4 drop shadow-lg border bg-white`}
          >
            <div className={`font-bold font-inter`}>{minutes}</div>
            <div className={`italic font-inter text-xs`}>Menit</div>
          </div>
          <div
            className={`flex flex-col items-center justify-center p-4 drop shadow-lg border bg-white`}
          >
            <div className={`font-bold font-inter`}>{seconds}</div>
            <div className={`italic font-inter text-xs`}>Detik</div>
          </div>
        </div>
      </div>

      {/* Event Location */}
    </div>
  );
}
