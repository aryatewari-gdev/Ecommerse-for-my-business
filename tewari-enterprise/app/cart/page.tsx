"use client";

import Link from "next/link";
import { useCart } from "./CartContext";
import styles from "./cart.module.css";

export default function CartPage() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
  } = useCart();

  return (
    <main className={styles.page}>

      {/* ================= NAVBAR ================= */}

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


      {/* ================= CART ================= */}

      <section className={styles.cartPage}>

        <div className={styles.heading}>

          <span>03 / YOUR CART</span>

          <h1>
            YOUR
            <br />
            <strong>CART.</strong>
          </h1>

          <p>
            Review your selected products before placing
            your order.
          </p>

        </div>


        {/* ================= EMPTY CART ================= */}

        {items.length === 0 ? (

          <div className={styles.emptyCart}>

            <div className={styles.emptyIcon}>
              🛒
            </div>

            <h2>
              YOUR CART IS EMPTY
            </h2>

            <p>
              You haven't added any products yet.
            </p>

            <Link
              href="/#catalog"
              className={styles.shopButton}
            >
              EXPLORE CATALOG →
            </Link>

          </div>

        ) : (

          /* ================= CART WITH ITEMS ================= */

          <div className={styles.cartLayout}>

            {/* ================= ITEMS ================= */}

            <div className={styles.items}>

              <div className={styles.itemsHeader}>

                <span>
                  {items.length} PRODUCT
                  {items.length !== 1 ? "S" : ""}
                </span>

                <button
                  type="button"
                  onClick={clearCart}
                >
                  CLEAR CART
                </button>

              </div>


              {items.map((item, index) => {

                const productPrice =
                  item.product.price;

                const clampPrice =
                  item.addClamp &&
                  item.product.clamp
                    ? item.product.clamp.price
                    : 0;

                const itemTotal =
                  (productPrice + clampPrice) *
                  item.quantity;


                return (

                  <div
                    className={styles.cartItem}
                    key={`${item.product.id}-${item.addClamp}`}
                  >

                    {/* IMAGE */}

                    <div className={styles.imageBox}>

                      <img
                        src={item.product.image}
                        alt={item.product.title}
                      />

                    </div>


                    {/* DETAILS */}

                    <div className={styles.itemDetails}>

                      <span className={styles.category}>
                        {item.product.category.toUpperCase()}
                      </span>

                      <h2>
                        {item.product.title}
                      </h2>

                      <div className={styles.specs}>

                        <span>
                          {item.product.kva}
                        </span>

                        <span>
                          {item.product.voltage}
                        </span>

                      </div>


                      {/* CLAMP */}

                      {item.addClamp &&
                        item.product.clamp && (

                          <div className={styles.clamp}>
                            🔩{" "}
                            {item.product.clamp.name}
                          </div>

                        )}

                    </div>


                    {/* QUANTITY */}

                    <div className={styles.quantityBox}>

                      <span>
                        QUANTITY
                      </span>

                      <div className={styles.quantity}>

                        <button
  type="button"
  onClick={() =>
    updateQuantity(
      item.product.id,
      item.quantity - 1
    )
  }
>
  −
</button>

                        <strong>
                          {item.quantity}
                        </strong>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1
                            )
                          }
                        >
                          +
                        </button>

                      </div>

                    </div>


                    {/* PRICE */}

                    <div className={styles.itemPrice}>

                      {itemTotal > 0 ? (

                        <strong>
                          ₹
                          {itemTotal.toLocaleString(
                            "en-IN"
                          )}
                        </strong>

                      ) : (

                        <strong>
                          CONTACT
                        </strong>

                      )}

                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(
                            item.product.id
                          )
                        }
                      >
                        REMOVE
                      </button>

                    </div>

                  </div>

                );

              })}

            </div>


            {/* ================= SUMMARY ================= */}

            <aside className={styles.summary}>

              <span className={styles.summaryTag}>
                ORDER SUMMARY
              </span>

              <h2>
                CHECKOUT
              </h2>


              <div className={styles.summaryLine}>

                <span>
                  PRODUCTS
                </span>

                <strong>
                  {items.reduce(
                    (sum, item) =>
                      sum + item.quantity,
                    0
                  )}
                </strong>

              </div>


              <div className={styles.summaryLine}>

                <span>
                  ACCESSORIES
                </span>

                <strong>
                  {items.filter(
                    (item) =>
                      item.addClamp
                  ).length}
                </strong>

              </div>


              <div className={styles.divider} />


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
                    CONTACT
                  </strong>

                )}

              </div>


              <button
                type="button"
                className={styles.checkoutButton}
                onClick={() =>
                  alert(
                    "Checkout will be connected next."
                  )
                }
              >
                PROCEED TO CHECKOUT →
              </button>


              <Link
                href="/#catalog"
                className={styles.continue}
              >
                ← CONTINUE SHOPPING
              </Link>

            </aside>

          </div>

        )}

      </section>


      {/* ================= FOOTER ================= */}

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