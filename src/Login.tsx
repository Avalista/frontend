import React, { useState } from 'react';
import axios, { isAxiosError } from 'axios';

interface LoginSuccessResponse {
  token: string;
}

interface LoginErrorResponse {
  statusCode: number;
  message: string[];
  error: string;
}

function Login(): JSX.Element {
  
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post<LoginSuccessResponse>('http://localhost:3000/api/auth/login', {
        email: email,
        password: password
      });

      console.log('Login bem-sucedido!', response.data);
      localStorage.setItem('authToken', response.data.token);
      window.location.href = '/dashboard';

    } catch (err) {
      if (isAxiosError<LoginErrorResponse>(err) && err.response) {
        setError(err.response.data.message[0]);
        console.error('Erro no login:', err.response.data);
      } else {
        setError('Não foi possível fazer o login. Tente novamente mais tarde.');
        console.error('Erro inesperado:', err);
      }
    }
  };

  return (
    <div className="login-container">
      {}
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;