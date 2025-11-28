import React from "react";

export default function Heart({ count = 10 }: { count?: number }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="w-6 h-6 bg-romanticRed rounded-full absolute animate-float-heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            top: `${Math.random() * 100}%`,
          }}
        ></div>
      ))}
    </div>
  );
}