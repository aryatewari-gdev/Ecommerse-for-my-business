"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="group">
          <div className="text-xl font-bold tracking-tight">
            Tewari Enterprise
          </div>

          <div className="text-xs text-gray-500">
            Electronics & Solutions
          </div>
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/catalog"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Catalog
          </Link>

          <Link
            href="/#about"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            About
          </Link>

          <Link
            href="/#contact"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Contact
          </Link>

        </div>


        {/* Right Side */}
        <div className="flex items-center gap-3">

          <Link
            href="/login"
            className="hidden rounded-full px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 sm:block"
          >
            Login
          </Link>


          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/signup"
              className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </motion.div>

        </div>

      </div>
    </motion.nav>
  );
}