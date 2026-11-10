"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    name: "Voltage Stabilizer",
    category: "Stabilizers",
    description: "Reliable voltage protection for your electronics.",
    icon: "⚡",
  },
  {
    name: "LED Television",
    category: "Televisions",
    description: "Experience entertainment with vibrant picture quality.",
    icon: "📺",
  },
  {
    name: "Refrigerator",
    category: "Home Appliances",
    description: "Efficient cooling for your everyday needs.",
    icon: "❄️",
  },
  {
    name: "Washing Machine",
    category: "Home Appliances",
    description: "Powerful and efficient washing solutions.",
    icon: "🧺",
  },
  {
    name: "Air Conditioner",
    category: "Cooling",
    description: "Comfortable cooling for your home and workspace.",
    icon: "❄️",
  },
  {
    name: "Electronics Accessories",
    category: "Accessories",
    description: "Essential cables, adapters and accessories.",
    icon: "🔌",
  },
];

export default function Catalog() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      
      <section className="bg-white px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <Link
              href="/"
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              ← Back to Home
            </Link>

            <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Tewari Enterprise
            </p>

            <h1 className="mt-2 text-5xl font-bold md:text-6xl">
              Our Catalog
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-gray-600">
              Explore our range of electronics, appliances and
              accessories.
            </p>

          </motion.div>

        </div>

      </section>


      
      <section className="px-6 py-16">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((product, index) => (

              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-xl"
              >

                
                <div className="flex h-56 items-center justify-center bg-gray-100 text-7xl">
                  {product.icon}
                </div>


                <div className="p-6">

                  <p className="text-sm font-medium text-blue-600">
                    {product.category}
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold">
                    {product.name}
                  </h2>

                  <p className="mt-3 text-gray-500">
                    {product.description}
                  </p>

                  <button className="mt-6 rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition hover:bg-gray-900 hover:text-white">
                    View Details →
                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}