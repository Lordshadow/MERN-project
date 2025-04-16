import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/OrderPage.css'; // Ensure this path is correct

const OrderPage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [paying, setPaying] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Using token:', token);

        const { data } = await axios.get(`http://localhost:5000/api/orders/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Fetched order data:', data);
        setOrder(data); // Adjust if data is wrapped (e.g., setOrder(data.order))
      } catch (err) {
        console.error('Error fetching order:', err.response?.data || err.message);
        setError(err.response?.data?.message || 'Failed to load order.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  const handlePay = async () => {
    try {
      setPaying(true);
      const token = localStorage.getItem('token');

      const { data } = await axios.put(`http://localhost:5000/api/orders/${id}/pay`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setOrder(data);
      setMessage('Payment successful. Confirmation email sent!');
    } catch (err) {
      console.error('Payment error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Payment failed.');
    } finally {
      setPaying(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="order-page error">{error}</p>;
  if (!order) return <div className="order-page">Order not found.</div>;

  return (
    <div className="order-page">
      <h1 className="order-page h1">Order ID: {order._id}</h1>

      <h2 className="order-page h2">Items</h2>
      {order.orderItems && order.orderItems.length > 0 ? (
        order.orderItems.map((item, idx) => (
          <div key={idx} className="order-item">
            <p>{item.name} (x{item.qty}) - ₹{item.price}</p>
          </div>
        ))
      ) : (
        <p>No items in this order.</p>
      )}

      <div className="order-summary">
        <p><strong>Total:</strong> ₹{order.totalPrice}</p>
        <p><strong>Payment Method:</strong> {order.paymentMethod || 'N/A'}</p>
        <p><strong>Status:</strong> {order.isPaid ? 'Paid' : 'Not Paid'}</p>
      </div>

      {!order.isPaid && (
        <button
          onClick={handlePay}
          disabled={paying}
          className="order-page button"
        >
          {paying ? 'Processing...' : 'Pay Now'}
        </button>
      )}

      {message && <p className="order-page message">{message}</p>}

      {/* Debug view */}
      <pre className="order-debug">{JSON.stringify(order, null, 2)}</pre>
    </div>
  );
};

export default OrderPage;
