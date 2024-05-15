import { motion } from "framer-motion";
import Image from "next/image";

interface PasutriCard {
  className?: string;
  namaAyah: string;
  namaIbu: string;
  nama: string;
  desc: string;
  foto: string;
}
export default function PasutriCard({
  className,
  foto,
  desc,
  namaAyah,
  namaIbu,
  nama,
}: PasutriCard) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
    >
      {/* image */}
      {/* <Image alt="" src={""} className={`w-[215px] h-[317px]`} /> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-200px 0px", once: true }}
        transition={{ duration: 1 }}
        className={`w-[215px] h-[317px] ${foto} bg-cover rounded-[50%]`}
      />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-50px 0px" }}
        transition={{ duration: 0.5 }}
        className={`flex flex-col gap-3`}
      >
        <motion.div
          className={`font-euphoria whitespace-nowrap text-3xl text-center`}
        >
          {nama}
        </motion.div>
        <div className={``}>
          <div className={`font-montserrat text-base text-center `}>
            {" "}
            {desc}
          </div>
          <div className={`font-lobster text-center -space-y-0.5`}>
            <div className={`text-xl`}>{namaAyah}</div>
            <div className={`text-lg`}>dan</div>
            <div className={`text-xl`}>{namaIbu}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
