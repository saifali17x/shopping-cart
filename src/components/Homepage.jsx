import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Homepage = () => {
  return (
    <div className="mb-20">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content fade-in-up">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "var(--chocolate)",
            }}
          >
            Welcome to <span style={{ color: "var(--coral)" }}>ShopSmart</span>
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "var(--coral)",
              marginBottom: "1.5rem",
            }}
          >
            Your one-stop shop for quality products
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              marginBottom: "2rem",
              color: "var(--gray-medium)",
              maxWidth: "550px",
              lineHeight: "1.7",
            }}
          >
            Browse our extensive collection of products and enjoy a seamless
            shopping experience. From electronics to clothing, we have
            everything you need.
          </p>
          <Link to="/shop">
            <Button
              size="large"
              className="rounded-full tracking-wide btn-primary"
            >
              Shop Now
              <span className="material-symbols-outlined">arrow_forward</span>
            </Button>
          </Link>
        </div>

        <div className="hero-image fade-in-up">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop"
            alt="Shopping Experience"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/550x350/E6FFFA/FF6B6B?text=Shopping+Experience";
            }}
          />
        </div>
      </div>

      {/* Features Section */}
      <div style={{ padding: "4rem 0", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            marginBottom: "3rem",
            color: "var(--chocolate)",
            position: "relative",
            display: "inline-block",
            paddingBottom: "1rem",
          }}
        >
          Why Choose Us?
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background:
                "linear-gradient(to right, var(--coral), var(--sunny))",
              borderRadius: "2px",
            }}
          ></div>
        </h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <span className="material-symbols-outlined">local_shipping</span>
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "var(--chocolate)",
              }}
            >
              Fast Delivery
            </h3>
            <p style={{ color: "var(--gray-medium)" }}>
              Get your products delivered to your doorstep in no time.
            </p>
          </div>

          <div className="feature-card">
            <div
              className="feature-icon"
              style={{ backgroundColor: "rgba(107, 203, 119, 0.1)" }}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: "var(--leafy)" }}
              >
                security
              </span>
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "var(--chocolate)",
              }}
            >
              Secure Payments
            </h3>
            <p style={{ color: "var(--gray-medium)" }}>
              Your payment information is always safe with us.
            </p>
          </div>

          <div className="feature-card">
            <div
              className="feature-icon"
              style={{ backgroundColor: "rgba(77, 150, 255, 0.1)" }}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: "var(--sky)" }}
              >
                support_agent
              </span>
            </div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "var(--chocolate)",
              }}
            >
              24/7 Support
            </h3>
            <p style={{ color: "var(--gray-medium)" }}>
              Our customer support team is always ready to help you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
