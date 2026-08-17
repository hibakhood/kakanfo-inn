export const siteConfig = {
  name: "Kakanfo Inn & Conference Centre",
  shortName: "Kakanfo Inn",
  tagline: "Where Ibadan welcomes the world",
  description:
    "A subsidiary of Kakanfo Enterprises Limited, Kakanfo Inn & Conference Centre is a prestigious 5-star comfort hotel on Ring Road, Ibadan — ninety-five beautifully crafted rooms, world class multipurpose halls, and warm Yoruba hospitality.",
  url: "https://kakanfoinn.com",
  iso: "NS-EN ISO 9001:2008",
  established: 1988,
  rooms: 95,
  phones: ["+234 705 582 8309", "+234 705 868 0602", "+234 906 075 7189"],
  phoneDisplay: ["07055828309", "07058680602", "09060757189"],
  emails: { reservations: "rm@kakanfoinn.com", info: "info@kakanfoinn.com" },
  address: {
    line1: "1 Nihinlola Street, Off Joyce B Road",
    line2: "Off MKO Abiola Way, Ring Road",
    city: "Ibadan",
    country: "Nigeria",
  },
  reception: "Open 24 hours, every day",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5!2d3.8655318!3d7.3675851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398de9b28fb5d9%3A0xd5ad9d092fb39aeb!2sKakanfo%20Inn%20%26%20Conference%20Centre!5e0!3m2!1sen!2sng!4v1234567890",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "Events & Conference", href: "/events" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "CEO's Blog", href: "/blog" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
