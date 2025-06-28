import { loginUser, ApiErrorResponse } from '../../api/authApi'; 
import { isAxiosError } from 'axios';
import React, { useState } from 'react';

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
      localStorage.setItem('authToken', data.token);
      window.location.href = '/dashboard';

    } catch (err) {
      if (isAxiosError<ApiErrorResponse>(err) && err.response) {
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
      {/*formulário */}
    </div>
  );
}

export default Login;