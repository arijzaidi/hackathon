import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from './types';

interface SidebarMenuItemProps {
  item: MenuItem;
  isActive: boolean;
  onClick: () => void;
}

export const SidebarMenuItem = ({ item, isActive, onClick }: SidebarMenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubItems = item.subItems && item.subItems.length > 0;

  return (
    <div>
      <button
        onClick={() => {
          onClick();
          if (hasSubItems) setIsOpen(!isOpen);
        }}
        className={`w-full flex items-center justify-between px-2 py-3 rounded-lg transition-colors ${
          isActive 
            ? 'bg-indigo-800 text-white' 
            : 'text-gray-300 hover:bg-indigo-800/50'
        }`}
      >
        <div className="flex items-center gap-3">
          <item.icon className="w-5 h-5" />
          <span>{item.label}</span>
        </div>
        {hasSubItems && (
          <ChevronDown className={`w-4 h-4 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`} />
        )}
      </button>

      {hasSubItems && isOpen && (
        <div className="ml-9 mt-1 space-y-1">
          {item.subItems.map((subItem) => (
            <a
              key={subItem.href}
              href={subItem.href}
              className="block px-2 py-2 text-sm text-gray-400 hover:text-white hover:bg-indigo-800/30 rounded-lg transition-colors"
            >
              {subItem.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};