import Image from "next/image";

interface PasutriCard {
  className?: string;
  namaAyah: string;
  namaIbu: string;
  nama: string;
  desc: string;
}
export default function PasutriCard({
  className,
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
      <div className={`w-[215px] h-[317px] bg-[#D9D9D9] rounded-[50%]`} />
      <div className="font-euphoria text-2xl">{nama}</div>
      <div className={``}>
        <div className={`font-montserrat text-xs text-center `}> {desc}</div>
        <div className={`font-lobster text-center -space-y-0.5`}>
          <div>{namaAyah}</div>
          <div className={`text-xs`}>dan</div>
          <div>{namaIbu}</div>
        </div>
      </div>
    </div>
  );
}
