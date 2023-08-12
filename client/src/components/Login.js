import React, { useState } from 'react';
import '../styles.css';
import Header from './Header';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (email === 'user@example.com' && password === 'password') {
      
      console.log('Connexion réussie');
      
      setEmail('');
      setPassword('');
      setError('');
    } else {
      setError('Identifiants incorrects');
    }
  };
  return (
    <div className="login">
      <Header/>
      <h2>Se connecter</h2>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">Login</button>
      </form>
      <p>Don't have an account? <Link to="/create-account">Create an account</Link></p>
    </div>
  );
}

export default Login;
