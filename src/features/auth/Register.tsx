import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../../api/authApi';
import { isAxiosError } from 'axios';
import { ApiErrorResponse } from '../../types/auth.types';

import logo from '../../assets/logo-horizontal-laranja.svg';
import './Register.css'; 

function Register() {
  const navigate = useNavigate(); // hook para navegação

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState<any>({});

  const validateForm = () => {
    const newErrors: any = {};
    
    if (!name) newErrors.name = 'O nome é obrigatório.';
    if (!email) newErrors.email = 'O e-mail é obrigatório.';
    if (!password) newErrors.password = 'A senha é obrigatória.';
    
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'O formato do e-mail é inválido.';
    }
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (password && !passwordRegex.test(password)) {
      newErrors.password = 'A senha deve ter 8+ caracteres, com maiúscula, minúscula e número.';
    }
    
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors({});

    if (!validateForm()) {
      console.log("Erros de validação do formulário.");
      return; 
    }

    try {
      const result = await registerUser({ name, email, password });
      alert('Cadastro realizado com sucesso! Você será redirecionado para o login.');
      navigate('/login'); 
    } catch (err) {
      if (isAxiosError<ApiErrorResponse>(err) && err.response) {

        setErrors({ api: err.response.data.message[0] });
      } else {
        setErrors({ api: 'Ocorreu um erro inesperado. Tente novamente.' });
      }
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <img src={logo} alt="Logo da Avalista" className="register-logo" />
        <h1 className="register-title">Crie sua conta</h1>
        <p className="register-greeting">Comece a avaliar seus projetos hoje mesmo.</p>

        <form onSubmit={handleSubmit} className="register-form" noValidate>
          {errors.api && <p className="error-message">{errors.api}</p>}

          <div className="form-group">
            <label htmlFor="name">Nome completo</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            {errors.name && <p className="field-error-message">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Seu e-mail</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            {errors.email && <p className="field-error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Crie uma senha</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {errors.password && <p className="field-error-message">{errors.password}</p>}
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirme sua senha</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            {errors.confirmPassword && <p className="field-error-message">{errors.confirmPassword}</p>}
          </div>
          
          <button type="submit" className="register-button">Criar conta</button>

           <p className="navigation-link-text">
                Já tem uma conta? <Link to="/login" className="navigation-link">Faça login</Link>
            </p>
        </form>
      </div>
    </div>
  );
}

export default Register;