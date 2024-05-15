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
        viewport={{ margin: "-50px", once: true }}
        transition={{ duration: 0.5 }}
        className={`font-lobster text-4xl`}
      >
        Galeri Foto
      </motion.div>
      <Carousel
        className={`mt-7`}
        slides={[
          `/image/PreWedding/1.jpg`,
          `/image/PreWedding/2.jpg`,
          `/image/PreWedding/3.jpg`,
          `/image/PreWedding/4.jpg`,
          `/image/PreWedding/5.jpg`,
        ]}
      />
    </div>
  );
}
