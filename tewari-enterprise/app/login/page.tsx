"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Login() {
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
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-500">
            Login to your account
          </p>
        </div>


        {/* Login Form */}
        <form className="mt-8 space-y-5">

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
              placeholder="Enter your password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />
          </div>


          <div className="flex justify-end">
            <Link
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>


          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </motion.button>

        </form>


        {/* Signup */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-blue-600 hover:underline"
          >
            Create an account
          </Link>
        </p>

      </motion.div>

    </main>
  );
}