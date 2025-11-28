"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  {
    id: "one",
    title: "Quando te vi, tudo mudou",
    subtitle: "O mundo ganhou outra cor",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=9f3a1d9f5f6b3d8a7a8f0d5d3c2b1a6f",
    text:
      "Seu olhar incendiou um lugar dentro de mim que eu nem sabia existir. Desde então, cada escolha é por nós. Cada destino é a sua mão na minha.",
  },
  {
    id: "two",
    title: "Ecos do teu nome",
    subtitle: "Eu escuto você em tudo",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3d5d8e2f8c6b4d5a7f8e9c0b2a1c4d6e",
    text:
      "Teu nome vira verso quando penso em futuro; teu riso, promessa. Não peço mil razões — peço a sua presença, sempre.",
  },
  {
    id: "three",
    title: "Promessa em silêncio",
    subtitle: "Fecho os olhos e sei",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=7a1d2f3b4c5e6f7a8b9c0d1e2f3a4b5c",
    text:
      "Não preciso de festas para jurar: te escolho nos dias claros e nas tempestades, nos espelhos e nas sombras. Eu te escolho inteiro.",
  },
  {
    id: "four",
    title: "Fogo que acolhe",
    subtitle: "Paixão com cuidado",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b3a4c5d6e7f8a9b0c1d2e3f4a5b6c7d",
    text:
      "A intensidade que sinto por você não queima; ela aquece. É abrigo que arde do jeito certo — que protege e transforma.",
  },
  {
    id: "five",
    title: "Até o fim dos porquês",
    subtitle: "Só nós, sempre",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f",
    text:
      "Se o mundo fosse efêmero, eu escreveria você em cada segundo. Te amar é aprender o idioma do infinito — e nunca canso de estudar.",
  },
];

export default function Love2() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.loop = true;
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch (e) {
      console.warn("unable to play audio automatically", e);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-50 via-indigo-50 to-blue-50 text-slate-900">
      {/* fixed header with player */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-4xl flex items-center justify-between bg-white/60 backdrop-blur-md border border-violet-200 rounded-2xl p-3 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-violet-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow">❤</div>
          <div>
            <h1 className="text-sm font-semibold text-indigo-800">Declaração de amor</h1>
            <p className="text-xs text-indigo-500">Feito com dedicação para meu amor!</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 text-white font-semibold shadow-md"
          >
            {playing ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6 4h2v12H6V4zM12 4h2v12h-2V4z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4.5 3.5v13l11-6.5-11-6.5z" />
              </svg>
            )}
            <span className="text-sm">{playing ? 'Pause' : 'Play'}</span>
          </button>
        </div>

        <audio ref={audioRef} src="/music/romantic-instrumental.mp3" preload="auto" />
      </header>

      <div className="pt-28">
        {SECTIONS.map((s, idx) => (
          <Section key={s.id} data={s} index={idx} total={SECTIONS.length} />
        ))}
      </div>

      <footer className="py-10 text-center text-xs text-indigo-500">
        <div>Desenvolvido pela Isabely</div>
      </footer>
    </main>
  );
}

function Section({ data, index, total }: { data: any; index: number; total: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="min-h-[85vh] flex items-center justify-center px-6 sm:px-8 lg:px-16">
      <motion.article
        initial={{ opacity: 0, y: 40, rotateX: 8 }}
        animate={visible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/60 backdrop-blur-md border border-violet-100 rounded-3xl shadow-2xl p-6"
      >
        <div className="relative rounded-2xl overflow-hidden md:order-1 order-2 shadow-inner">
          <img src={data.image} alt={data.title} className="object-cover w-full h-64 md:h-[480px]" />

          <div className="absolute -bottom-6 right-6 md:translate-y-6 md:translate-x-0 transform">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-400 to-violet-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">❤</div>
          </div>
        </div>

        <div className="md:order-2 order-1 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-violet-500 shadow" />
            <div className="text-sm text-indigo-500">Seção {index + 1} de {total}</div>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-900 tracking-tight">{data.title}</h2>
          <h3 className="text-sm text-indigo-600 font-medium">{data.subtitle}</h3>

          <p className="text-base text-slate-800 leading-relaxed mt-2">{data.text}</p>

          <blockquote className="mt-4 p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-violet-50 border-l-4 border-indigo-300 italic text-indigo-700">“O amor que arde e protege ao mesmo tempo.”</blockquote>

          <div className="mt-6 flex gap-3">
            <button className="px-4 py-2 rounded-full shadow-md bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-semibold">Enviar declaração</button>
            <button
              onClick={() => navigator.clipboard?.writeText(`${data.title} — ${data.text}`)}
              className="px-4 py-2 rounded-full border border-violet-200 bg-white/90 font-medium"
            >
              Copiar
            </button>
          </div>
        </div>
      </motion.article>
    </section>
  );
}