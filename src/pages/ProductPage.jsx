import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Product.css'; // Removed problematic import

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    console.log(product)
    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (!product) {
      console.error("Product is null in handleAddToCart");
      alert("Product is not available. Please try again.");
      return;
    }
    console.log("Product object:", product);  // Add this line
    console.log("Product ID:", product._id);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found. User not authenticated.');
      }

      const res = await fetch('http://localhost:5000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ // Corrected body
          productId: product._id,  // Use optional chaining
        }),
      });
      console.log(product._id)

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to add product to cart');
      }
      const responseData = await res.json();
      console.log('Product added to cart:', responseData);
      alert('Product added to cart successfully!');

    } catch (err) {
      console.error('Error adding product to cart:', err);
      alert('Failed to add product to cart. Please try again.');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-container">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
