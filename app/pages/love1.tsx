"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Nosso Começo",
    subtitle: "Onde dois caminhos se tornaram um",
    image: "/images/primeira.png",
    declaration:
      "Do primeiro ‘oi’ até as conversas que foram ficando cada vez mais profundas… você trouxe calma ao meu caos e me mostrou, com gestos simples, o verdadeiro significado do amor.",
  },
  {
    id: 2,
    title: "Pequenas Coisas",
    subtitle: "Os momentos que importam",
    image: "/images/segunda.png",
    declaration:
      "Eu amo o jeito que você ri até das minhas piores piadas. A forma como sua mão encontra a minha sem pensar… e como um único olhar seu consegue dizer tudo o que eu preciso ouvir.",
  },
  {
    id: 3,
    title: "Nossa Promessa",
    subtitle: "Para sempre, nas pequenas coisas",
    image: "/images/terceira.png",
    declaration:
      "Eu prometo te ouvir, aprender, perdoar, celebrar com você e lutar para que nosso amor seja eterno.",
  },
  {
    id: 4,
    title: "Aventuras",
    subtitle: "Mapas que não desenhamos",
    image: "/images/quarta.png",
    declaration:
      "Com você, cada caminho se torna uma aventura e cada momento se torna uma memória que carregarei para sempre.",
  },
  {
    id: 5,
    title: "Você vai...",
    subtitle: "Uma pergunta em céus lilás",
    image: "/images/quinta.png",
    declaration:
      "Você vai continuar dançando comigo pela vida? Não posso prometer dias perfeitos, mas prometo que todos os dias comigo serão cheios de amor.",
  },
];

export default function Love1() {
  const [index, setIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);



  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play();
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-indigo-50 via-violet-100 to-blue-50 flex items-center justify-center p-4">

      <audio
        ref={audioRef}
        src="/musics/edsheeran.mp3"
        autoPlay
        loop
      />

      <div className="w-full max-w-3xl rounded-2xl shadow-2xl bg-white/70 backdrop-blur-md overflow-hidden border border-violet-200">
        <header className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-400 to-violet-500 flex items-center justify-center text-white font-bold">💜</div>
            <div>
              <h1 className="text-lg font-semibold text-indigo-700">Declaração de amor para meu gatão</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="px-3 py-1 hover:cursor-pointer hover:animate-pulse rounded-full text-sm font-medium border border-indigo-200 bg-white/70"
            >
              Anterior
            </button>
            <button
              onClick={next}
              className="px-3 py-1 hover:cursor-pointer hover:animate-pulse rounded-full text-sm font-medium bg-indigo-300 text-indigo-900 shadow-sm"
            >
              Próximo
            </button>
          </div>
        </header>

        <section className="relative min-h-[100vh] md:h-[72vh]">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={slides[index].id}
              initial={{ opacity: 0, x: 50, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.98 }}
              transition={{ duration: 0.6 }}
              className="p-4 flex flex-col md:flex-row items-center gap-6 md:absolute md:inset-0"
            >
              <motion.figure
                layout
                className="w-full md:flex-1 md:max-w-xl rounded-xl overflow-hidden shadow-lg bg-white/60 border border-violet-100"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-full">
                  <img
                    src={slides[index].image}
                    alt={`${slides[index].title} foto`}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <figcaption className="p-4">
                  <h2 className="text-xl font-semibold text-violet-700">
                    {slides[index].title}
                  </h2>
                  <p className="text-sm text-indigo-500 mt-1">
                    {slides[index].subtitle}
                  </p>
                </figcaption>
              </motion.figure>


              <div className="flex-1 p-2 md:p-6 flex flex-col justify-center gap-4">
                <motion.h3 className="text-2xl md:text-3xl font-extrabold text-indigo-700">
                  {slides[index].title}
                </motion.h3>

                <motion.p className="text-sm md:text-base text-indigo-600 leading-relaxed">
                  {slides[index].declaration}
                </motion.p>

                <motion.blockquote className="mt-3 p-4 rounded-lg bg-white/70 border-l-4 border-violet-300 text-indigo-700 italic">
                  "Cada dia com você é o melhor tipo de surpresa."
                </motion.blockquote>

                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={playMusic}
                    className="px-4 py-2 hover:cursor-pointer ease-in rounded-full transition-all duration-200 hover:text-black hover:border-violet-200 hover:border hover:bg-white/80 font-semibold shadow-md bg-indigo-500 text-white"
                  >
                    Tocar nossa música
                  </button>

                  <button
                    onClick={() => navigator.clipboard?.writeText(slides[index].declaration)}
                    className="px-4 py-2 hover:cursor-pointer ease-in transition-all duration-200 hover:text-white hover:bg-indigo-500 rounded-full border font-medium border-violet-200 bg-white/80"
                  >
                    Copiar declaração
                  </button>
                </div>

                <div className="mt-6 flex items-center gap-2">
                  {slides.map((s, i) => (
                    <button
                      key={s.id}
                      onClick={() => setIndex(i)}
                      className={`w-3 h-3 rounded-full ${i === index ? 'bg-indigo-600 scale-110' : 'bg-indigo-200'} transition-transform`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        <footer className="p-4 flex items-center justify-between text-xs text-indigo-500">
          <div>Desenvolvido pela Isabely 💜</div>
          <div className="flex items-center gap-2">
            <button
              className="px-3 py-1 rounded-full text-sm bg-white/70 border border-violet-100"
              onClick={() => setIndex(0)}
            >
              Início
            </button>
            <div className="text-indigo-400 font-semibold">{index + 1} / {slides.length}</div>
          </div>
        </footer>
      </div>
    </section>
  );
}