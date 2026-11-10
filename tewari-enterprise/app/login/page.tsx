"use client";

import Link from "next/link";
import styles from "../auth.module.css";

export default function LoginPage() {
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
          <span>WELCOME BACK</span>
          <div />
        </div>

        <h1>
          LOGIN<span>.</span>
        </h1>

        <p className={styles.subtitle}>
          Sign in to access your Tewari Enterprise account.
        </p>

        <form className={styles.form}>

        
          <label>
            EMAIL ADDRESS

            <input
              type="email"
              placeholder="you@example.com"
              required
            />
          </label>

      
          <label>
            PASSWORD

            <input
              type="password"
              placeholder="Enter your password"
              required
            />
          </label>

          
          <div className={styles.formOptions}>

            <label className={styles.remember}>
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <button
              type="button"
              className={styles.forgot}
            >
              Forgot password?
            </button>

          </div>

          
          <button
            type="submit"
            className={styles.submitButton}
          >
            LOGIN →
          </button>

        </form>

      
        <div className={styles.divider}>
          <span />
          OR
          <span />
        </div>

     
        <p className={styles.switchText}>
          Don&apos;t have an account?{" "}

          <Link href="/signup">
            CREATE ACCOUNT
          </Link>
        </p>

      </div>

    
      <p className={styles.footerText}>
        POWER • PROTECTION • PERFORMANCE
      </p>

    </main>
  );
}