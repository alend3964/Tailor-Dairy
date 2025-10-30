

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-black shadow-inner py-6 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Saly&apos;s Needlecraft. All rights reserved.
      </p>
      <p className="text-xs text-gray-500 mt-2">
          Designed and developed by <span className="font-medium text-blue-600">Alend Jaimon</span>
      </p>
    </footer>
  );
}
