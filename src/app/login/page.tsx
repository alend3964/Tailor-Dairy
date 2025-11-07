"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const router = useRouter();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const users = [
    { username: "admin", password: "admin123", role: "admin" },
    { username: "staff1", password: "staff123", role: "staff" },
    { username: "staff2", password: "staff456", role: "staff" },
    ];
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    console.log("Attempting login:", { userId, password });

    // Later: Add logic to check if userId starts with "STF" => staff login
    // else => admin login
    const user = users.find(
      (u) => u.username === userId && u.password === password
    );

    if (user) {
      // Redirect based on role
      if (user.role === "admin") router.push("/admin-dashboard");
      else router.push("/staff-dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <section className="bg-white min-h-screen flex flex-col justify-center items-center">
      <div className="shadow-lg border border-gray-200 rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-[#1d3557] text-center mb-6">
          Tailor Dairy Login
        </h1>
        <p className="text-gray-500 text-center mb-8">
          Enter your credentials to continue
        </p>

        <form onSubmit={handleLogin} className="flex flex-col space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Username / Staff ID
            </label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
              placeholder="admin123 or STF001"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1d3557] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1d3557] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-[#1d3557] text-white py-2 rounded-lg font-semibold hover:bg-[#16324f] transition-all"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Only authorized staff and admin can log in
        </p>
      </div>
    </section>
  );
}
