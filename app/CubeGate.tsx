"use client";

import { useEffect, useState } from "react";

export function CubeGate() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("gate-active");

    function handleMessage(event: MessageEvent) {
      if (
        event.origin === window.location.origin &&
        event.data?.type === "kenny-cube-unlocked"
      ) {
        document.documentElement.classList.remove("gate-active");
        window.scrollTo(0, 0);
        setUnlocked(true);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
      document.documentElement.classList.remove("gate-active");
    };
  }, []);

  if (unlocked) return null;

  return (
    <div className="gate-overlay">
      <iframe
        src="/cube-gate.html"
        title="Solve the Rubik's cube to enter Kenny's portfolio"
      />
    </div>
  );
}
