// src/pages/Account.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Account.css'; // Create Account.css for styling

function Account() {
  // Check if the user is logged in (you'll need to implement this logic)
  const isLoggedIn = localStorage.getItem('token'); // Example: Check for token

  return (
    <div className="account-container">
      <h2>Account</h2>
      {isLoggedIn ? (
        <div>
          <p>Welcome to your account!</p>
          
          <button onClick={() => { localStorage.removeItem('token'); window.location.reload(); }}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in to access your account.</p>
          <Link to="/login">Login</Link>
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      )}
    </div>
  );
}

export default Account;