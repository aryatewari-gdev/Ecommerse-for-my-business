"use client";

import { useParams } from "next/navigation";

const productData: Record<string, any> = {
  stabilizers: {
    title: "STABILIZERS",
    subtitle: "Voltage Protection",
    description:
      "Protect your valuable appliances from voltage fluctuations with reliable stabilizers.",
  },

  inverters: {
    title: "INVERTERS",
    subtitle: "Reliable Power",
    description:
      "Reliable backup power solutions for homes, offices and businesses.",
  },

  ups: {
    title: "UPS",
    subtitle: "Backup Power",
    description:
      "Uninterrupted power solutions for computers, electronics and critical equipment.",
  },

  batteries: {
    title: "BATTERIES",
    subtitle: "Long Lasting Energy",
    description:
      "Powerful batteries designed for dependable backup and long service life.",
  },

  "inverter-trolleys": {
    title: "INVERTER TROLLEYS",
    subtitle: "Complete Power Setup",
    description:
      "Convenient inverter and battery trolley solutions for your home or business.",
  },

  "ac-&-fridge-stands": {
    title: "AC & FRIDGE STANDS",
    subtitle: "Strong. Simple. Reliable.",
    description:
      "Strong and durable stands designed for ACs, refrigerators and other appliances.",
  },
};

export default function CategoryPage() {
  const params = useParams();

  const category = String(params.category).toLowerCase();

  const product = productData[category];

  if (!product) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050510",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>PRODUCT CATEGORY NOT FOUND</h1>
          <a
            href="/"
            style={{
              color: "#00ffff",
              textDecoration: "none",
            }}
          >
            ← Back to Home
          </a>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #17102d 0%, #050510 45%, #020207 100%)",
        color: "white",
        padding: "40px 6%",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* NAVIGATION */}

      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        <a
          href="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          ⚡ TEWARI ENTERPRISE
        </a>

        <a
          href="/"
          style={{
            color: "#00ffff",
            textDecoration: "none",
          }}
        >
          ← HOME
        </a>
      </nav>

      {/* HEADER */}

      <section
        style={{
          maxWidth: "900px",
          marginBottom: "70px",
        }}
      >
        <p
          style={{
            color: "#00ffff",
            letterSpacing: "4px",
            fontSize: "13px",
          }}
        >
          TEWARI ENTERPRISE / CATALOG
        </p>

        <h1
          style={{
            fontSize: "clamp(45px, 8vw, 100px)",
            lineHeight: "0.95",
            margin: "20px 0",
          }}
        >
          {product.title}
        </h1>

        <h2
          style={{
            color: "#ff4fc3",
            fontSize: "24px",
          }}
        >
          {product.subtitle}
        </h2>

        <p
          style={{
            maxWidth: "650px",
            color: "#aaa",
            fontSize: "18px",
            lineHeight: "1.7",
          }}
        >
          {product.description}
        </p>
      </section>

      {/* PRODUCTS */}

      <section>
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "25px",
          }}
        >
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid rgba(0,255,255,0.25)",
                borderRadius: "20px",
                padding: "25px",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              {/* IMAGE PLACEHOLDER */}

              <div
                style={{
                  height: "230px",
                  borderRadius: "15px",
                  background:
                    "linear-gradient(135deg, rgba(0,255,255,0.12), rgba(255,0,150,0.12))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "50px",
                  marginBottom: "25px",
                }}
              >
                ⚡
              </div>

              <p
                style={{
                  color: "#00ffff",
                  fontSize: "12px",
                  letterSpacing: "2px",
                }}
              >
                TEWARI ENTERPRISE
              </p>

              <h3>
                {product.title} MODEL {item}
              </h3>

              <p
                style={{
                  color: "#999",
                  lineHeight: "1.5",
                }}
              >
                Product description and specifications will appear
                here.
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "25px",
                }}
              >
                <strong>₹ PRICE</strong>

                <button
                  style={{
                    background: "#00ffff",
                    border: "none",
                    padding: "12px 18px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}