"use client";

interface StatItem {
  name: string;
  count: number;
}

const mostViewedMaps: StatItem[] = [
  { name: "San Francisco Food Tour", count: 3456 },
  { name: "Paris Museums & Culture", count: 2890 },
  { name: "NYC Street Art", count: 2341 },
  { name: "Tokyo Hidden Gems", count: 1987 },
  { name: "Barcelona Architecture", count: 1654 },
];

const mostOpenedPlaces: StatItem[] = [
  { name: "Golden Gate Park", count: 1234 },
  { name: "The Louvre Museum", count: 3456 },
  { name: "Shibuya Crossing", count: 2341 },
  { name: "Brooklyn Street Art", count: 567 },
  { name: "Sagrada Familia", count: 4123 },
];

const mostRedeemedOffers: StatItem[] = [
  { name: "20% off Coffee", count: 42 },
  { name: "Free Dessert", count: 18 },
  { name: "$5 off Entry", count: 156 },
  { name: "Buy 1 Get 1 Free", count: 8 },
];

function StatColumn({ title, items }: { title: string; items: StatItem[] }) {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-3 ">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between bg-gray-100/50 p-3 rounded-lg">
            <span className="text-sm text-gray-700">{item.name}</span>
            <span className="text-sm font-semibold text-blue-600">
              {item.count.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function UsageStatistics() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Usage of Maps / Places / Offers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatColumn title="Most Viewed Maps" items={mostViewedMaps} />
        <StatColumn title="Most Opened Places" items={mostOpenedPlaces} />
        <StatColumn title="Most Redeemed Offers" items={mostRedeemedOffers} />
      </div>
    </div>
  );
}
