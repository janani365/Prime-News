import React, { useState } from 'react';
import './Auth.css';

const SignIn = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your sign-in logic (e.g., API call)
    alert(`Welcome back, ${email}! Signing you in to Insight Stream News.`);
    onClose();
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Insight Stream News - Sign In</h2>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
          autoFocus
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />
        <button type="submit" className="submit-btn">Sign In</button>
        <button type="button" onClick={onClose} className="link-btn">Back</button>
      </form>
    </div>
  );
};

export default SignIn;
