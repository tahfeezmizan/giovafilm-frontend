import { Calendar, Download } from "lucide-react";
import { SalesTaxesChart } from "./sales-taxes-chart";
import { Button } from "@/components/ui/button";

export default function SalesTaxes() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Sales & Taxes</h2>

        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
            <Calendar className="w-5 h-5 text-gray-600" />
          </button>
          <input
            type="text"
            placeholder="Date range"
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Export CSV
          </Button>
          <Button size="sm" className="gap-2 bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <p className="text-sm text-gray-600 mb-1">Total Sales</p>
          <p className="text-2xl font-bold text-blue-600">$31,900</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <p className="text-sm text-gray-600 mb-1">Taxes Collected</p>
          <p className="text-2xl font-bold text-green-600">$3,190</p>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
          <p className="text-sm text-gray-600 mb-1">Net Revenue</p>
          <p className="text-2xl font-bold text-purple-600">$28,710</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-gray-50 rounded-lg p-4">
        <SalesTaxesChart />
      </div>
    </div>
  );
}
