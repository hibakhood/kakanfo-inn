import { cn } from "@/lib/utils";

interface WovenDividerProps {
  className?: string;
}

export default function WovenDivider({ className }: WovenDividerProps) {
  return <div aria-hidden className={cn("woven-divider w-40", className)} />;
}
