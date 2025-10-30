// src/app/components/Header.tsx
import React from "react";

interface HeaderProps {
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ subtitle }) => {
  return (
    <header className="bg-[#f9fafb] text-black shadow-md shadow-gray-200/60 fixed top-0 left-0 w-full z-50 py-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold px-4">Saly&apos;s Needlecraft</h1>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
       <nav className="space-x-6">
        <a href="#" className="hover:text-blue-900 transition-colors px-4">Home</a>
        <a href="#" className="hover:text-blue-900 transition-colors px-4">About</a>
        <a href="#" className="hover:text-blue-900 transition-colors px-4">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
//<header className="bg-white shadow-md shadow-gray-200/60 fixed top-0 left-0 w-full z-50">
