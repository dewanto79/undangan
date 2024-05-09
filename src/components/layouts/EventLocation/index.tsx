import PetaLokasiModal from "@/components/Organisms/PetaLokasiModal";
import Image from "next/image";
import { useState } from "react";

interface EventLocationProps {
  className?: string;
}

export default function EventLocation({ className }: EventLocationProps) {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className={`px-9 py-36 relative ${className} text-center w-full`}>
      <Image
        className={`absolute top-0 left-0`}
        alt=""
        src={`/images/bnga-top-left.png`}
        width={233}
        height={152}
      />
      <Image
        className={`absolute bottom-0 right-0`}
        alt=""
        src={`/images/bunga-bottom-right.png`}
        width={233}
        height={152}
      />
      <div className={`font-lobster text-4xl`}>Event Location</div>
      <div className={`mt-6`}>
        <div className={`text-xl font-bold`}>Rumah Mempelai Wanita</div>
        <div className={`px-3 mt-4 font-montserrat`}>
          Dusun Temurejo RT 01 RW 05 Desa Kembiritan, Kec. Genteng
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            setModal(true);
          }}
          className={`bg-sky-200 px-4 py-2 rounded-lg active:bg-sky-300 transform transition-all duration-100 mt-7 text-xs shadow-lg`}
        >
          Lihat Peta
        </button>
      </div>
      {modal && (
        <PetaLokasiModal
          isOpen={modal}
          onClose={function (): void {
            setModal(false);
          }}
        />
      )}
    </div>
  );
}
