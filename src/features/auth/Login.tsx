import React, { useState } from 'react';
import { loginUser } from '../../api/authApi'; 
import { isAxiosError } from 'axios';
import { ApiErrorResponse } from '../../types/auth.types';

import logo from '../../assets/logo-horizontal-laranja.svg';
import './Login.css';

function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      const data = await loginUser({ email, password });
      console.log('Login bem-sucedido!', data);

    } catch (err) {
      if (isAxiosError<ApiErrorResponse>(err) && err.response) {
        setError(err.response.data.message[0]);
      } else {
        setError('Não foi possível fazer o login.');
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img src={logo} alt="Logo da Avalista" className="login-logo" />

        <h1 className="login-title">Bem vindo de volta, ao Avalista!</h1>
        <p className="login-greeting">Um texto de saudacao</p>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <p className="error-message">{error}</p>}

          <div className="form-group">
            <label htmlFor="email">Seu e-mail</label>
            <input
              type="email"
              id="email"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Sua senha</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;