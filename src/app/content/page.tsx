"use client";

import Doa from "@/components/layouts/Doa";
import EventLocation from "@/components/layouts/EventLocation";
import GaleriFoto from "@/components/layouts/GaleriFoto";
import KirimHadiah from "@/components/layouts/KirimHadiah";
import Perkenalan from "@/components/layouts/Perkenalan";
import UcapanDanDoa from "@/components/layouts/UcapanDanDoa";
import WeddingEvent from "@/components/layouts/WeddingEvent";

export default function Content() {
  return (
    <div>
      <section>
        <Doa className={``} />
      </section>
      <section>
        <Perkenalan />
      </section>
      <section>
        <WeddingEvent />
      </section>
      <section>
        <EventLocation className={`bg-white`} />
      </section>
      <section>
        <GaleriFoto />
      </section>
      <section>
        <UcapanDanDoa />
      </section>
      <section>
        <KirimHadiah />
      </section>
    </div>
  );
}
