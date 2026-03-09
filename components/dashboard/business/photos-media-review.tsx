"use client";

export default function PhotosMediaReview({ businessData }: any) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          Photos & Media Review
        </h2>

        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          Re-order Photos
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {businessData.photos.map((photo: any, idx: number) => (
          <div
            key={idx}
            className="bg-gray-200 rounded-lg h-32 flex items-center justify-center"
          >
            <span className="text-gray-500">Photo {idx + 1}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div>
          <p className="font-semibold text-gray-900">{businessData.name}</p>

          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mt-2">
            {businessData.status}
          </span>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            Reject
          </button>

          <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
            Request Changes
          </button>

          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Approve & Publish
          </button>
        </div>
      </div>
    </div>
  );
}
