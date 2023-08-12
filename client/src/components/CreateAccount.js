import React, { useState } from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }


    console.log('Compte créé avec succès');

    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };
  return (
    <div className="create-account">
      <h2>Créer un compte</h2>
      <form className="create-account-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="create-account-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="create-account-input"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="create-account-input"
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="create-account-button">Create Account</button>
      </form>
      
      <p>Already have an account? <Link to="/login">Login</Link></p>
      
    </div>
  );
}

export default CreateAccount;
