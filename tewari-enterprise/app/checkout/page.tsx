"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../cart/CartContext";
import styles from "./checkout.module.css";

export default function CheckoutPage() {
  const { items, total } = useCart();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "Pay after order confirmation",
  });

  const [submitted, setSubmitted] = useState(false);

  const allPricesAvailable = items.every(
    (item) =>
      item.product.price > 0 &&
      (!item.addClamp ||
        !item.product.clamp ||
        item.product.clamp.price > 0)
  );

  const productCount = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const formatPrice = (price: number) =>
    `₹${price.toLocaleString("en-IN")}`;

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (items.length === 0) {
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

          <Link href="/cart" className={styles.backLink}>
            BACK TO CART
          </Link>
        </nav>

        <section className={styles.empty}>
          <div>🛒</div>
          <h1>YOUR CART IS EMPTY</h1>
          <p>Add some products before proceeding to checkout.</p>
          <Link href="/#catalog" className={styles.primaryButton}>
            EXPLORE CATALOG →
          </Link>
        </section>
      </main>
    );
  }

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

        <Link href="/cart" className={styles.backLink}>
          ← BACK TO CART
        </Link>
      </nav>

      <section className={styles.checkoutPage}>
        <div className={styles.heading}>
          <span>04 / CHECKOUT</span>
          <h1>
            COMPLETE
            <br />
            <strong>YOUR ORDER.</strong>
          </h1>
          <p>
            Enter your details and review your selected electrical
            products.
          </p>
        </div>

        {submitted && (
          <div className={styles.notice}>
            <strong>DETAILS VALIDATED</strong>
            <p>
              Your checkout details are ready. Actual order submission
              will be enabled when the backend and order system are
              connected.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.checkoutLayout}>
          <div className={styles.formSection}>
            <section className={styles.formCard}>
              <div className={styles.sectionHeading}>
                <span>01</span>
                <div>
                  <h2>CUSTOMER DETAILS</h2>
                  <p>Tell us how to contact you.</p>
                </div>
              </div>

              <div className={styles.inputGrid}>
                <label className={styles.fullWidth}>
                  FULL NAME
                  <input
                    type="text"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </label>

                <label>
                  PHONE NUMBER
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                  />
                </label>

                <label>
                  EMAIL ADDRESS
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                </label>
              </div>
            </section>

            <section className={styles.formCard}>
              <div className={styles.sectionHeading}>
                <span>02</span>
                <div>
                  <h2>DELIVERY ADDRESS</h2>
                  <p>Where should we deliver your order?</p>
                </div>
              </div>

              <div className={styles.inputGrid}>
                <label className={styles.fullWidth}>
                  COMPLETE ADDRESS
                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="House number, street, area and landmark"
                    rows={4}
                    required
                  />
                </label>

                <label>
                  CITY
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    required
                  />
                </label>

                <label>
                  STATE
                  <input
                    type="text"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    placeholder="Enter state"
                    required
                  />
                </label>

                <label>
                  PIN CODE
                  <input
                    type="text"
                    name="pincode"
                    value={form.pincode}
                    onChange={handleChange}
                    placeholder="6-digit PIN code"
                    pattern="[0-9]{6}"
                    maxLength={6}
                    required
                  />
                </label>
              </div>
            </section>

            <section className={styles.formCard}>
              <div className={styles.sectionHeading}>
                <span>03</span>
                <div>
                  <h2>PAYMENT PREFERENCE</h2>
                  <p>Choose how you would like to pay.</p>
                </div>
              </div>

              <label className={styles.fullWidth}>
                PAYMENT METHOD
                <select
                  name="paymentMethod"
                  value={form.paymentMethod}
                  onChange={handleChange}
                >
                  <option value="Pay after order confirmation">
                    Pay after order confirmation
                  </option>
                  <option value="Cash on Delivery">
                    Cash on Delivery
                  </option>
                  <option value="Contact me for payment">
                    Contact me for payment
                  </option>
                </select>
              </label>

              <p className={styles.paymentNote}>
                Payment arrangements will be confirmed by the store
                before your order is processed.
              </p>
            </section>
          </div>

          <aside className={styles.summary}>
            <span className={styles.summaryTag}>ORDER SUMMARY</span>
            <h2>YOUR ITEMS</h2>

            <div className={styles.productList}>
              {items.map((item) => {
                const itemTotal =
                  (item.product.price +
                    (item.addClamp && item.product.clamp
                      ? item.product.clamp.price
                      : 0)) *
                  item.quantity;

                return (
                  <div
                    className={styles.product}
                    key={`${item.product.id}-${item.addClamp}`}
                  >
                    <div className={styles.productImage}>
                      <Image
                        src={item.product.image}
                        alt={item.product.title}
                        width={100}
                        height={100}
                        unoptimized
                      />
                    </div>

                    <div className={styles.productDetails}>
                      <h3>{item.product.title}</h3>
                      <span>QTY: {item.quantity}</span>

                      {item.addClamp && item.product.clamp && (
                        <small>{item.product.clamp.name}</small>
                      )}

                      <strong>
                        {itemTotal > 0
                          ? formatPrice(itemTotal)
                          : "PRICE ON REQUEST"}
                      </strong>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.summaryLine}>
              <span>TOTAL PRODUCTS</span>
              <strong>{productCount}</strong>
            </div>

            <div className={styles.summaryLine}>
              <span>DELIVERY</span>
              <strong>TO BE CONFIRMED</strong>
            </div>

            <div className={styles.summaryDivider} />

            <div className={styles.grandTotal}>
              <span>ESTIMATED TOTAL</span>
              <strong>
                {allPricesAvailable
                  ? formatPrice(total)
                  : "PRICE ON REQUEST"}
              </strong>
            </div>

            <button
              type="submit"
              className={styles.placeOrderButton}
            >
              SUBMIT ORDER REQUEST →
            </button>

            <p className={styles.disclaimer}>
              Submitting this form currently validates your details
              only. Your order will not be sent or saved until the
              backend is connected.
            </p>

            <Link href="/cart" className={styles.continue}>
              ← RETURN TO CART
            </Link>
          </aside>
        </form>
      </section>

      <footer className={styles.footer}>
        <strong>⚡ TEWARI ENTERPRISE</strong>
        <span>POWER • PROTECTION • PERFORMANCE</span>
        <small>© 2026 Tewari Enterprise</small>
      </footer>
    </main>
  );
}