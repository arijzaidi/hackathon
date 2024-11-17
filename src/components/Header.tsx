import React from 'react';
import { Bell, Search, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1">
          <div className="relative w-96">
            <input
              type="text"
              placeholder="Search interactions, teams, or reports..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>
          
          <div className="flex items-center gap-3 border-l pl-4">
            <div className="text-right">
              <p className="text-sm font-medium">Sarah Connor</p>
              <p className="text-xs text-gray-500">HR Director</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <User className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}