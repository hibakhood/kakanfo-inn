import { useEffect, useState } from "react";

const slides = [
  { src: "/images/hero/exterior.jpg", alt: "Kakanfo Inn & Conference Centre exterior" },
  { src: "/images/hero/reception.jpg", alt: "Kakanfo Inn reception" },
];

const SLIDE_DURATION = 8000;

interface KenBurnsProps {
  onComplete?: () => void;
}

export default function KenBurns({ onComplete }: KenBurnsProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const isLast = index === slides.length - 1;
    const timer = setTimeout(() => {
      if (isLast) {
        onComplete?.();
      } else {
        setIndex((i) => i + 1);
      }
    }, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [index, onComplete]);

  const slide = slides[index];

  return (
    <div className="absolute inset-0 overflow-hidden bg-forest-950">
      {slides.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity ${
            i === index ? "opacity-100" : "opacity-0"
          } ${i === index ? (i % 2 === 0 ? "kenburns-in" : "kenburns-out") : ""}`}
          style={{ transitionDuration: "1500ms" }}
        />
      ))}
    </div>
  );
}
