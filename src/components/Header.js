"use client";

import { useState } from "react";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa6";

import { useCartStore } from "@/store/cartStore";
import { Menu, ShoppingBag, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = useCartStore((state) => state.items);

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="relative  shadow-sm     bg-mc-orange z-40 uppercase font-bowlby-one text-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold" onClick={closeMenu}>
          <img
            src="/images/Herobanner/mikes-corner-logo.webp"
            alt="Logo"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/">Home</Link>
          <Link
            href="/#menu"
            className=" hover:scale-110 transition text-mc-black "
          >
            See Menu
          </Link>
          <a
            href="https://instagram.com/mikescorner"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:scale-110 transition text-3xl text-mc-black"
          >
            <FaInstagram />
          </a>
          {/* <Link href="/about">About</Link> */}
          {/* <Link href="/contact">Contact</Link> */}
          {/* <Link href="/policy">Store policy</Link> */}

          {/* <Link
            href="/cart"
            className="relative inline-flex"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={24} />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[11px] font-medium leading-none text-white">
                <span
                  className={`relative top-[0.5px] ${
                    cartCount >= 10 ? "-left-[0.5px]" : ""
                  }`}
                >
                  {cartCount}
                </span>
              </span>
            )}
          </Link> */}
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-5 md:hidden ">
          {/* <Link
            href="/cart"
            className="relative inline-flex"
            aria-label="Shopping cart"
            onClick={closeMenu}
          >
            <ShoppingBag size={24} />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[11px] font-medium leading-none text-white">
                <span
                  className={`relative top-[0.5px] ${
                    cartCount >= 10 ? "-left-[0.5px]" : ""
                  }`}
                >
                  {cartCount}
                </span>
              </span>
            )}
          </Link> */}

          <button
            type="button"
            className="cursor-pointer text-mc-black"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={34} /> : <Menu size={34} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="absolute left-0 top-full z-50 w-full   shadow-lg border-mc-red bg-mc-orange backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-6">
            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-mc-black/50   py-3"
            >
              Home
            </Link>

            <Link
              href="/#menu"
              onClick={closeMenu}
              className="border-b border-mc-black/50   py-3"
            >
              Menu
            </Link>

            <a
              href="https://instagram.com/mikescorner"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-mc-black text-3xl pt-4 hover:text-[#E8191C]"
            >
              <FaInstagram />
            </a>

            {/* <Link
              href="/about"
              onClick={closeMenu}
              className="border-b border-gray-100 py-3"
            >
              About
            </Link> */}
            {/* <Link href="/contact" onClick={closeMenu} className="py-3">
              Contact
            </Link> */}

            {/* <Link href="/policy" onClick={closeMenu} className="py-3">
              Store policy
            </Link> */}
          </div>
        </nav>
      )}
    </header>
  );
}
