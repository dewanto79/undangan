import Carousel from "@/components/Organisms/Carousel";
import { motion } from "framer-motion";

export default function GaleriFoto() {
  return (
    <div
      className={`px-3 pt-9 pb-14 flex flex-col justify-center items-center`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-200px", once: true }}
        transition={{ duration: 0.5 }}
        className={`font-lobster text-4xl`}
      >
        Galeri Foto
      </motion.div>
      <Carousel
        className={`mt-7`}
        slides={[
          `/images/PreWedding/1.jpg`,
          `/images/PreWedding/2.jpg`,
          `/images/PreWedding/3.jpg`,
          `/images/PreWedding/4.jpg`,
          `/images/PreWedding/5.jpg`,
        ]}
      />
    </div>
  );
}
