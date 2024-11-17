import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { menuItems } from './sidebar/menuItems';
import { SidebarMenuItem } from './sidebar/SidebarMenuItem';
import { QuickStats } from './sidebar/QuickStats';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Overview');

  return (
    <aside className="bg-indigo-900 w-64 min-h-screen p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Shield className="w-8 h-8" />
        <h1 className="text-xl font-bold text-white">HR Insight AI</h1>
      </div>
      
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <SidebarMenuItem
            key={item.label}
            item={item}
            isActive={activeItem === item.label}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
      </nav>

      <QuickStats />
    </aside>
  );
}