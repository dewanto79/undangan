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
      <div className={`w-[215px] h-[317px] ${foto} bg-cover rounded-[50%]`} />
      <div className="font-euphoria text-3xl">{nama}</div>
      <div className={``}>
        <div className={`font-montserrat text-base text-center `}> {desc}</div>
        <div className={`font-lobster text-center -space-y-0.5`}>
          <div className={`text-xl`}>{namaAyah}</div>
          <div className={`text-lg`}>dan</div>
          <div className={`text-xl`}>{namaIbu}</div>
        </div>
      </div>
    </div>
  );
}
