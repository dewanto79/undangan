import { Instagram, Link21 } from "iconsax-react";
import Link from "next/link";

const data = [
  {
    id: 1,
    name: "Jerrie Jayadi",
    instagram: "https://www.instagram.com/t_jerriejayadi/",
    website: "https://my-portfolio-next-jet.vercel.app/en",
  },
  {
    id: 2,
    name: "Dewanto Surya Setyoadji",
    instagram: "https://www.instagram.com/dsetyoadji/",
  },
  {
    id: 3,
    name: "Ahmad Naufal Firdaus",
    instagram: "https://www.instagram.com/ahmednaufal.f/",
    website: "https://ahmadnaufal.dev/",
  },
];
export default function Footer() {
  return (
    <div className={`px-12 pt-12 pb-32 bg-[#0C4A6E] text-gray-200 text-center`}>
      <div className={`text-xs`}>Undangan ini dibuat oleh</div>
      <div className={`mt-6`}>
        {data.map((rows) => (
          <div
            key={rows.id}
            className={`flex items-center justify-center font-montserrat gap-2 mb-2`}
          >
            <div className="text-sm">{rows.name}</div>
            {rows.instagram && (
              <Link href={`${rows.instagram}`} target="_blank">
                <Instagram className={`w-6 h-6`} />
              </Link>
            )}
            {rows.website && (
              <Link href={`${rows.website}`} target="_blank">
                <Link21 className={`w-6 h-6`} />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
