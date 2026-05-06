export type DeliveryOption = {
  id: string;
  label: string;
  duration: string;
  extra: number;
  tag?: string;
};

export type Plan = {
  id: string;
  name: string;
  originalPrice: number;
  price: number;
  discountPct: number;
  save: number;
  badge?: string;
  guarantees: string[];
  features: string[];
  highlighted?: boolean;
  delivery: DeliveryOption[];
};

export const PLANS: Plan[] = [
  {
    id: "poster",
    name: "Poster Design",
    originalPrice: 40,
    price: 30,
    discountPct: 25,
    save: 10,
    guarantees: ["Zero AI", "Zero Plagiarism"],
    features: [
      "Creative & professional design",
      "High-quality custom made",
      "Unlimited revisions",
      "On-time delivery"
    ],
    delivery: [
      { id: "standard", label: "Standard", duration: "2 days", extra: 0 },
      {
        id: "express",
        label: "Express",
        duration: "1 day",
        extra: 10,
        tag: "Faster"
      }
    ]
  },
  {
    id: "assessment",
    name: "Assessment",
    originalPrice: 70,
    price: 50,
    discountPct: 29,
    save: 20,
    guarantees: ["Zero AI", "Zero Plagiarism"],
    features: [
      "In-depth & accurate assessment",
      "Complete documentation",
      "Professionally done",
      "On-time delivery"
    ],
    delivery: [
      { id: "standard", label: "Standard", duration: "5 days", extra: 0 },
      {
        id: "express",
        label: "Express",
        duration: "2 days",
        extra: 15,
        tag: "Faster"
      }
    ]
  },
  {
    id: "combo",
    name: "Assessment + Poster Combo",
    originalPrice: 100,
    price: 65,
    discountPct: 35,
    save: 35,
    badge: "Most Selling",
    highlighted: true,
    guarantees: ["Zero AI", "Zero Plagiarism"],
    features: [
      "In-depth assessment",
      "Professional poster design",
      "Complete documentation",
      "On-time delivery",
      "Best value package"
    ],
    delivery: [
      { id: "standard", label: "Standard", duration: "7 days", extra: 0 },
      {
        id: "express",
        label: "Express",
        duration: "3 days",
        extra: 20,
        tag: "Faster"
      }
    ]
  },
  {
    id: "fyp",
    name: "Final Year Project",
    originalPrice: 700,
    price: 500,
    discountPct: 29,
    save: 200,
    guarantees: ["Zero AI", "Zero Plagiarism"],
    features: [
      "Full project work",
      "Complete documentation",
      "Presentation PPT",
      "On-time delivery"
    ],
    delivery: [
      { id: "standard", label: "Standard", duration: "1 month", extra: 0 },
      {
        id: "express",
        label: "Express",
        duration: "20 days",
        extra: 100,
        tag: "Faster"
      },
      {
        id: "super",
        label: "Super Express",
        duration: "10 days",
        extra: 250,
        tag: "Fastest"
      }
    ]
  }
];

export const CONTACT = {
  whatsapp: "447852614545",
  whatsappDisplay: "+44 7852 614545",
  email: "research.kumail@gmail.com",
  whatsappLink:
    "https://wa.me/447852614545?text=Hi%2C%20I%20want%20to%20place%20an%20order.",
  emailLink: "mailto:research.kumail@gmail.com"
};
