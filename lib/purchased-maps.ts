export type MapItem = {
  id: number;
  title: string;
  image: string;
  tag: string;
  description: string;
  status: "active" | "inactive";
  offline: boolean;
};

export const maps: MapItem[] = [
  {
    id: 1,
    title: "PUERTO RICO ADVENTURE",
    image: "/maps/map1.jpg",
    tag: "Premium Access",
    description: "Last updated 2 days ago",
    status: "active",
    offline: true,
  },
  {
    id: 2,
    title: "SAN JUAN HISTORIC",
    image: "/maps/map2.jpg",
    tag: "Verified Guide",
    description: "1.2 GB • Ready for offline",
    status: "active",
    offline: true,
  },
  {
    id: 3,
    title: "HIDDEN WATERFALLS",
    image: "/maps/map3.jpg",
    tag: "Explorer Pack",
    description: "85% Downloaded...",
    status: "active",
    offline: false,
  },
  {
    id: 4,
    title: "MOUNTAIN TRAILS",
    image: "/maps/map4.jpg",
    tag: "Inactive",
    description: "Click to renew subscription",
    status: "inactive",
    offline: false,
  },
];
