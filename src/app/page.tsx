import Doa from "@/components/layouts/Doa";
import LandingPage from "@/components/layouts/LandingPage";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-montserrat max-w-[375px] mx-auto ">
      <div className={`bg-cover h-full snap-y snap-mandatory`}>
        <LandingPage className={``} />
        
      </div>
    </main>
  );
}
