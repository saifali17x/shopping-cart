import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to ShopSmart</h1>
          <p className="tagline">Your one-stop shop for quality products</p>
          <p className="description">
            Browse our extensive collection of products and enjoy a seamless
            shopping experience. From electronics to clothing, we have
            everything you need.
          </p>
          <Link to="/shop">
            <Button className="shop-now-btn">
              Shop Now
              <span className="material-symbols-outlined">arrow_forward</span>
            </Button>
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800"
            alt="Shopping"
          />
        </div>
      </div>

      <div className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature">
            <span className="material-symbols-outlined">local_shipping</span>
            <h3>Fast Delivery</h3>
            <p>Get your products delivered to your doorstep in no time.</p>
          </div>
          <div className="feature">
            <span className="material-symbols-outlined">security</span>
            <h3>Secure Payments</h3>
            <p>Your payment information is always safe with us.</p>
          </div>
          <div className="feature">
            <span className="material-symbols-outlined">support_agent</span>
            <h3>24/7 Support</h3>
            <p>Our customer support team is always ready to help you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
