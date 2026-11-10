"use client";

import Link from "next/link";
import styles from "../auth.module.css";

export default function SignupPage() {
  return (
    <main className={styles.authPage}>

   
      <div className={styles.backgroundGlow} />
      <div className={styles.grid} />

     
      <Link href="/" className={styles.logo}>
        <span className={styles.logoSymbol}>⚡</span>

        <div>
          <strong>TEWARI</strong>
          <small>ENTERPRISE</small>
        </div>
      </Link>

   
      <div className={styles.authCard}>

        <div className={styles.cardTop}>
          <span>JOIN TEWARI ENTERPRISE</span>
          <div />
        </div>

        <h1>
          SIGN UP<span>.</span>
        </h1>

        <p className={styles.subtitle}>
          Create your account and start exploring our products.
        </p>

        <form className={styles.form}>

       
          <label>
            FULL NAME

            <input
              type="text"
              placeholder="Your full name"
              required
            />
          </label>

       
          <label>
            EMAIL ADDRESS

            <input
              type="email"
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            PHONE NUMBER

            <input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              required
            />
          </label>

       
          <label>
            PASSWORD

            <input
              type="password"
              placeholder="Create a password"
              required
            />
          </label>

         
          <label>
            CONFIRM PASSWORD

            <input
              type="password"
              placeholder="Confirm your password"
              required
            />
          </label>

        
          <label className={styles.terms}>

            <input
              type="checkbox"
              required
            />

            <span>
              I agree to the terms and conditions.
            </span>

          </label>

      
          <button
            type="submit"
            className={styles.submitButton}
          >
            CREATE ACCOUNT →
          </button>

        </form>

     
        <div className={styles.divider}>
          <span />
          OR
          <span />
        </div>

    
        <p className={styles.switchText}>
          Already have an account?{" "}

          <Link href="/login">
            LOGIN
          </Link>
        </p>

      </div>

      <p className={styles.footerText}>
        POWER • PROTECTION • PERFORMANCE
      </p>

    </main>
  );
}