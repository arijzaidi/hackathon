import React from 'react';
import { BarChart } from 'lucide-react';

export const CommunicationHealth = () => (
  <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-semibold text-gray-800">Communication Health</h3>
      <select className="border rounded-lg px-3 py-2 text-sm">
        <option>Last 7 days</option>
        <option>Last 30 days</option>
        <option>Last 90 days</option>
      </select>
    </div>
    <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
      <BarChart className="h-8 w-8 text-gray-400" />
      <span className="ml-2 text-gray-500">Chart visualization here</span>
    </div>
  </div>
);