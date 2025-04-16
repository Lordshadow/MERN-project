// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Build Your Dream Gaming Rig</h1>
          <p>High-performance components at unbeatable prices.</p>
          <Link to="/products" className="shop-now-btn">Shop Now</Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="images/ryzen7.jpg" alt="Ryzen 7 7700" />
            <h3>AMD Ryzen 7 7700</h3>
            <p>8-core processor with Radeon graphics.</p>
            <Link to="/product/ryzen7" className="view-product-btn">View</Link>
          </div>
          <div className="product-card">
            <img src="images/rtx4070.jpg" alt="RTX 4070 Super" />
            <h3>NVIDIA RTX 4070 Super</h3>
            <p>Next-gen performance for ultimate gaming.</p>
            <Link to="/product/rtx4070" className="view-product-btn">View</Link>
          </div>
          <div className="product-card">
            <img src="images/gskillram.jpg" alt="G.Skill Ripjaws 32GB DDR5" />
            <h3>G.Skill Ripjaws 32GB DDR5</h3>
            <p>Blazing fast memory for multitasking.</p>
            <Link to="/product/gskillram" className="view-product-btn">View</Link>
          </div>
          {/* Add more product cards */}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop By Category</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src="images/cpus.jpg" alt="CPUs" />
            <Link to="/category/cpus"><h3>CPUs</h3></Link>
          </div>
          <div className="category-card">
            <img src="images/gpus.jpg" alt="GPUs" />
            <Link to="/category/gpus"><h3>GPUs</h3></Link>
          </div>
          <div className="category-card">
            <img src="images/ram.jpg" alt="RAM" />
            <Link to="/category/ram"><h3>RAM</h3></Link>
          </div>
          <div className="category-card">
            <img src="images/motherboards.jpg" alt="Motherboards" />
            <Link to="/category/motherboards"><h3>Motherboards</h3></Link>
          </div>
          {/* Add more category cards */}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <div className="why-choose-grid">
          <div className="why-choose-card">
            <i className="fas fa-shipping-fast"></i>
            <h3>Fast Shipping</h3>
            <p>Get your products quickly with our fast shipping options.</p>
          </div>
          <div className="why-choose-card">
            <i className="fas fa-headphones-alt"></i>
            <h3>Expert Support</h3>
            <p>Our knowledgeable team is here to help you with any questions.</p>
          </div>
          <div className="why-choose-card">
            <i className="fas fa-shield-alt"></i>
            <h3>Secure Payments</h3>
            <p>Your payments are safe and secure with our encrypted system.</p>
          </div>
          <div className="why-choose-card">
            <i className="fas fa-undo"></i>
            <h3>Easy Returns</h3>
            <p>Hassle-free returns for your peace of mind.</p>
          </div>
        </div>
      </section>

      {/* Optional: Testimonials Section */}
      {/* <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"Great products and excellent service!"</p>
            <p>- John Doe</p>
          </div>
          Add more testimonials
        </div>
      </section> */}

      {/* Optional: Newsletter Signup Section */}
      {/* <section className="newsletter-signup">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay up-to-date with the latest deals and products.</p>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </section> */}
    </div>
  );
}

export default Home;