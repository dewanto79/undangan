"use client";

import { easeOut, motion } from "framer-motion";
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
    <div className={`text-center p-4`}>
      {/* Wedding Event */}
      <motion.div
        className={`bg-white bg-opacity-50 rounded-lg py-6 px-4 w-full `}
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ margin: "-50px", once: true }}
        >
          <div className={`font-lobster text-4xl`}>Wedding Event</div>
          <div className={`mt-6`}>
            <div className={`font-euphoria text-5xl`}>Selasa</div>
            <div className={`font-inter font-bold text-4xl`}>
              18 . 06 . 2024
            </div>
          </div>
        </motion.div>

        {/* Akad Nikah */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ margin: "-50px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`mt-4 font-montserrat`}
        >
          <div className={`font-bold text-2xl`}>Akad Nikah</div>
          <div className={``}>Pukul 10.00 WIB</div>
        </motion.div>

        <div className={`h-32 my-3`}>
          <motion.div
            initial={{ height: "0px" }}
            whileInView={{ height: "128px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ margin: "-120px" }}
            className={`h-32 w-[3px] bg-black mx-auto `}
          />
        </div>

        {/* Resepsi Pernikahan */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className={`mt-4 font-montserrat`}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <div className={`font-bold text-2xl`}>Resepsi Pernikahan</div>
          <div>Pukul 11.00 s.d 17.00 WIB</div>
        </motion.div>

        {/* Timer */}
        <div className={`flex items-center justify-center gap-1 mt-7`}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col items-center justify-center p-4 drop shadow-lg border bg-white`}
          >
            <div className={`font-bold font-inter`}>{days}</div>
            <div className={`italic font-inter text-xs`}>Hari</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`flex flex-col items-center justify-center p-4 drop shadow-lg border bg-white`}
          >
            <div className={`font-bold font-inter`}>{hours}</div>
            <div className={`italic font-inter text-xs`}>Jam</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className={`flex flex-col items-center justify-center p-4 drop shadow-lg border bg-white`}
          >
            <div className={`font-bold font-inter`}>{minutes}</div>
            <div className={`italic font-inter text-xs`}>Menit</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className={`flex flex-col items-center justify-center p-4 drop shadow-lg border bg-white`}
          >
            <div className={`font-bold font-inter`}>{seconds}</div>
            <div className={`italic font-inter text-xs`}>Detik</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Event Location */}
    </div>
  );
}
