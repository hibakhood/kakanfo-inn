import type { ReactNode } from "react";
import { formatDate, formatNaira } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { getAddOnById } from "@/data/addons";
import type { BookingTotals } from "./BookingSummary";
import type { AddOnSelection, EventSpace, RoomCategory } from "@/types";

interface BookingConfirmationPrintProps {
  type: "room" | "event";
  resource: RoomCategory | EventSpace;
  checkIn?: Date;
  checkOut?: Date;
  guests: number;
  numRooms: number;
  addOns: Record<string, number>;
  totals: BookingTotals;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests?: string;
  bookingReference: string;
}

function Detail({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-forest-700">{label}</p>
      <p className="mt-1 text-[0.95rem] leading-snug text-forest-950">{children}</p>
    </div>
  );
}

export default function BookingConfirmationPrint({
  type,
  resource,
  checkIn,
  checkOut,
  guests,
  numRooms,
  addOns,
  totals,
  guestName,
  guestEmail,
  guestPhone,
  specialRequests,
  bookingReference,
}: BookingConfirmationPrintProps) {
  const unitLabel = type === "room" ? "night" : "day";
  const unitPrice = type === "room"
    ? (resource as RoomCategory).price_per_night
    : (resource as EventSpace).price_per_day;
  const selectedAddOns: { id: string; name: string; qty: number; price: number }[] =
    Object.entries(addOns)
      .filter(([, qty]) => qty > 0)
      .map(([id, qty]) => {
        const svc = getAddOnById(id);
        return { id, name: svc?.name ?? id, qty, price: svc?.price ?? 0 };
      });
  const nights = checkIn && checkOut
    ? Math.max(1, Math.round((checkOut.getTime() - checkIn.getTime()) / 86400000))
    : 1;
  const units = type === "room" ? nights * numRooms : Math.max(1, nights);

  return (
    <div className="hidden bg-white p-10 text-forest-950 print:block">
      <div className="border-b-2 border-forest-950 pb-6">
        <div className="flex items-start justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Kakanfo Inn & Conference Centre" className="h-14 w-14 object-contain" />
            <div>
              <p className="font-display text-xl font-bold leading-none text-forest-950">{siteConfig.name}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-forest-700">
                Ring Road, Ibadan, Nigeria
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-display text-2xl font-bold text-forest-950">Booking Confirmation</p>
            <p className="mt-1 text-sm font-semibold tracking-[0.2em] text-forest-700">{bookingReference}</p>
          </div>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-forest-900">
          {siteConfig.address.line1} · {siteConfig.address.line2} · {siteConfig.address.city},{" "}
          {siteConfig.address.country} · {siteConfig.phones.join(" · ")} · {siteConfig.emails.reservations}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-x-12 gap-y-7">
        <Detail label="Guest name">{guestName}</Detail>
        <Detail label="Booking reference">{bookingReference}</Detail>
        <Detail label="Email">{guestEmail}</Detail>
        <Detail label="Phone">{guestPhone}</Detail>
        <Detail label="Arrival">{checkIn ? formatDate(checkIn) : "—"}</Detail>
        <Detail label="Departure">{checkOut ? formatDate(checkOut) : "—"}</Detail>
        <Detail label="Booking type">
          {type === "room" ? "Hotel room" : "Event space"}
        </Detail>
        <Detail label={type === "room" ? "Number of rooms" : "Venue"}>
          {type === "room" ? `${numRooms} room(s)` : resource.name}
        </Detail>
        <Detail label="Guests">{guests}</Detail>
        <Detail label="Duration">
          {units} {unitLabel}(s)
        </Detail>
      </div>

      <div className="mt-8 border-t border-forest-950 pt-6">
        <p className="text-sm font-bold uppercase tracking-[0.14em] text-forest-700">
          {type === "room" ? "Room" : "Event space"}
        </p>
        <div className="mt-3 flex items-center justify-between border-b border-forest-950/20 py-2 text-sm">
          <span className="font-semibold text-forest-950">{resource.name}</span>
          <span>
            {formatNaira(unitPrice)} × {units} {unitLabel}(s)
          </span>
        </div>
        <div className="mt-1 flex items-center justify-between py-2 text-sm">
          <span className="text-forest-900">Subtotal</span>
          <span className="font-semibold text-forest-950">{formatNaira(totals.subtotal)}</span>
        </div>

        {selectedAddOns.length > 0 && (
          <>
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-forest-700">Add-on services</p>
            {selectedAddOns.map((a) => (
              <div key={a.id} className="mt-2 flex items-center justify-between border-b border-forest-950/20 py-2 text-sm">
                <span className="text-forest-950">
                  {a.name} <span className="text-forest-700">× {a.qty}</span>
                </span>
                <span className="font-semibold text-forest-950">{formatNaira(a.price * a.qty)}</span>
              </div>
            ))}
            <div className="mt-1 flex items-center justify-between py-2 text-sm">
              <span className="text-forest-900">Add-on total</span>
              <span className="font-semibold text-forest-950">{formatNaira(totals.addOnTotal)}</span>
            </div>
          </>
        )}

        <div className="mt-5 flex items-center justify-between border-t-2 border-forest-950 py-3">
          <span className="font-display text-lg font-bold text-forest-950">Total due</span>
          <span className="font-display text-2xl font-bold text-forest-950">{formatNaira(totals.total)}</span>
        </div>
      </div>

      {specialRequests && (
        <div className="mt-6">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-forest-700">Special requests</p>
          <p className="mt-2 text-sm leading-relaxed text-forest-900">{specialRequests}</p>
        </div>
      )}

      <div className="mt-10 border-t border-forest-950/20 pt-5 text-xs leading-relaxed text-forest-900">
        <p>
          Your booking is confirmed and held at {siteConfig.name}. Payment of{" "}
          {formatNaira(totals.total)} is due by arrangement with our reservations team. For changes or
          help, call {siteConfig.phones[0]} or email {siteConfig.emails.reservations}. Our reception is
          open 24 hours, every day.
        </p>
      </div>
    </div>
  );
}
