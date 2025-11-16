"use client";

import { useState } from "react";
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Events",
    "Internships",
    "Research & Publications",
    "Programs/Initiatives",
    "Contact",
    "Portal"
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between h-16 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-[60px] h-[75px] overflow-hidden flex items-center justify-center relative">

            <img
              src="/logo.svg"
              alt="ACE Logo"
              className="h-full w-full scale-150 absolute top-4"
              />
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-semibold text-slate-700 leading-tight">
              ACADEMY OF
            </p>
            <p className="text-xs font-semibold text-slate-700">
              COGNITUM EXCELLENCE
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-xs md:text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors whitespace-nowrap"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 hover:bg-slate-100 rounded"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} className="text-slate-700" /> : <Menu size={24} className="text-slate-700" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <div className="flex flex-col gap-2 px-4 py-4 max-w-7xl mx-auto">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors py-2"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
