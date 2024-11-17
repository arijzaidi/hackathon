import React from 'react';
import { ThumbsDown } from 'lucide-react';

interface AlertItemProps {
  team: string;
  issue: string;
  severity: 'high' | 'medium' | 'low';
  time: string;
}

export const AlertItem = ({ team, issue, severity, time }: AlertItemProps) => (
  <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50">
    <div className={`p-2 rounded-lg ${
      severity === 'high' ? 'bg-red-100' :
      severity === 'medium' ? 'bg-yellow-100' : 'bg-blue-100'
    }`}>
      <ThumbsDown className={`h-5 w-5 ${
        severity === 'high' ? 'text-red-600' :
        severity === 'medium' ? 'text-yellow-600' : 'text-blue-600'
      }`} />
    </div>
    <div>
      <p className="font-medium text-gray-800">{team}</p>
      <p className="text-sm text-gray-600">{issue}</p>
      <p className="text-xs text-gray-400 mt-1">{time}</p>
    </div>
  </div>
);