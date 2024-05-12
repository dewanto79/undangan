"use client";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

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
}: Readonly<LandingPageProps>) {
  const searchParams = useSearchParams();

  const search = searchParams.get("to");

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center text-center gap-12 h-full ${className}`}
    >
      <div className="px-16 flex flex-col gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, ease: "easeIn" }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={`text-2xl font-lobster`}
        >
          The Wedding Of
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          className={`text-4xl font-euphoria`}
        >
          <div>Kiki Deya</div>
          <div>&</div>
          <div>Dewanto Surya</div>
        </motion.div>
      </div>
      <div className={`font-montserrat`}>
        <motion.div
          initial={{ opacity: 0, x: 5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
        >
          Special invitation to
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          className={`font-bold text-lg`}
        >
          {search}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
      >
        <button
          onClick={() => {
            setState(true);
            playAudio();
          }}
          className={`bg-sky-200 px-4 py-2 rounded-lg active:bg-sky-300 transform transition-all duration-50 ${
            state && "invisible"
          }`}
        >
          Buka Undangan
        </button>
      </motion.div>
    </div>
  );
}
