// Database of French handball clubs with their logos
export interface Club {
  id: string
  name: string
  shortName: string
  logoUrl: string
  city: string
}

export const clubs: Club[] = [
  // Montréal Handball (équipes locales)
  {
    id: "mtl-seniors-m",
    name: "Montréal Handball Seniors Masculins",
    shortName: "Montréal HB",
    logoUrl: "/logos/montreal-handball.svg",
    city: "Montréal",
  },
  {
    id: "mtl-seniors-f",
    name: "Montréal Handball Seniors Féminins",
    shortName: "Montréal HB Féminines",
    logoUrl: "/logos/montreal-handball.svg",
    city: "Montréal",
  },
  {
    id: "mtl-u16",
    name: "Montréal Handball -16 ans",
    shortName: "Montréal HB -16",
    logoUrl: "/logos/montreal-handball.svg",
    city: "Montréal",
  },
  {
    id: "mtl-u14",
    name: "Montréal Handball -14 ans",
    shortName: "Montréal HB -14",
    logoUrl: "/logos/montreal-handball.svg",
    city: "Montréal",
  },
  {
    id: "mtl-u12",
    name: "Montréal Handball -12 ans",
    shortName: "Montréal HB -12",
    logoUrl: "/logos/montreal-handball.svg",
    city: "Montréal",
  },
  // Clubs adversaires courants
  {
    id: "paris-hb",
    name: "Paris Handball",
    shortName: "Paris HB",
    logoUrl: "/logos/paris-handball.svg",
    city: "Paris",
  },
  {
    id: "lyon-hb",
    name: "Lyon Handball",
    shortName: "Lyon HB",
    logoUrl: "/logos/lyon-handball.svg",
    city: "Lyon",
  },
  {
    id: "marseille-hb",
    name: "Marseille Provence Handball",
    shortName: "Marseille Provence HB",
    logoUrl: "/logos/marseille-handball.svg",
    city: "Marseille",
  },
  {
    id: "toulouse-hb",
    name: "Toulouse Handball",
    shortName: "Toulouse HB",
    logoUrl: "/logos/toulouse-handball.svg",
    city: "Toulouse",
  },
  {
    id: "bordeaux-hb",
    name: "Bordeaux Handball",
    shortName: "Bordeaux HB",
    logoUrl: "/logos/bordeaux-handball.svg",
    city: "Bordeaux",
  },
  {
    id: "lille-hb",
    name: "Lille Métropole Handball",
    shortName: "Lille HB",
    logoUrl: "/logos/lille-handball.svg",
    city: "Lille",
  },
  {
    id: "nantes-hb",
    name: "Nantes Handball",
    shortName: "Nantes HB",
    logoUrl: "/logos/nantes-handball.svg",
    city: "Nantes",
  },
  {
    id: "nice-hb",
    name: "Nice Handball",
    shortName: "Nice HB",
    logoUrl: "/logos/nice-handball.svg",
    city: "Nice",
  },
  {
    id: "strasbourg-hb",
    name: "Strasbourg Handball",
    shortName: "Strasbourg HB",
    logoUrl: "/logos/strasbourg-handball.svg",
    city: "Strasbourg",
  },
  {
    id: "rennes-hb",
    name: "Rennes Handball",
    shortName: "Rennes HB",
    logoUrl: "/logos/rennes-handball.svg",
    city: "Rennes",
  },
]

export function getClubById(id: string): Club | undefined {
  return clubs.find((club) => club.id === id)
}

export function getMontrealTeams(): Club[] {
  return clubs.filter((club) => club.city === "Montréal")
}

export function getOpponentClubs(): Club[] {
  return clubs.filter((club) => club.city !== "Montréal")
}
