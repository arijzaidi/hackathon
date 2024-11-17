import React from 'react';
import { 
  AlertTriangle,
  Gauge,
  Heart,
  ArrowUpRight
} from 'lucide-react';

export const QuickStats = () => (
  <div className="mt-auto p-4 bg-indigo-800/50 rounded-lg space-y-3">
    <h3 className="text-sm font-semibold text-gray-300 mb-2">Quick Stats</h3>
    <div className="flex items-center gap-2 text-gray-300">
      <Gauge className="w-4 h-4" />
      <span className="text-sm">Team Health: 85%</span>
    </div>
    <div className="flex items-center gap-2 text-gray-300">
      <Heart className="w-4 h-4" />
      <span className="text-sm">Sentiment: Positive</span>
    </div>
    <div className="flex items-center gap-2 text-gray-300">
      <AlertTriangle className="w-4 h-4" />
      <span className="text-sm">Active Alerts: 3</span>
    </div>
    <div className="flex items-center gap-2 text-gray-300">
      <ArrowUpRight className="w-4 h-4" />
      <span className="text-sm">Engagement: +12%</span>
    </div>
  </div>
);