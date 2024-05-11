import { motion } from "framer-motion";

interface LandingPageProps {
  className?: string;
}

export default function DoaPage({ className }: LandingPageProps) {
  return (
    <motion.div
      className={`flex flex-col items-center justify-center text-center gap-12 px-7 py-9 h-screen ${className}`}
    >
      <div
        className={`px-3 pt-14 pb-20 bg-white bg-opacity-50 rounded-lg shadow-xl drop-shadow-xl flex flex-col gap-12 font-montserrat italic`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-200px" }}
          onViewportEnter={() => {
            console.log("enter");
          }}
          onViewportLeave={() => {
            console.log("exit");
          }}
          transition={{ duration: 0.5 }}
          className={``}
        >
          “Dan di antara tanda-tanda kekuasaanNya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
          terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir”
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onViewportEnter={() => {
            console.log("enter");
          }}
          onViewportLeave={() => {
            console.log("exit");
          }}
          transition={{ duration: 0.5 }}
          className={``}
        >
          QS. Ar-Rum (30) : 21
        </motion.div>
      </div>
    </motion.div>
  );
}
