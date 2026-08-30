"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

import { getProductById } from "@/app/data/products";
import { useCart } from "@/app/cart/CartContext";

import styles from "./page.module.css";

export default function ProductDetailsPage() {
  const params = useParams();

  const { addToCart } = useCart();

  const productId =
    typeof params.id === "string"
      ? params.id
      : "";

  const product = getProductById(productId);

  const [quantity, setQuantity] = useState(1);
  const [addClamp, setAddClamp] = useState(false);

  /* =====================================================
     PRODUCT NOT FOUND
     ===================================================== */

  if (!product) {
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
          </div>

          <div className={styles.navActions}>
            <Link href="/login">LOGIN</Link>
            <Link href="/signup">SIGN UP</Link>

            <Link
              href="/cart"
              className={styles.cart}
            >
              🛒
            </Link>
          </div>
        </nav>

        <section className={styles.notFound}>
          <div className={styles.notFoundIcon}>
            ⚡
          </div>

          <h1>PRODUCT NOT FOUND</h1>

          <p>
            The product you're looking for doesn't
            exist or may have been moved.
          </p>

          <Link
            href="/products/stabilizers"
            className={styles.backButton}
          >
            BACK TO STABILIZERS →
          </Link>
        </section>
      </main>
    );
  }

  /* =====================================================
     PRICE CALCULATIONS
     ===================================================== */

  const productTotal =
    product.price * quantity;

  const clampTotal =
    addClamp && product.clamp
      ? product.clamp.price * quantity
      : 0;

  const total =
    productTotal + clampTotal;

  /* =====================================================
     ADD TO CART
     ===================================================== */

 function handleAddToCart() {
  addToCart(
    product,
    quantity,
    addClamp
  );
}

  /* =====================================================
     MAIN PAGE
     ===================================================== */

  return (
    <main className={styles.page}>

      {/* =================================================
          NAVBAR
          ================================================= */}

      <nav className={styles.navbar}>

        <Link
          href="/"
          className={styles.logo}
        >
          <span>⚡</span>

          <div>
            <strong>TEWARI</strong>
            <small>ENTERPRISE</small>
          </div>
        </Link>


        <div className={styles.navLinks}>

          <Link href="/">
            HOME
          </Link>

          <Link href="/#catalog">
            CATALOG
          </Link>

          <Link href="/#wholesale">
            WHOLESALE
          </Link>

        </div>


        <div className={styles.navActions}>

          <Link href="/login">
            LOGIN
          </Link>

          <Link href="/signup">
            SIGN UP
          </Link>

          <Link
            href="/cart"
            className={styles.cart}
          >
            🛒
          </Link>

        </div>

      </nav>


      {/* =================================================
          PRODUCT SECTION
          ================================================= */}

      <section className={styles.productPage}>

        {/* BACK BUTTON */}

        <Link
          href="/products/stabilizers"
          className={styles.back}
        >
          ← BACK TO STABILIZERS
        </Link>


        <div className={styles.productLayout}>

          {/* =================================================
              PRODUCT IMAGE
              ================================================= */}

          <div className={styles.imageSection}>

            <div className={styles.imageNumber}>
              PRODUCT
            </div>


            <div className={styles.imageBox}>

              <div className={styles.glow} />

              <img
                src={product.image}
                alt={product.title}
                className={styles.productImage}
              />

            </div>

          </div>


          {/* =================================================
              PRODUCT DETAILS
              ================================================= */}

          <div className={styles.details}>

            {/* CATEGORY */}

            <div className={styles.tag}>
              {product.category.toUpperCase()} / PRODUCT
            </div>


            {/* SPECS */}

            <div className={styles.specs}>

              <span>
                {product.kva}
              </span>

              <span>
                {product.voltage}
              </span>

            </div>


            {/* TITLE */}

            <h1>
              {product.title}
            </h1>


            {/* DESCRIPTION */}

            <p className={styles.description}>
              {product.description}
            </p>


            <div className={styles.divider} />


            {/* =================================================
                PRICE
                ================================================= */}

            <div className={styles.priceSection}>

              <span>
                RETAIL PRICE
              </span>

              {product.price > 0 ? (

                <strong>
                  ₹
                  {product.price.toLocaleString(
                    "en-IN"
                  )}
                </strong>

              ) : (

                <strong
                  className={
                    styles.contactPrice
                  }
                >
                  CONTACT FOR PRICE
                </strong>

              )}

            </div>


            {/* =================================================
                QUANTITY
                ================================================= */}

            <div className={styles.optionSection}>

              <label>
                QUANTITY
              </label>


              <div className={styles.quantity}>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity(
                      Math.max(
                        1,
                        quantity - 1
                      )
                    )
                  }
                >
                  −
                </button>


                <span>
                  {quantity}
                </span>


                <button
                  type="button"
                  onClick={() =>
                    setQuantity(
                      quantity + 1
                    )
                  }
                >
                  +
                </button>

              </div>

            </div>


            {/* =================================================
                OPTIONAL WALL CLAMP
                ================================================= */}

            {product.clamp && (

              <div
                className={
                  styles.clampSection
                }
              >

                <div>

                  <span>
                    OPTIONAL ACCESSORY
                  </span>


                  <strong>
                    🔩 {product.clamp.name}
                  </strong>


                  {product.clamp.price > 0 && (

                    <small>
                      + ₹
                      {product.clamp.price.toLocaleString(
                        "en-IN"
                      )}
                    </small>

                  )}

                </div>


                <label
                  className={
                    styles.checkbox
                  }
                >

                  <input
                    type="checkbox"
                    checked={addClamp}
                    onChange={(event) =>
                      setAddClamp(
                        event.target.checked
                      )
                    }
                  />


                  <span
                    className={
                      styles.checkmark
                    }
                  >
                    ✓
                  </span>

                </label>

              </div>

            )}


            {/* =================================================
                TOTAL
                ================================================= */}

            <div className={styles.total}>

              <span>
                ESTIMATED TOTAL
              </span>


              {total > 0 ? (

                <strong>
                  ₹
                  {total.toLocaleString(
                    "en-IN"
                  )}
                </strong>

              ) : (

                <strong>
                  CONTACT FOR PRICE
                </strong>

              )}

            </div>


            {/* =================================================
                ACTION BUTTONS
                ================================================= */}

            <div className={styles.actions}>

              <button
                type="button"
                className={
                  styles.addButton
                }
                onClick={
                  handleAddToCart
                }
              >
                ADD TO CART →
              </button>


              <button
                type="button"
                className={
                  styles.buyButton
                }
                onClick={() =>
                  alert(
                    "Checkout will be connected next."
                  )
                }
              >
                BUY NOW
              </button>

            </div>


            {/* =================================================
                INFORMATION
                ================================================= */}

            <div className={styles.infoGrid}>

              <div>

                <span>
                  01
                </span>

                <strong>
                  GENUINE PRODUCT
                </strong>

                <p>
                  Quality products from
                  trusted sources.
                </p>

              </div>


              <div>

                <span>
                  02
                </span>

                <strong>
                  SUPPORT
                </strong>

                <p>
                  Contact us for product
                  assistance.
                </p>

              </div>


              <div>

                <span>
                  03
                </span>

                <strong>
                  WHOLESALE
                </strong>

                <p>
                  Special pricing available
                  for bulk orders.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          FOOTER
          ================================================= */}

      <footer className={styles.footer}>

        <strong>
          ⚡ TEWARI ENTERPRISE
        </strong>

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