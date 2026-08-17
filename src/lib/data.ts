import { supabase, isSupabaseConfigured } from "./supabase";
import { roomsFallback } from "@/data/rooms";
import { eventsFallback } from "@/data/events";
import type { RoomCategory, EventSpace } from "@/types";

async function fetchAll<T>(table: string): Promise<T[] | null> {
  if (!isSupabaseConfigured) return null;
  const { data, error } = await supabase.from(table).select("*").order("created_at", { ascending: true });
  if (error) {
    console.warn(`[kakanfo] supabase fetch ${table} failed:`, error.message);
    return null;
  }
  return (data as T[]) ?? null;
}

export async function getRooms(): Promise<RoomCategory[]> {
  const remote = await fetchAll<RoomCategory>("room_categories");
  return remote && remote.length > 0 ? remote : roomsFallback;
}

export async function getEventSpaces(): Promise<EventSpace[]> {
  const remote = await fetchAll<EventSpace>("event_spaces");
  return remote && remote.length > 0 ? remote : eventsFallback;
}

export async function getRoomBySlug(slug: string): Promise<RoomCategory | undefined> {
  const rooms = await getRooms();
  return rooms.find((r) => r.slug === slug);
}

export async function getEventBySlug(slug: string): Promise<EventSpace | undefined> {
  const events = await getEventSpaces();
  return events.find((e) => e.slug === slug);
}
