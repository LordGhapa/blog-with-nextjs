"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";
import { useRouter } from "next/navigation";

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();
  const router = useRouter();

  if (environment !== "live") {
    return null;
  }

  const handleClick = async () => {
    await fetch("/draft-mode/disable");
    router.refresh();
  };

  return (
    <button
      onClick={handleClick}
      className="fixed right-4 bottom-4 z-50 cursor-pointer rounded-2xl border border-black bg-orange-500 px-4 py-2 transition duration-300 hover:bg-orange-800"
    >
      Disable Draft Mode
    </button>
  );
}
