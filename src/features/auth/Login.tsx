import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../../api/authApi';
import { isAxiosError } from 'axios';
import { ApiErrorResponse } from '../../types/auth.types';
import { jwtDecode } from 'jwt-decode';
import logo from '../../assets/logo-horizontal-laranja.svg';
import './Login.css';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    try {
      const responseData = await loginUser({ email, password });
      
      const token = responseData.access_token;
      const decodedToken: { sub: string } = jwtDecode(token);
      const userId = decodedToken.sub;

      localStorage.setItem('authToken', token);
      localStorage.setItem('userId', userId);
      
      navigate('/dashboard');
    } catch (err) {
      if (isAxiosError<ApiErrorResponse>(err) && err.response) {
        const errorMessage = Array.isArray(err.response.data.message)
          ? err.response.data.message.join(', ')
          : err.response.data.message;
        setError(errorMessage);
      } else {
        setError('Não foi possível fazer o login.');
      }
    }
  };

  return (
    <div className="login-page">
      <div className="card login-container-layout">
        <img src={logo} alt="Logo da Avalista" className="login-logo" />
        <h1 className="login-title">Bem vindo de volta, ao Avalista!</h1>
        <p className="login-greeting">Insira seus dados para continuar.</p>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <p className="error-message-global">{error}</p>}
          <div className="form-group">
            <label htmlFor="email" className="form-label">Seu e-mail</label>
            <input
              type="email"
              id="email"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Sua senha</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Entrar
          </button>
          <p className="navigation-link-text">
            Não tem uma conta? <Link to="/register" className="navigation-link">Cadastre-se</Link>
          </p>
        </form>
      </div>
    </div>
  );
}