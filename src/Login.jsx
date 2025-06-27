import React, { useState } from 'react';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setError(''); 

        try {
 
    // ❗️ Lembre-se de usar a URL da sua API!
            const response = await axios.post('http://localhost:3000/api/auth/login', {
            email: email,
            password: password
            });

            console.log('Login bem-sucedido!', response.data);
            localStorage.setItem('authToken', response.data.token); 
            window.location.href = '/dashboard';

        } catch (err) {
            // Erro! O back-end recusou o login.
            if (err.response && err.response.data && err.response.data.message) {
            setError(err.response.data.message[0]);
            } else {
            setError('Não foi possível fazer o login. Tente novamente mais tarde.');
            }
            console.error('Erro no login:', err.response.data);
        }
    };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;