"use client";

import Doa from "@/components/layouts/Doa";
import EventLocation from "@/components/layouts/EventLocation";
import Perkenalan from "@/components/layouts/Perkenalan";
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
        <EventLocation className={`bg-white`}/>
      </section>
    </div>
  );
}
