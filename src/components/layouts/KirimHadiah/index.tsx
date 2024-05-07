export default function KirimHadiah() {
  return (
    <div
      className={`px-7 py-10 flex flex-col gap-6 items-center justify-center text-center`}
    >
      <div className={`font-lobster text-4xl`}>Kirim Hadiah</div>
      <div className={`font-inter`}>
        Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan tanda
        kasih untuk mempelai, dapat melalui tombol menu berikut:
      </div>
      <div>
        <button
          className={`bg-sky-200 px-4 py-2 rounded-lg active:bg-sky-300 transform transition-all duration-100 shadow-xl`}
        >
          Kirim hadiah di sini
        </button>
      </div>
    </div>
  );
}
