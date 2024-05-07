import Carousel from "@/components/Organisms/Carousel";

export default function GaleriFoto() {
  return (
    <div
      className={`px-3 pt-9 pb-14 flex flex-col justify-center items-center`}
    >
      <div className={`font-lobster text-4xl`}>Galeri Foto</div>
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
