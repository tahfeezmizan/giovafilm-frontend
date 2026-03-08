export type Category = {
  id: number;
  icon: string;
  name: string;
  color: string;
  status: "Active" | "Hidden";
};

export const categories = [
  {
    id: 1,
    icon: "🌳",
    name: "Parks & Nature",
    color: "#22c55e",
    status: "Active",
  },
  {
    id: 2,
    icon: "🏛️",
    name: "Museums",
    color: "#3b82f6",
    status: "Active",
  },
  {
    id: 3,
    icon: "🗿",
    name: "Landmarks",
    color: "#f59e0b",
    status: "Active",
  },
  {
    id: 4,
    icon: "🎨",
    name: "Art & Culture",
    color: "#a855f7",
    status: "Active",
  },
  {
    id: 5,
    icon: "🏗️",
    name: "Architecture",
    color: "#ec4899",
    status: "Active",
  },
  {
    id: 6,
    icon: "🍽️",
    name: "Food & Dining",
    color: "#ef4444",
    status: "Hidden",
  },
];
