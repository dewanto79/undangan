"use client";

import { useEffect, useRef, useState } from "react";

interface WeddingEventProps {
  className?: string;
}

export default function WeddingEvent({ className }: WeddingEventProps) {
  const [days, setDays] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [seconds, setSeconds] = useState<number>();

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
    console.log(days, hours, minutes, seconds);
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className={`p-6 bg-white text-center`}>
      {/* Wedding Event */}
      <div>
        <div className={`font-lobster text-4xl`}>Wedding Event</div>
        <div className={`mt-6`}>
          <div className={`font-euphoria text-5xl`}>Selasa</div>
          <div className={`font-inter font-bold text-4xl`}>18 . 06 . 2024</div>
        </div>
      </div>

      {/* Akad Nikah */}
      <div className={`mt-4 font-montserrat`}>
        <div className={`font-bold text-2xl`}>Akad Nikah</div>
        <div className={``}>Pukul 10.00 WIB</div>
      </div>

      {/* Resepsi Pernikahan */}
      <div className={`mt-24 font-montserrat`}>
        <div className={`font-bold text-2xl`}>Resepsi Pernikahan</div>
        <div>Pukul 11.00 s.d 17.00 WIB</div>
      </div>

      {/* Timer */}
      <div className={`flex items-center justify-center gap-3 mt-7`}>
        <div
          className={`flex flex-col items-center justify-center p-4 drop shadow-lg border`}
        >
          <div>{days}</div>
          <div>hari</div>
        </div>
        <div
          className={`flex flex-col items-center justify-center p-4 drop shadow-lg border`}
        >
          <div>{hours}</div>
          <div>Jam</div>
        </div>
        <div
          className={`flex flex-col items-center justify-center p-4 drop shadow-lg border`}
        >
          <div>{minutes}</div>
          <div>Menit</div>
        </div>
        <div
          className={`flex flex-col items-center justify-center p-4 drop shadow-lg border`}
        >
          <div>{days}</div>
          <div>Detik</div>
        </div>
      </div>
    </div>
  );
}
