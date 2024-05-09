import Image from "next/image";

export default function Penutup() {
  return (
    <div className={`text-center pt-9 px-8`}>
      <div className={`font-montserrat`}>
        Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
        Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kedua
        mempelai. Atas doa restunya, kami mengucapkan terima kasih. Hormat kami
        yang berbahagia
      </div>
      <div className={`font-euphoria text-4xl mt-6`}>
        Dewanto Surya
        <br />
        &
        <br />
        Kiki Deya
      </div>
      <div className={`my-9`}>
        <Image
          className={`mx-auto`}
          alt={``}
          src={`/images/couple-cat 1.png`}
          width={150}
          height={250}
        />
      </div>
    </div>
  );
}
