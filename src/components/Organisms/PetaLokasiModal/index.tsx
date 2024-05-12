import Link from "next/link";
import { useRouter } from "next/navigation";

interface PetaLokasiModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export default function PetaLokasiModal({
  isOpen,
  onClose,
}: Readonly<PetaLokasiModalProps>) {
  return (
    <button
      className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center px-1 z-50 ${
        !isOpen && "invisible"
      } w-full`}
      onClick={onClose}
    >
      <button
        className={`bg-[#475569] px-5 py-4 rounded-lg absolute  inset-x-0`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <iframe
          title="lokasi"
          className={`w-full h-[450px]`}
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3947.4584591439207!2d114.191007!3d-8.356479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjEnMjMuMyJTIDExNMKwMTEnMjcuNiJF!5e0!3m2!1sen!2sid!4v1715259647290!5m2!1sen!2sid"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <Link
          href={`https://www.google.com/maps/dir/?api=1&destination=-8.356459,114.191025`}
          target="_blank"
        >
          <button
            className={`w-full bg-slate-200 py-3 mt-3 rounded-full active:bg-slate-500`}
          >
            Dapatkan petunjuk arah
          </button>
        </Link>
        <button className={`w-full text-slate-200 mt-3`} onClick={onClose}>
          Tutup
        </button>
      </button>
    </button>
  );
}
