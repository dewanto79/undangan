import { useState } from "react";
import Image from "next/image";
import { Gift } from "iconsax-react";

export default function KirimHadiah() {
  const [expand, setExpand] = useState<boolean>(false);
  const [rekeningDewanto, setRekeningDewanto] = useState<boolean>(false);
  const [rekeningKiki, setRekeningKiki] = useState<boolean>(false);

  const handleClick = (noRekening: string, name: string) => {
    navigator.clipboard.writeText(noRekening);
    name === "kiki" ? setRekeningKiki(true) : setRekeningDewanto(true);

    setTimeout(() => {
      name === "kiki" ? setRekeningKiki(false) : setRekeningDewanto(false);
    }, 1000);
  };
  return (
    <div
      className={`bg-my_bg_image3  flex flex-col gap-6 items-center justify-center text-center`}
    >
      <div className={`bg-slate-200 bg-opacity-50 h-full py-10`}>
        <div className={`px-7`}>
          <div className={`font-lobster text-4xl`}>Kirim Hadiah</div>
          <div className={`font-inter`}>
            Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan tanda
            kasih untuk mempelai, dapat melalui tombol menu berikut:
          </div>
        </div>
        <div className={`w-full mt-8`}>
          {expand ? (
            <div className={`text-center w-full px-5 divide-y-2 divide-black divide-opacity-15`}>
              <div className={`pb-4`}>
                <div className={`font-inter `}>
                  Nomor Rekening Mempelai Pria
                </div>
                <div
                  className={`px-6 py-6 bg-slate-200 w-full text-left rounded-lg shadow-lg`}
                >
                  <Image
                    alt={``}
                    src={`/images/BRI-Logo.png`}
                    width={76}
                    height={29}
                  />
                  <div className={`mt-2 text-xl`}>000701092500507</div>
                  <div className={`font-montserrat`}>
                    Dewanto Surya Setyoadji
                  </div>
                </div>
                <button
                  disabled={rekeningDewanto}
                  onClick={() => {
                    handleClick("000701092500507", "dewanto");
                  }}
                  className={`bg-sky-200 mt-4 rounded-lg px-4 py-2 active:bg-sky-300 w-56`}
                >
                  {rekeningDewanto ? "Tersalin" : "Salin nomor rekening"}
                </button>
              </div>
              <div className="pb-4">
                <div className={`font-inter mt-4 `}>
                  Nomor Rekening Mempelai Wanita
                </div>
                <div
                  className={`px-6 py-6 bg-slate-200 w-full text-left rounded-lg shadow-lg`}
                >
                  <Image
                    alt={``}
                    src={`/images/BCA-Logo.png`}
                    width={76}
                    height={29}
                  />
                  <div className={`mt-2 text-xl`}>1801732637</div>
                  <div className={`font-montserrat`}>
                    Kiki Deya Frilyan Fatmala
                  </div>
                </div>
                <button
                  disabled={rekeningKiki}
                  onClick={() => {
                    handleClick("1801732637", "kiki");
                  }}
                  className={`bg-sky-200 mt-4 rounded-lg px-4 py-2 active:bg-sky-300 w-56`}
                >
                  {rekeningKiki ? "Tersalin" : "Salin nomor rekening"}
                </button>
              </div>
              <div>
                <div
                  className={`font-inter mt-4 flex items-center justify-center mb-2`}
                >
                  <Gift /> <span className={`ml-3`}>Kirim Hadiah</span>
                </div>
                <div
                  className={`px-6 py-6 bg-slate-200 w-full text-left rounded-lg shadow-lg`}
                >
                  <div className={`mt-2 `}>Kiki Deya Frilyan Fatmala</div>
                  <div className={`font-montserrat text-xs mt-2`}>
                    Dusun Temurejo RT 01 RW 05 Desa Kembiritan, Kec. Genteng
                    Kab. Banyuwangi 68465
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <button
              onClick={() => {
                setExpand(true);
              }}
              className={`bg-sky-200 px-4 py-2 rounded-lg active:bg-sky-300 transform transition-all duration-100 shadow-xl`}
            >
              Kirim hadiah di sini
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
