import React from 'react';
import { 
  AlertTriangle,
  Heart,
  MessageCircle,
  Users
} from 'lucide-react';
import { MetricCard } from './MetricCard';

const metrics = [
  {
    label: 'Active Conversations',
    value: '2,847',
    change: '+12.5%',
    icon: MessageCircle,
    color: 'text-blue-600',
    bg: 'bg-blue-100'
  },
  {
    label: 'Sentiment Score',
    value: '7.8/10',
    change: '+0.5',
    icon: Heart,
    color: 'text-green-600',
    bg: 'bg-green-100'
  },
  {
    label: 'Active Alerts',
    value: '3',
    change: '-2',
    icon: AlertTriangle,
    color: 'text-red-600',
    bg: 'bg-red-100'
  },
  {
    label: 'Teams Monitored',
    value: '12',
    change: '0',
    icon: Users,
    color: 'text-purple-600',
    bg: 'bg-purple-100'
  }
];

export const MetricsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    {metrics.map((metric) => (
      <MetricCard key={metric.label} {...metric} />
    ))}
  </div>
);