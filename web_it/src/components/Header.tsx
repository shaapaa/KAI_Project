import React from 'react';
import { User } from 'lucide-react';
import logoBUMN from '@/assests/logo-bumn.png';
import logoKAI from '@/assests/logo-kai.png'; // Pastikan path dan nama file benar

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Kiri: Logo BUMN + Logo KAI + Judul Portal */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img
              src={logoBUMN}
              alt="Logo BUMN"
              className="h-14 w-auto object-contain"
            />
            <img
              src={logoKAI}
              alt="Logo KAI"
              className="h-7 w-auto object-contain"
            />
          </div>
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 leading-snug">
              Portal IT Divisi Regional IV Tanjungkarang
            </h2>
            <p className="text-sm text-gray-500 hidden md:block">
              PT Kereta Api Indonesia (Persero)
            </p>
          </div>
        </div>

        {/* Kanan: Profil Admin */}
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center">
            <User size={18} className="text-white" />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-700">Admin IT</p>
            <p className="text-xs text-gray-500">Divre IV TNK</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;