"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <header className="sticky top-0 left-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 bg-white rounded-full p-1"
        >
          <Image
            src="/plant-logo.jpg"
            alt="Planto Logo"
            width={60}
            height={60}
            className="object-contain rounded-full"
          />
          <span className="text-2xl font-bold text-green-700 tracking-wide">
            Planto
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-bold text-black">
          <Link
            href="/about"
            className="hover:text-green-600 font-medium transition"
          >
            About Us
          </Link>
          {/* entah kenapa navbar about us yang sebelumnya tidak mengarahkan ke spesifik page tinggal ditambahkan slash (/) di id yang sebelumnnya hanya (#pr0ducts) */}

          <Link
            href="/products"
            className="hover:text-green-600 font-medium transition"
          >
            Product Collection
          </Link>
          <Link
            href="/blogs"
            className="hover:text-green-600 font-medium transition"
          >
            Tips & Tricks Blog
          </Link>
          <Link
            href="/#testimonials"
            className="hover:text-green-600 font-medium transition"
          >
            Customer Reviews
          </Link>
          <Link
            href="/#contact"
            className="hover:text-green-600 font-medium transition"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl font-bold text-green-700"
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {navOpen && (
        <nav className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg">
          <div className="flex flex-col space-y-4 p-6 text-black">
            <Link
              href="/about"
              className="hover:text-green-600 font-medium transition"
              onClick={toggleNav}
            >
              About Us
            </Link>
            <Link
              href="products"
              className="hover:text-green-600 font-medium transition"
              onClick={toggleNav}
            >
              Product Collection
            </Link>
            <Link
              href="blogs"
              className="hover:text-green-600 font-medium transition"
              onClick={toggleNav}
            >
              Tips & Tricks Blog
            </Link>
            <Link
              href="#testimonials"
              className="hover:text-green-600 font-medium transition"
              onClick={toggleNav}
            >
              Customer Reviews
            </Link>
            <Link
              href="#contact"
              className="hover:text-green-600 font-medium transition"
              onClick={toggleNav}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
