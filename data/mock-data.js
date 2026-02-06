export const entities = [
  {
    id: 1,
    name: "TechStart Academy",
    category: "Education",
    rating: 5.0,
    verified: true
  },
  {
    id: 2,
    name: "Green Valley Hospital",
    category: "Healthcare",
    rating: 4.0,
    verified: true
  }
];

export const reviews = [
  {
    id: 1,
    entityId: 1,
    user: "Priya M.",
    rating: 5,
    text: "Excellent curriculum and supportive faculty.",
    helpful: 124,
    date: new Date("2026-02-04")
  },
  {
    id: 2,
    entityId: 2,
    user: "Rajesh K.",
    rating: 4,
    text: "Professional staff, but waiting time can improve.",
    helpful: 89,
    date: new Date("2026-02-03")
  }
];
