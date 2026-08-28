"use client";

import { useEffect, useState } from "react";

const categories = [
  {
    name: "STABILIZERS",
    subtitle: "Voltage Protection",
    icon: "⚡",
    color: "cyan",
  },
  {
    name: "INVERTERS",
    subtitle: "Reliable Power",
    icon: "🔋",
    color: "pink",
  },
  {
    name: "UPS",
    subtitle: "Backup Power",
    icon: "◈",
    color: "purple",
  },
  {
    name: "BATTERIES",
    subtitle: "Long Lasting Energy",
    icon: "🔋",
    color: "blue",
  },
  {
    name: "INVERTER TROLLEYS",
    subtitle: "Complete Power Setup",
    icon: "▣",
    color: "orange",
  },
  {
    name: "AC & FRIDGE STANDS",
    subtitle: "Strong. Simple. Reliable.",
    icon: "◇",
    color: "green",
  },
];

export default function Home() {
  const [entered, setEntered] = useState(false);

  // Always start the homepage at the very top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Entrance animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setEntered(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={`site ${entered ? "entered" : ""}`}>

      {/* ================= INTRO ================= */}

      <section className="intro">
        <div className="stars" />

        <div className="moon" />

        <div className="petals">
          <span>🌸</span>
          <span>🌸</span>
          <span>🌸</span>
          <span>🌸</span>
          <span>🌸</span>
          <span>🌸</span>
          <span>🌸</span>
          <span>🌸</span>
        </div>

        <div className="intro-content">
          <p className="intro-small">WELCOME TO</p>

          <h1>TEWARI</h1>

          <h2>ENTERPRISE</h2>

          <div className="intro-line" />

          <p>POWER • PROTECTION • PERFORMANCE</p>
        </div>

        {/* Japanese Gate */}

        <div className="torii">
          <div className="torii-top" />
          <div className="torii-top-glow" />

          <div className="torii-pillar left" />
          <div className="torii-pillar right" />

          <div className="torii-cross" />

          <div className="torii-inner-glow" />
        </div>

        <div className="ground" />

        <div className="enter-text">
          ENTERING TEWARI ENTERPRISE
          <span>SCROLL TO EXPLORE</span>
        </div>
      </section>


      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logo">
          <span className="logo-symbol">⚡</span>

          <div>
            <strong>TEWARI</strong>
            <small>ENTERPRISE</small>
          </div>
        </div>


        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#catalog">Catalog</a>
          <a href="#wholesale">Wholesale</a>
          <a href="#contact">Contact</a>
        </div>


        <div className="nav-actions">
          <button className="login">
            LOGIN
          </button>

          <button className="signup">
            SIGN UP
          </button>

          <button className="cart">
            🛒
          </button>
        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section id="home" className="hero">

        <div className="hero-grid" />

        <div className="hero-text">

          <div className="tag">
            <span />
            POWER SOLUTIONS • EST. 2000
          </div>


          <h1>
            POWER YOUR
            <br />
            <span>WORLD.</span>
          </h1>


          <p>
            Premium stabilizers, inverters, UPS systems and batteries
            for homes, businesses and industries.
          </p>


          <div className="hero-buttons">

            <a
              href="#catalog"
              className="primary-btn"
            >
              EXPLORE CATALOG →
            </a>


            <a
              href="#wholesale"
              className="secondary-btn"
            >
              WHOLESALE
            </a>

          </div>

        </div>


        {/* Power Orb */}

        <div className="hero-orb">

          <div className="orb-ring ring1" />
          <div className="orb-ring ring2" />
          <div className="orb-ring ring3" />

          <div className="orb-core">
            ⚡
          </div>

        </div>


        <div className="scroll-indicator">

          <span>SCROLL</span>

          <div />

        </div>

      </section>


      {/* ================= CATALOG ================= */}

      <section
        id="catalog"
        className="catalog"
      >

        <div className="section-heading">

          <div>

            <span className="section-tag">
              01 / CATALOG
            </span>

            <h2>
              CHOOSE YOUR
              <br />
              <span>POWER.</span>
            </h2>

          </div>


          <p>
            Explore our range of trusted power protection
            and backup solutions.
          </p>

        </div>


        <div className="category-grid">

          {categories.map((category, index) => (

            <a
              href={`/products/${category.name
                .toLowerCase()
                .replaceAll(" ", "-")}`}
              className={`category-card ${category.color}`}
              key={category.name}
            >

              <div className="card-number">
                0{index + 1}
              </div>


              <div className="category-icon">
                {category.icon}
              </div>


              <div className="category-info">

                <span>
                  {category.subtitle}
                </span>

                <h3>
                  {category.name}
                </h3>

              </div>


              <div className="card-arrow">
                ↗
              </div>


              <div className="card-glow" />

            </a>

          ))}

        </div>

      </section>


      {/* ================= WHOLESALE ================= */}

      <section
        id="wholesale"
        className="wholesale"
      >

        <div className="wholesale-glow" />


        <div className="wholesale-content">

          <span className="section-tag">
            02 / BUSINESS
          </span>


          <h2>
            BUY
            <br />
            <span>WHOLESALE.</span>
          </h2>


          <p>
            Looking for bulk quantities?
            Get special wholesale pricing for retailers,
            dealers, contractors and businesses.
          </p>


          <button className="primary-btn">
            REQUEST WHOLESALE PRICE →
          </button>

        </div>


        <div className="wholesale-box">

          <div className="box-line" />

          <span>
            WHOLESALE
          </span>

          <strong>
            PRICING
          </strong>

          <small>
            FOR BUSINESS
          </small>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="features">

        <div className="feature">

          <span>01</span>

          <h3>
            GENUINE PRODUCTS
          </h3>

          <p>
            Quality products from trusted brands.
          </p>

        </div>


        <div className="feature">

          <span>02</span>

          <h3>
            RETAIL & WHOLESALE
          </h3>

          <p>
            Competitive pricing for everyone.
          </p>

        </div>


        <div className="feature">

          <span>03</span>

          <h3>
            POWER EXPERTS
          </h3>

          <p>
            Get help choosing the right solution.
          </p>

        </div>


        <div className="feature">

          <span>04</span>

          <h3>
            FAST ORDERING
          </h3>

          <p>
            Find products and place orders easily.
          </p>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer id="contact">

        <div className="footer-logo">
          ⚡ TEWARI ENTERPRISE
        </div>


        <p>
          Powering homes, businesses and everything in between.
        </p>


        <div className="footer-links">

          <a href="#home">
            Home
          </a>

          <a href="#catalog">
            Products
          </a>

          <a href="#wholesale">
            Wholesale
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        <div className="copyright">
          © 2026 Tewari Enterprise. All rights reserved.
        </div>

      </footer>

    </main>
  );
}