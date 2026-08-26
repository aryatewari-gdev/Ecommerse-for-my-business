"use client";

import { motion } from "framer-motion";
import Navbar from "@/app/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-[85vh] items-center overflow-hidden px-6"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Tewari Enterprise
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              Reliable
              <span className="block text-blue-600">
                Electronics.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Quality electronics and trusted solutions for your
              home and business. Discover products selected with
              reliability and performance in mind.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <motion.a
                href="/catalog"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-blue-600 px-7 py-3 text-center font-medium text-white shadow-lg shadow-blue-600/20"
              >
                Explore Our Catalog →
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border border-gray-300 px-7 py-3 text-center font-medium transition hover:bg-gray-100"
              >
                Contact Us
              </motion.a>

            </div>
          </motion.div>


          {/* RIGHT - FEATURED PRODUCT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >

            <div className="relative overflow-hidden rounded-3xl bg-gray-100 p-10">

              <div className="absolute right-6 top-6 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm">
                Featured
              </div>

              <div className="flex h-100 items-center justify-center">

                {/* Temporary stabilizer placeholder */}
                <div className="text-center">
                  <div className="text-9xl">
                    ⚡
                  </div>

                  <p className="mt-6 text-xl font-semibold">
                    Voltage Stabilizer
                  </p>

                  <p className="mt-2 text-gray-500">
                    Reliable power protection
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 px-6 py-24">

        <div className="mx-auto max-w-6xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Why Tewari Enterprise
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              Built Around Trust
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-600">
              We focus on providing dependable products and
              service that our customers can rely on.
            </p>

          </motion.div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="text-4xl">✓</div>

              <h3 className="mt-4 text-xl font-semibold">
                Quality Products
              </h3>

              <p className="mt-3 text-gray-500">
                Carefully selected electronics from trusted
                brands and manufacturers.
              </p>
            </motion.div>


            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="text-4xl">⚡</div>

              <h3 className="mt-4 text-xl font-semibold">
                Reliable Solutions
              </h3>

              <p className="mt-3 text-gray-500">
                Products designed to meet everyday needs with
                dependable performance.
              </p>
            </motion.div>


            <motion.div
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <div className="text-4xl">🤝</div>

              <h3 className="mt-4 text-xl font-semibold">
                Customer First
              </h3>

              <p className="mt-3 text-gray-500">
                We believe in building long-term relationships
                with our customers.
              </p>
            </motion.div>

          </div>

        </div>

      </section>


      {/* CATALOG CTA */}
      <section className="px-6 py-24">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl rounded-3xl bg-gray-900 px-8 py-16 text-center text-white"
        >

          <h2 className="text-4xl font-bold md:text-5xl">
            Looking for something specific?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-300">
            Browse our complete electronics catalog and
            discover the products available from Tewari Enterprise.
          </p>

          <motion.a
            href="/catalog"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-gray-900"
          >
            Browse Catalog →
          </motion.a>

        </motion.div>

      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="bg-gray-50 px-6 py-24 text-center"
      >

        <h2 className="text-4xl font-bold">
          Get in Touch
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Have a question about a product? Contact Tewari
          Enterprise and we&apos;ll be happy to help.
        </p>

      </section>


      {/* FOOTER */}
      <footer className="border-t px-6 py-8 text-center text-sm text-gray-500">
        © 2026 Tewari Enterprise. All rights reserved.
      </footer>

    </main>
  );
}