import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SignIn from './SignIn';
import SignUp from './SignUp';

const LandingPage = ({ onComplete }) => {
  const [form, setForm] = useState(null); // null | 'signin' | 'signup'

  const handleComplete = () => {
    setForm(null);  // Reset to welcome screen after completion
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div>
      {!form && (
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          <h1>Welcome to Insight Stream News</h1>
          <p>Please Sign In or Sign Up to continue</p>
          <button onClick={() => setForm('signin')}>Sign In</button>
          <button onClick={() => setForm('signup')}>Sign Up</button>
        </div>
      )}

      {form === 'signin' && <SignIn onClose={handleComplete} />}
      {form === 'signup' && <SignUp onClose={handleComplete} />}
    </div>
  );
};

LandingPage.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default LandingPage;
