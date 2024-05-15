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

  const search = searchParams.get("to") ?? "Nama";

  return (
    <div className={`min-h-screen h-full text-center ${className}`}>
      <div className="px-16 py-24 flex flex-col gap-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: "easeInOut" }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          className={`text-2xl font-lobster`}
        >
          The Wedding Of
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 },
          }}
          className={`text-4xl font-euphoria`}
        >
          <div>Dewanto Surya</div>
          <div>&</div>
          <div>Kiki Deya</div>
        </motion.div>
      </div>
      <div className={`font-montserrat`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 10 },
          }}
        >
          Special invitation to
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -10 },
          }}
          className={`font-bold text-lg max-w-[320px]`}
        >
          {search}
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
        }}
        className="my-4"
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
