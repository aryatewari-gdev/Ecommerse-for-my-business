"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Signup() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 text-gray-900">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"
      >

        {/* Logo */}
        <div className="text-center">

          <Link href="/" className="text-2xl font-bold">
            Tewari Enterprise
          </Link>

          <h1 className="mt-8 text-3xl font-bold">
            Create Account
          </h1>

          <p className="mt-2 text-gray-500">
            Join Tewari Enterprise
          </p>

        </div>


        {/* Signup Form */}
        <form className="mt-8 space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />
          </div>


          <div>
            <label className="mb-2 block text-sm font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />
          </div>


          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />
          </div>


          <div>
            <label className="mb-2 block text-sm font-medium">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />
          </div>


          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Create Account
          </motion.button>

        </form>


        {/* Login */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>

      </motion.div>

    </main>
  );
}