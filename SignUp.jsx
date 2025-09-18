import React, { useState } from 'react';
import './Auth.css';

const SignUp = ({ onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add real sign-up logic here (API call, validation, etc.)
    alert(`Thank you for signing up, ${fullName}! Welcome to Insight Stream News.`);
    onClose();
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Insight Stream News - Sign Up</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          autoFocus
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="submit-btn">Sign Up</button>
        <button type="button" onClick={onClose} className="link-btn">Back</button>
      </form>
    </div>
  );
};

export default SignUp;
