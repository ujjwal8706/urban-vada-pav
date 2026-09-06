/**
 * Urban Vada Pav - Locations Data Repository
 * 
 * Single source of truth for cities, outlet counts, and network expansion.
 * Ready for future branch addresses and GPS coordinates without fabricating data.
 */

export const locationStats = [
  { value: "50+", label: "Outlets" },
  { value: "20+", label: "Cities" },
  { value: "100%", label: "Pure Veg" },
];

export const locationsData = [
  {
    id: "kanpur",
    city: "Kanpur",
    state: "Uttar Pradesh",
    outlets: "Multiple Outlets",
    status: "Open",
    description:
      "Serving authentic Mumbai-style Vada Pav, Burgers, and signature snacks across prime commercial and residential hubs in Kanpur.",
    // Future outlet schema: { id, name, address, timing, phone, directionsUrl }
    outletsList: [],
  },
  {
    id: "patna",
    city: "Patna",
    state: "Bihar",
    outlets: "Multiple Outlets",
    status: "Open",
    description:
      "Delighting food lovers in the capital of Bihar with fresh, hot, and hygienic vegetarian street food favorites.",
    outletsList: [],
  },
  {
    id: "gorakhpur",
    city: "Gorakhpur",
    state: "Uttar Pradesh",
    outlets: "Multiple Outlets",
    status: "Open",
    description:
      "A local favorite for quick bites, crispy vada pavs, wraps, and refreshing sodas across Gorakhpur.",
    outletsList: [],
  },
  {
    id: "noida",
    city: "Noida",
    state: "Uttar Pradesh (NCR)",
    outlets: "Multiple Outlets",
    status: "Open",
    description:
      "Convenient takeaway and quick-service dining catering to corporate offices, student hubs, and high-density sectors in Noida.",
    outletsList: [],
  },
  {
    id: "muzzafarpur",
    city: "Muzzafarpur",
    state: "Bihar",
    outlets: "Multiple Outlets",
    status: "Open",
    description:
      "Bringing authentic Mumbai flavors, cheesy pasta, and signature burgers to food enthusiasts in Muzzafarpur.",
    outletsList: [],
  },
  {
    id: "other-cities",
    city: "Other Cities",
    state: "Pan-India",
    outlets: "Growing Network",
    status: "Expanding",
    description:
      "Our network is expanding rapidly across India. We actively collaborate with franchise partners to bring Urban Vada Pav to new markets.",
    outletsList: [],
  },
];
