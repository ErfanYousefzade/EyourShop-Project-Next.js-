"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full bg-slate-900 text-white shadow-lg border-b border-slate-700 relative">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Desktop */}
        <nav className="hidden md:flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link
              href="/CartItem"
              className="relative flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
            >
              🛒
              <span>Cart</span>
            </Link>

            <Link
              href="/Admin"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:scale-105 hover:shadow-lg transition duration-300"
            >
              Admin
            </Link>
          </div>

          <div className="flex items-center gap-14 text-[16px]">
            <ul className="flex items-center gap-10 font-medium">
              <li>
                <Link
                  href="/Products"
                  className="hover:text-blue-400 transition"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link href="/About" className="hover:text-blue-400 transition">
                  About
                </Link>
              </li>

              <li>
                <Link href="/helps" className="hover:text-blue-400 transition">
                  Helps
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="px-3 py-2 rounded-lg bg-slate-700"
                >
                  {theme === "dark" ? "☀️" : "🌙"}
                </button>
              </li>
            </ul>

            <Link href="/">
              <div className="flex items-center gap-3 group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-lg shadow-lg group-hover:rotate-6 transition duration-300">
                  E
                </div>

                <div className="leading-4">
                  <h2 className="font-bold tracking-wide">EYour Shop</h2>
                  <p className="text-xs text-slate-400">Premium Store</p>
                </div>
              </div>
            </Link>
          </div>
        </nav>

        {/* Mobile */}
        <nav className="md:hidden flex items-center justify-between h-16 relative">
          <button onClick={() => setOpen(!open)} className="text-2xl z-20">
            {open ? "✕" : "☰"}
          </button>

          <Link href="/">
            <h1 className="absolute left-1/2 -translate-x-1/2 font-bold text-lg whitespace-nowrap mt-[-15px]">
              EYour Shop
            </h1>
          </Link>

          <div className="flex items-center gap-3 text-sm">
            <Link href="/CartItem" className="relative py-1">
              🛒
            </Link>

            <Link href="/Admin" className="px-2 py-1 bg-violet-600 rounded">
              Admin
            </Link>
          </div>
        </nav>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-700 bg-slate-900 px-4 py-5">
          <ul className="flex flex-col gap-4 text-center font-medium">
            <li>
              <Link href="/Products">Products</Link>
            </li>

            <li>
              <Link href="/About">About</Link>
            </li>

            <li>
              <Link href="/Helps">Helps</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
