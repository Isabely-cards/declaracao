"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ReactConfetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function ConfettiEffect() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return <ReactConfetti numberOfPieces={200} recycle={false} />;
}