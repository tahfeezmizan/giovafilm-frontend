type InfoProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
};

export default function InfoCard({ icon, label, value, highlight }: InfoProps) {
  return (
    <div className="border rounded-xl p-4 bg-white ">
      <div className="flex items-center gap-2 text-orange-500 mb-2">{icon}</div>

      <p className="text-xs text-muted-foreground font-bold font-public-sans tracking-wide">
        {label}
      </p>

      <p className={`font-public-sans font-bold ${highlight ? "text-orange-500" : ""}`}>
        {value}
      </p>
    </div>
  );
}
