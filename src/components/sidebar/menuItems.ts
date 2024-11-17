import { 
  BarChart3, 
  Bell, 
  FileText, 
  Home,
  MessageSquare, 
  Settings, 
  Shield, 
  Users
} from 'lucide-react';
import { MenuItem } from './types';

export const menuItems: MenuItem[] = [
  { 
    icon: Home, 
    label: 'Overview',
    href: '/' 
  },
  { 
    icon: MessageSquare, 
    label: 'Interactions',
    subItems: [
      { label: 'Active Chats', href: '/chats' },
      { label: 'Message History', href: '/history' },
      { label: 'Flagged Content', href: '/flagged' },
    ]
  },
  { 
    icon: BarChart3, 
    label: 'Analytics',
    subItems: [
      { label: 'Sentiment Trends', href: '/sentiment' },
      { label: 'Team Metrics', href: '/team-metrics' },
      { label: 'Communication Patterns', href: '/patterns' },
    ]
  },
  { 
    icon: Bell, 
    label: 'Alerts',
    subItems: [
      { label: 'Active Alerts', href: '/active-alerts' },
      { label: 'Alert History', href: '/alert-history' },
      { label: 'Configure Alerts', href: '/alert-settings' },
    ]
  },
  { 
    icon: Users, 
    label: 'Teams',
    href: '/teams'
  },
  { 
    icon: FileText, 
    label: 'Reports',
    subItems: [
      { label: 'Weekly Summary', href: '/reports/weekly' },
      { label: 'Monthly Analysis', href: '/reports/monthly' },
      { label: 'Custom Reports', href: '/reports/custom' },
    ]
  },
  { 
    icon: Shield, 
    label: 'Privacy',
    href: '/privacy'
  },
  { 
    icon: Settings, 
    label: 'Settings',
    href: '/settings'
  },
];