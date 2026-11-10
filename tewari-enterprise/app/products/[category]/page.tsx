"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./page.module.css";

type Product = {
  id: string;
  kva: string;
  voltage: string;
  title: string;
  description: string;
  price: number;
  image: string;
  clamp?: {
    name: string;
    price: number;
  };
};

const stabilizers: Product[] = [
  {
    id: "stb-05kva-90v",
    kva: "0.5 KVA",
    voltage: "90V A/M",
    title: "0.5 KVA 90V A/M STABILIZER",
    description:
      "Compact voltage protection solution for suitable home appliances.",
    price: 0,
    image: "/products/stabilizers/0.5kva-90v.jpg",
    clamp: {
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-1kva-50v",
    kva: "1 KVA",
    voltage: "50V A/M",
    title: "1 KVA 50V A/M STABILIZER",
    description:
      "Reliable voltage protection for appliances requiring stable power.",
    price: 0,
    image: "/products/stabilizers/1kva-50v.jpg",
    clamp: {
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-1kva-90v",
    kva: "1 KVA",
    voltage: "90V A/M",
    title: "1 KVA 90V A/M STABILIZER",
    description:
      "Dependable voltage regulation for home and commercial applications.",
    price: 0,
    image: "/products/stabilizers/1kva-90v.jpg",
    clamp: {
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-2kva-50v",
    kva: "2 KVA",
    voltage: "50V A/M",
    title: "2 KVA 50V A/M STABILIZER",
    description:
      "Higher-capacity voltage protection for larger appliances.",
    price: 0,
    image: "/products/stabilizers/2kva-50v.jpg",
    clamp: {
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-3kva-50v",
    kva: "3 KVA",
    voltage: "50V",
    title: "3 KVA 50V STABILIZER",
    description:
      "Powerful voltage regulation designed for demanding applications.",
    price: 0,
    image: "/products/stabilizers/3kva-50v.jpg",
    clamp: {
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-3kva-90v",
    kva: "3 KVA",
    voltage: "90V",
    title: "3 KVA 90V STABILIZER",
    description:
      "Reliable protection against voltage fluctuations.",
    price: 0,
    image: "/products/stabilizers/3kva-90v.jpg",
    clamp: {
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-4kva-140v",
    kva: "4 KVA",
    voltage: "140V",
    title: "4 KVA 140V STABILIZER",
    description:
      "Heavy-duty voltage regulation for larger electrical loads.",
    price: 0,
    image: "/products/stabilizers/4kva-140v.jpg",
    clamp: {
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-4kva-130v",
    kva: "4 KVA",
    voltage: "130V",
    title: "4 KVA 130V STABILIZER",
    description:
      "Stable and dependable power protection for demanding applications.",
    price: 0,
    image: "/products/stabilizers/4kva-130v.jpg",
    clamp: {
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-4kva-50v",
    kva: "4 KVA",
    voltage: "50V",
    title: "4 KVA 50V STABILIZER",
    description:
      "High-capacity voltage stabilization for electrical equipment.",
    price: 0,
    image: "/products/stabilizers/4kva-50v.jpg",
    clamp: {
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-4kva-90v",
    kva: "4 KVA",
    voltage: "90V",
    title: "4 KVA 90V STABILIZER",
    description:
      "Powerful voltage protection for home and commercial use.",
    price: 0,
    image: "/products/stabilizers/4kva-90v.jpg",
    clamp: {
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-5kva-50v",
    kva: "5 KVA",
    voltage: "50V",
    title: "5 KVA 50V STABILIZER",
    description:
      "Heavy-duty stabilizer designed for high-power applications.",
    price: 0,
    image: "/products/stabilizers/5kva-50v.jpg",
    clamp: {
      name: "Wall Mount Clamp",
      price: 0,
    },
  },

  {
    id: "stb-5kva-90v",
    kva: "5 KVA",
    voltage: "90V",
    title: "5 KVA 90V STABILIZER",
    description:
      "High-capacity voltage protection for demanding electrical systems.",
    price: 0,
    image: "/products/stabilizers/5kva-90v.jpg",
    clamp: {
      name: "Wall Mount Clamp",
      price: 0,
    },
  },
];

const categoryNames: Record<string, string> = {
  stabilizers: "STABILIZERS",
  inverters: "INVERTERS",
  ups: "UPS",
  batteries: "BATTERIES",
  "inverter-trolleys": "INVERTER TROLLEYS",
  "ac-&-fridge-stands": "AC & FRIDGE STANDS",
};

export default function ProductCategoryPage() {
  const params = useParams();

  const category =
    typeof params.category === "string"
      ? params.category
      : "";

  const categoryTitle =
    categoryNames[category] || "PRODUCTS";

  const products =
    category === "stabilizers"
      ? stabilizers
      : [];

  return (
    <main className={styles.page}>


      <nav className={styles.navbar}>

        <Link href="/" className={styles.logo}>
          <span>⚡</span>

          <div>
            <strong>TEWARI</strong>
            <small>ENTERPRISE</small>
          </div>
        </Link>

        <div className={styles.navLinks}>
          <Link href="/">HOME</Link>
          <Link href="/#catalog">CATALOG</Link>
          <Link href="/#wholesale">WHOLESALE</Link>
        </div>

        <div className={styles.navActions}>
          <Link href="/login">LOGIN</Link>
          <Link href="/signup">SIGN UP</Link>

          <Link href="/cart" className={styles.cart}>
            🛒
          </Link>
        </div>

      </nav>


      <section className={styles.header}>

        <Link
          href="/#catalog"
          className={styles.back}
        >
          ← BACK TO CATALOG
        </Link>

        <div className={styles.headerTag}>
          01 / PRODUCT CATALOG
        </div>

        <h1>
          {categoryTitle}
          <span>.</span>
        </h1>

        <p>
          Explore our range of reliable power protection
          and backup solutions.
        </p>

        {category === "stabilizers" && (
          <div className={styles.productCount}>
            {products.length} MODELS AVAILABLE
          </div>
        )}

      </section>


      {products.length > 0 ? (

        <section className={styles.productsSection}>

          <div className={styles.productGrid}>

            {products.map((product, index) => (

              <article
                className={styles.productCard}
                key={product.id}
              >

                
                <div className={styles.productNumber}>
                  {String(index + 1).padStart(2, "0")}
                </div>


            
                <div className={styles.imageBox}>

                  <Image
                    src={product.image}
                    alt={product.title}
                    width={500}
                    height={500}
                    className={styles.productImage}
                  />

                  <div className={styles.imageGlow} />

                </div>


              
                <div className={styles.productInfo}>

                  <div className={styles.specs}>

                    <span>
                      {product.kva}
                    </span>

                    <span>
                      {product.voltage}
                    </span>

                  </div>

                  <h2>
                    {product.title}
                  </h2>

                  <p>
                    {product.description}
                  </p>


                 
                  <div className={styles.priceArea}>

                    <span>
                      RETAIL PRICE
                    </span>

                    {product.price > 0 ? (
                      <strong>
                        ₹{product.price.toLocaleString("en-IN")}
                      </strong>
                    ) : (
                      <strong className={styles.contactPrice}>
                        CONTACT FOR PRICE
                      </strong>
                    )}

                  </div>


                
                  {product.clamp && (

                    <div className={styles.accessory}>

                      <div>
                        <span>
                          OPTIONAL ACCESSORY
                        </span>

                        <strong>
                          🔩 {product.clamp.name}
                        </strong>
                      </div>

                      <button type="button">
                        ADD
                      </button>

                    </div>

                  )}


                
                  <div className={styles.buttons}>

                    <Link
  href={`/products/${category}/${product.id}`}
  className={styles.detailsButton}
>
  VIEW DETAILS
</Link>

                    <button
                      type="button"
                      className={styles.cartButton}
                    >
                      ADD TO CART
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </section>

      ) : (


        <section className={styles.empty}>

          <div className={styles.emptyIcon}>
            ⚡
          </div>

          <h2>
            PRODUCTS COMING SOON
          </h2>

          <p>
            We&apos;re currently preparing this category.
            Check back soon for our latest products.
          </p>

          <Link
            href="/#catalog"
            className={styles.catalogButton}
          >
            BACK TO CATALOG →
          </Link>

        </section>

      )}


      <footer className={styles.footer}>

        <div>
          ⚡ TEWARI ENTERPRISE
        </div>

        <span>
          POWER • PROTECTION • PERFORMANCE
        </span>

        <small>
          © 2026 Tewari Enterprise
        </small>

      </footer>

    </main>
  );
}