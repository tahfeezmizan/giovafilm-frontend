"use client";

export default function AdminReviewTasks({ reviewTasks }: any) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-6">
        Admin Review Tasks
      </h2>

      <div className="space-y-4">
        {reviewTasks.map((task: any, idx: number) => (
          <label key={idx} className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={task.completed}
              className="w-4 h-4 mt-1"
              readOnly
            />

            <span className="text-sm text-gray-700">{task.task}</span>
          </label>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Internal Notes (not visible to owner)
        </p>

        <textarea
          placeholder="Add private notes about this verification..."
          className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
      </div>
    </div>
  );
}
