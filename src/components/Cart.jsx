import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Cart.css';

const API_BASE_URL = 'http://localhost:5000';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const fetchCart = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/api/cart`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        let errorMessage = 'Failed to fetch cart';
        try {
          const errorData = await response.json();
          if (errorData?.message) errorMessage = errorData.message;
        } catch {}
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setCart(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleRemove = async (productId) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${API_BASE_URL}/api/cart/${productId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || 'Failed to remove item.');
      }

      // Refetch cart after deletion
      fetchCart();
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  const handleCheckout = async () => {
    if (!cart || !cart.cartItems || cart.cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
  
    const token = localStorage.getItem('token');
  
    const orderItems = cart.cartItems.map(item => ({
      name: item.product.name,
      qty: item.quantity ?? 1,
      image: item.product.image,
      price: item.product.price,
      product: item.product._id,
    }));
  
    const itemsPrice = orderItems.reduce((acc, item) => acc + item.qty * item.price, 0);
    const totalPrice = itemsPrice;
  
    try {
      const response = await fetch(`${API_BASE_URL}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          orderItems,
          paymentMethod: 'Cash on Delivery',
          itemsPrice,
          totalPrice,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || 'Failed to create order');
      }
  
      const orderData = await response.json();
      navigate(`/order/${orderData._id}`);
    } catch (error) {
      setError(error.message);
      alert(`Checkout Error: ${error.message}`);
    }
  };
  

  if (loading) {
    return <div className="cart-page">Loading cart...</div>;
  }

  if (error) {
    return <div className="cart-page error">Error: {error}</div>;
  }

  if (!cart || !Array.isArray(cart.cartItems) || cart.cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-box">
          <h2>Your Cart is Empty</h2>
          <p><Link to="/">Continue Shopping</Link></p>
        </div>
      </div>
    );
  }

  const totalPrice = cart.cartItems.reduce((acc, item) => {
    if (!item || !item.product) return acc;
    const price = parseFloat(item.product.price.toString().replace(/[^0-9.]/g, '')) || 0;
    const quantity = item.quantity ?? 1;
    return acc + price * quantity;
  }, 0);

  return (
    <div className="cart-page">
      <div className="cart-box">
        <h2>Your Cart</h2>
        {cart.cartItems.map((item) => {
          if (!item || !item.product) return null;
          const quantity = item.quantity ?? 1;
          return (
            <div key={item.product._id} className="cart-item">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3>{item.product.name}</h3>
                <p>Price: ${item.product.price}</p>
                <p>Quantity: {quantity}</p>
              </div>
              <button
                className="remove-button"
                onClick={() => handleRemove(item.product._id)}
              >
                Remove
              </button>
            </div>
          );
        })}
        <div className="cart-total">
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
        <div className="order-button-container">
          <button onClick={handleCheckout} className="order-button">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
