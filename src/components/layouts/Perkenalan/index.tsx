import PasutriCard from "@/components/Organisms/PasutriCard";
interface PerkenalanProps {
  className?: string;
}
export default function Perkenalan({ className }: PerkenalanProps) {
  return (
    <div className={`w-full`}>
      <div
        className={`bg-my_bg_image2 bg-cover text-center flex flex-col items-center justify-center px-11 py-10 ${className} `}
      >
        <div className={`font-bold text-xl font-lobster`}>
          Assalamu’alaikum wr wb.
        </div>
        <div className={`font-montserrat text-base mt-3`}>
          Dengan segala kerendahan hati dan dengan ungkapan syukur atas karunia
          Allah SWT. Kami mengundang Bapak/Ibu/Saudara/Saudari untuk menghadiri
          acara pernikahan kami
        </div>
      </div>
      <div className={`bg-my_bg_image4 px-12 py-14 flex flex-col`}>
        <PasutriCard
          namaAyah={"Bapak Ariyanto"}
          namaIbu={"Ibu Lili Irawati"}
          nama={"Dewanto Surya Setyoadji"}
          desc={"Putra pertama dari"}
        />
        <PasutriCard
          className={`mt-20`}
          namaAyah={"Bapak Lay Wie Liong (Iyong) "}
          namaIbu={"Ibu Supatmi"}
          nama={"Kiki Deya Frilyan Fatmala"}
          desc={"Putri pertama dari"}
        />
      </div>
    </div>
  );
}
