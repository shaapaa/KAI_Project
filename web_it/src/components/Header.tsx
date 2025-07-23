  import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Portal IT Divisi Regional IV Tanjungkarang
          </h2>
        </div>
        
        <div className="flex items-center space-x-4">

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-700">Admin IT</p>
              <p className="text-xs text-gray-500">Divre IV TNK</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
