import type { AddOnService } from "@/types";

export const addOnServices: AddOnService[] = [
  { id: "addon-airport-transfer", name: "Airport Transfer", description: "Private pickup or drop-off to and from Ibadan Airport in an air-conditioned vehicle.", price: 35000, category: "transport", icon: "Plane", available: true },
  { id: "addon-car-driver", name: "Car & Driver", description: "Chauffeured vehicle on standby for the day, for meetings and city errands.", price: 40000, category: "transport", icon: "Car", available: true },
  { id: "addon-breakfast", name: "Breakfast Buffet", description: "Full breakfast spread per guest — continental and local favourites.", price: 6000, category: "dining", icon: "Coffee", available: true },
  { id: "addon-dinner", name: "Dinner Set Menu", description: "Three-course set dinner per guest, served in our dining room.", price: 12000, category: "dining", icon: "Utensils", available: true },
  { id: "addon-welcome-drinks", name: "Welcome Drinks", description: "Chilled welcome cocktail or fresh juice on arrival per guest.", price: 8000, category: "dining", icon: "GlassWater", available: true },
  { id: "addon-extra-bed", name: "Extra Bed", description: "Rollaway bed with premium bedding added to the room per night.", price: 15000, category: "amenities", icon: "Bed", available: true },
  { id: "addon-early-checkin", name: "Early Check in", description: "Guaranteed room access from 9:00am on arrival day (subject to availability).", price: 10000, category: "amenities", icon: "Clock", available: true },
  { id: "addon-late-checkout", name: "Late Checkout", description: "Extend your stay until 6:00pm on departure day.", price: 10000, category: "amenities", icon: "Moon", available: true },
  { id: "addon-laundry", name: "Laundry Service", description: "Same day pressing and laundry for up to 5 items.", price: 5000, category: "amenities", icon: "Shirt", available: true },
  { id: "addon-spa", name: "Spa & Massage", description: "60-minute relaxation massage in our wellness suite.", price: 20000, category: "wellness", icon: "Flower", available: true },
  { id: "addon-gym", name: "Gym Day Pass", description: "Full access to our fitness studio and equipment.", price: 5000, category: "wellness", icon: "Dumbbell", available: true },
  { id: "addon-decor", name: "Event Décor", description: "Theme décor, flowers and centrepieces for your event space.", price: 150000, category: "other", icon: "Sparkles", available: true },
  { id: "addon-av", name: "AV & Production", description: "Sound, lighting and projection with an on site technician.", price: 80000, category: "other", icon: "Video", available: true },
  { id: "addon-cake", name: "Celebration Cake", description: "Custom celebration cake for birthdays, anniversaries and more.", price: 25000, category: "other", icon: "Cake", available: true },
];

export function getAddOnById(id: string): AddOnService | undefined {
  return addOnServices.find((s) => s.id === id);
}
