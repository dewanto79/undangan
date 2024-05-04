"use client";

import Doa from "@/components/layouts/Doa";
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
    </div>
  );
}
