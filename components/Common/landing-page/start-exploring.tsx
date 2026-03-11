import { Button } from "@/components/ui/button";

export default function StartExploring() {
  return (
    <section className="w-full flex justify-center px-6 py-16">
      <div
        className="relative w-full max-w-6xl rounded-3xl overflow-hidden"
        style={{
          backgroundImage: "url('/city.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center py-20 px-6 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start Exploring Today
          </h2>

          <p className="max-w-xl text-gray-200 mb-8">
            Don’t settle for tourist traps. Get the map that locals use and
            experience the city like never before.
          </p>

          <div className="flex items-center gap-4">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-5 rounded-xl">
              Browse Maps
            </Button>

            <span className="text-sm text-gray-300">
              No subscription required.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
