import { Instagram } from "iconsax-react";
import Link from "next/link";

const data = [
  {
    id: 1,
    name: "Jerrie Jayadi",
    instagram: "https://www.instagram.com/t_jerriejayadi/",
  },
  {
    id: 2,
    name: "Dewanto Surya Setyoadji",
    instagram: "https://www.instagram.com/dsetyoadji/",
  },
  {
    id: 3,
    name: "Kiki Deya Frilyan Fatmala",
    instagram: "https://www.instagram.com/frilyandea/",
  },
];
export default function Footer() {
  return (
    <div className={`px-12 pt-12 pb-32 bg-[#0C4A6E] text-white text-center`}>
      <div className={`text-xs`}>Undangan ini dibuat oleh</div>
      <div className={`mt-6`}>
        {data.map((rows) => (
          <div
            key={rows.id}
            className={`flex items-center justify-center font-montserrat gap-2 mb-2`}
          >
            <div>{rows.name}</div>
            <Link href={`${rows.instagram}`} target="_blank">
              <Instagram className={`w-6 h-6`} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
