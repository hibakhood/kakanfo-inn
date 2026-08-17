import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import KenBurns from "@/components/KenBurns";

export default function HeroShowreel() {
  const [phase, setPhase] = useState<"video" | "kenburns">("video");

  return (
    <div className="absolute inset-0 overflow-hidden bg-forest-950">
      <AnimatePresence>
        {phase === "video" ? (
          <motion.div
            key="video"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <video
              src="/videos/kakanfo-hero.mp4"
              poster="/images/facilities/exterior-1.jpg"
              autoPlay
              muted
              playsInline
              onEnded={() => setPhase("kenburns")}
              onError={() => setPhase("kenburns")}
              className="h-full w-full object-cover"
            />
          </motion.div>
        ) : (
          <motion.div
            key="kenburns"
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <KenBurns onComplete={() => setPhase("video")} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
