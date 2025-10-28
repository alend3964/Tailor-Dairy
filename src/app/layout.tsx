// src/app/layout.tsx
import "./globals.css";
import Header from "@/components/Header"; // @ alias points to src (default)
import React from "react";

export const metadata = {
  title: "Tailor-Dairy",
  description: "Tailoring and measurement manager",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 min-h-screen">
        <Header subtitle="Desktop & Tablet first tailoring app" />
        <main className="max-w-5xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
