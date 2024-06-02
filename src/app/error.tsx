"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      className={`w-full h-screen flex flex-col items-center justify-center gap-4`}
    >
      <div className={`font-bold text-2xl  `}>{error.name}</div>
      <div className={`font-bold text-lg  `}>Something went wrong!</div>
      <div>
        {error.name}:{error.message}
      </div>
      <div>Please contact if error occurs</div>
      <button
        className={`bg-sky-200 px-4 py-2 rounded-lg active:bg-sky-300 transform transition-all duration-50`}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
