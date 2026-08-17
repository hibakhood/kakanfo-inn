import { useEffect, useState } from "react";
import { getEventSpaces, getRooms } from "@/lib/data";
import type { EventSpace, RoomCategory } from "@/types";

export function useRooms() {
  const [rooms, setRooms] = useState<RoomCategory[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getRooms().then((data) => {
      if (active) {
        setRooms(data);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return { rooms, loading };
}

export function useEventSpaces() {
  const [spaces, setSpaces] = useState<EventSpace[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getEventSpaces().then((data) => {
      if (active) {
        setSpaces(data);
        setLoading(false);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return { spaces, loading };
}
