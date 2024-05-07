import { Send, Send2 } from "iconsax-react";
import Image from "next/image";

export default function UcapanDanDoa() {
  return (
    <div className={`px-3 h-[680px]`}>
      <div className={`rounded-lg`}>
        {/* Header */}
        <div
          className={`bg-slate-900 flex items-center justify-start px-4 py-3 rounded-t-2xl gap-2`}
        >
          <div>
            <Image
              className={`rounded-full bg-white w-10 h-10`}
              alt=""
              src={`/images/UcapanDanDoaImage.png`}
              width={300}
              height={300}
            />
          </div>
          <div className={`text-white`}>
            <div className={`font-bold font-inter`}>Grup Ucapan dan Doa</div>
            <div className={`text-xs`}>100 Anggota</div>
          </div>
        </div>

        {/* Body */}
        <div
          className={`flex items-start justify-start px-4 py-3 bg-slate-200 gap-2 h-96`}
        >
          {/* Profile Picture */}
          <div className="w-10 h-10 flex-shrink-0">
            <Image
              className={`bg-white rounded-full shrink-0`}
              alt={``}
              src={`/images/profilepicture1.png`}
              width={40}
              height={40}
              objectFit="contain"
            />
          </div>
          <div
            className={`bg-green-50 px-4 pt-2 pb-5 rounded-lg rounded-tl-none`}
          >
            {/* Nama */}
            <div className={`font-inter font-bold text-[#3AA12A] text-xs`}>
              Someone Like Youuuu
            </div>
            {/* Pesan */}
            <div className={`font-inter text-xs mt-2`}>
              Selamat menjalani kehidupan baru yang penuh bahagia. Semoga Tuhan
              selalu melindungi dan memberikan berkah. Amin.
            </div>
          </div>
        </div>
        {/* chat  */}
        <div
          className={`flex items-center justify-between bg-slate-600 px-4 py-2 gap-3 rounded-bl-2xl rounded-br-2xl`}
        >
          <div
            className={`bg-stone-200 px-2 py-2 rounded-lg text-xs w-full italic text-[#7B7B7B]`}
          >
            Tuliskan ucapan atau kata
          </div>
          <Send
            variant={`Bold`}
            className={`bg-stone-200 text-slate-600 rounded-[100%]  w-8 h-8`}
          />
        </div>
      </div>
    </div>
  );
}
