import PetaLokasiModal from "@/components/Organisms/PetaLokasiModal";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface EventLocationProps {
  className?: string;
}

export default function EventLocation({ className }: EventLocationProps) {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className={`px-9 py-36 relative ${className} text-center w-full`}>
      <motion.div
        // animate={{ rotate: [-15, 0, 15, 0, -15] }}
        // transition={{ repeat: Infinity }}
        className={`absolute top-0 left-0`}
      >
        <Image
          className={``}
          alt=""
          src={`/images/bnga-top-left.png`}
          width={233}
          height={152}
        />
      </motion.div>
      <Image
        className={`absolute bottom-0 right-0`}
        alt=""
        src={`/images/bunga-bottom-right.png`}
        width={233}
        height={152}
      />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ margin: "-50px", once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`font-lobster text-4xl`}
      >
        Event Location
      </motion.div>
      <div className={`mt-6`}>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`text-xl font-bold`}
        >
          Rumah Mempelai Wanita
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`px-3 mt-4 font-montserrat`}
        >
          Dusun Temurejo RT 01 RW 05 Desa Kembiritan, Kec. Genteng
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <button
          onClick={() => {
            setModal(true);
          }}
          className={`bg-sky-200 px-6 py-2 rounded-lg active:bg-sky-300 transform transition-all duration-100 mt-7 text-m shadow-lg`}
        >
          Lihat Peta
        </button>
      </motion.div>
      {modal && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          <PetaLokasiModal
            isOpen={modal}
            onClose={function (): void {
              setModal(false);
            }}
          />
        </motion.div>
      )}
    </div>
  );
}
