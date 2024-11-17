import React from 'react';
import { AlertItem } from './AlertItem';

const recentAlerts = [
  {
    team: 'Engineering',
    issue: 'Potential conflict detected',
    severity: 'high' as const,
    time: '10 minutes ago'
  },
  {
    team: 'Marketing',
    issue: 'Negative sentiment spike',
    severity: 'medium' as const,
    time: '1 hour ago'
  },
  {
    team: 'Sales',
    issue: 'Communication gap identified',
    severity: 'low' as const,
    time: '2 hours ago'
  }
];

export const RecentAlerts = () => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-6">Recent Alerts</h3>
    <div className="space-y-4">
      {recentAlerts.map((alert, index) => (
        <AlertItem key={index} {...alert} />
      ))}
    </div>
    <button className="w-full mt-4 text-center text-sm text-indigo-600 hover:text-indigo-700">
      View all alerts →
    </button>
  </div>
);