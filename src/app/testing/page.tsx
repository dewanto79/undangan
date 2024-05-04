"use client";
// import { addMessage } from "@/database/firebase";

import { addMessage, getAllMessages } from "@/database/firebase";

export default function Testing() {
  // useEffect(() => {
  const handleGet = async () => {
    const get = await getAllMessages();
    console.log(get);
    if (get.length > 0) {
      alert("SUCCESS GET DATA");
    }
  };

  const handleCreate = async () => {
    const payload = {
      message: "testing2",
      name: "yes yesss",
      isAttending: true,
      imageId: "img-27.jpg",
    };
    const added = await addMessage(payload);

    if (added) {
      console.log(added);
      alert("SUCCESS ADD DATA");
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleCreate} className="bg-slate-400 p-2">
        Check Firebase Create
      </button>
      <button onClick={handleGet}>Check Firebase add</button>
    </main>
  );
}
