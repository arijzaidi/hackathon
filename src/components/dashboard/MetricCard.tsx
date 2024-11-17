import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}

export const MetricCard = ({ label, value, change, icon: Icon, color, bg }: MetricCardProps) => (
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex items-center justify-between mb-4">
      <div className={`${bg} p-3 rounded-lg`}>
        <Icon className={`h-6 w-6 ${color}`} />
      </div>
      <span className="text-sm font-medium text-gray-500 flex items-center gap-1">
        <ArrowUpRight className="h-4 w-4" />
        {change}
      </span>
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-1">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);