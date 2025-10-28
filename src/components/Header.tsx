// src/app/components/Header.tsx
import React from "react";

interface HeaderProps {
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ subtitle }) => {
  return (
    <header className="bg-white shadow-md p-4">
      <h1 className="text-2xl font-bold text-gray-800">Tailor Dairy</h1>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </header>
  );
};

export default Header;
