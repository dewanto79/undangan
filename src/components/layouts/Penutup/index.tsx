import { motion } from "framer-motion";
import Image from "next/image";

export default function Penutup() {
  return (
    <div className={`text-center pt-9 px-8`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-50px 0px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`font-montserrat`}
      >
        Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
        Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kedua
        mempelai. Atas doa restunya, kami mengucapkan terima kasih. Hormat kami
        yang berbahagia
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`font-euphoria text-4xl mt-6`}
      >
        Dewanto Surya
        <br />
        &
        <br />
        Kiki Deya
      </motion.div>
      <div className={`my-9`}>
        <Image
          className={`mx-auto`}
          alt={``}
          src={`/image/couple-cat 1.png`}
          width={150}
          height={250}
        />
      </div>
    </div>
  );
}
