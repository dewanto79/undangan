import { Instagram } from "iconsax-react";

export default function Footer() {
  return (
    <div className={`px-12 pt-12 pb-32 bg-[#0C4A6E] text-white text-center`}>
      <div className={`text-xs`}>Undangan ini dibuat oleh</div>
      <div className={`mt-4`}>
        <div className={`flex items-center justify-center font-montserrat`}>
          <div>Jerrie Jayadi</div>
          <div>
            <Instagram className={`w-4 h-4`} />
          </div>
        </div>
        <div className={`flex items-center justify-center font-montserrat`}>
          <div>Dewanto Surya Setyoadji</div>
          <div>
            <Instagram className={`w-4 h-4`} />
          </div>
        </div>
        <div className={`flex items-center justify-center font-montserrat`}>
          <div>Kiki Deya Frilyan Fatmala</div>
          <div>
            <Instagram className={`w-4 h-4`} />
          </div>
        </div>
      </div>
    </div>
  );
}
