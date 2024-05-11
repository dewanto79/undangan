import PasutriCard from "@/components/Organisms/PasutriCard";
import { motion, useScroll } from "framer-motion";
interface PerkenalanProps {
  className?: string;
}
export default function Perkenalan({ className }: PerkenalanProps) {
  const { scrollYProgress } = useScroll();
  return (
    <div className={`w-full`}>
      <div
        className={`bg-my_bg_image2 bg-cover text-center flex flex-col items-center justify-center px-11 py-10 ${className}`}
      >
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`font-bold text-xl font-lobster`}
        >
          Assalamu’alaikum wr wb.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`font-montserrat text-base mt-3`}
        >
          Dengan segala kerendahan hati dan dengan ungkapan syukur atas karunia
          Allah SWT. Kami mengundang Bapak/Ibu/Saudara/Saudari untuk menghadiri
          acara pernikahan kami
        </motion.div>
      </div>
      <div className={`bg-my_bg_image4  py-14 flex flex-col `}>
        <PasutriCard
          namaAyah={"Bapak Ariyanto"}
          namaIbu={"Ibu Lili Irawati"}
          nama={"Dewanto Surya Setyoadji"}
          desc={"Putra pertama dari"}
          foto={"bg-my_bg_dewan"}
        />
        <PasutriCard
          className={`mt-20`}
          namaAyah={"Bapak Lay Wie Liong (Iyong) "}
          namaIbu={"Ibu Supatmi"}
          nama={"Kiki Deya Frilyan Fatmala"}
          desc={"Putri pertama dari"}
          foto={"bg-my_bg_kiki"}
        />
      </div>
    </div>
  );
}
