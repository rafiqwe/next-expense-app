"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";

const MobileNavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 bg-white/95 py-3 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-600/50 shadow-lg shadow-gray-900/5 dark:shadow-black/30">
      {/* Header Row */}
      <div className="flex items-center justify-between px-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300">
            <span className="text-white text-sm md:text-lg font-bold">💰</span>
          </div>
          <span className="text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
            ExpenseTracker
          </span>
        </div>

        {/* Toggle Button */}
        <button
          className="md:hidden p-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`md:hidden transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-600/50 mt-2 shadow-lg overflow-y-auto max-h-[80vh]">
          {/* Links */}
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 text-sm font-medium transition-all duration-200 active:scale-95"
            onClick={closeMobileMenu}
          >
            <span className="text-base">🏠</span>
            <span>Home</span>
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 text-sm font-medium transition-all duration-200 active:scale-95"
            onClick={closeMobileMenu}
          >
            <span className="text-base">ℹ️</span>
            <span>About</span>
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/20 text-sm font-medium transition-all duration-200 active:scale-95"
            onClick={closeMobileMenu}
          >
            <span className="text-base">📞</span>
            <span>Contact</span>
          </Link>

          {/* Auth Section */}
          <div className="pt-3 border-t border-gray-200/50 dark:border-gray-600/50">
            <SignedOut>
              <SignInButton>
                <button
                  className="w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white px-4 py-3 rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
                  onClick={closeMobileMenu}
                >
                  <span>Sign In</span>
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center justify-center p-3 rounded-xl bg-gradient-to-r from-emerald-100/50 to-green-100/50 dark:from-emerald-900/20 dark:to-green-900/20 backdrop-blur-sm border border-emerald-200/30 dark:border-emerald-700/30">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox:
                        "w-8 h-8 hover:scale-110 transition-transform duration-200",
                      userButtonBox: "flex items-center justify-center",
                    },
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
