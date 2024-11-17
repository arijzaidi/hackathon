import React from 'react';
import { MetricsGrid } from './dashboard/MetricsGrid';
import { CommunicationHealth } from './dashboard/CommunicationHealth';
import { RecentAlerts } from './dashboard/RecentAlerts';

export default function Dashboard() {
  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Dashboard Overview</h2>
        <p className="text-gray-600">Real-time insights and communication health metrics</p>
      </div>

      <MetricsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CommunicationHealth />
        <RecentAlerts />
      </div>
    </div>
  );
}