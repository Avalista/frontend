import { LoginCredentials, LoginSuccessResponse, ApiErrorResponse } from '../types/auth.types';
import { mockLoginSuccess, mockLoginError } from '../mocks/auth.mocks';

export const loginUser = async (credentials: LoginCredentials): Promise<LoginSuccessResponse> => {

  console.log('SIMULANDO CHAMADA DE API com:', credentials);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.email === 'sucesso@email.com' && credentials.password === '123456') {
        resolve(mockLoginSuccess);
      } else {
        reject({ response: { data: mockLoginError } });
      }
    }, 1000);
  });
};

import { RegisterCredentials } from '../types/auth.types';

export const registerUser = async (credentials: RegisterCredentials): Promise<{ message: string }> => {
  console.log('SIMULANDO CADASTRO DE USUÁRIO com:', credentials);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.email === 'usado@email.com') {
        console.log('Simulando erro de email já em uso');
        const error = {
          response: {
            data: {
              statusCode: 409,
              message: ['E-mail já em uso'],
              error: 'Conflict',
            },
          },
        };
        reject(error);
      } else {
        console.log('Simulando cadastro com SUCESSO');
        resolve({ message: 'Usuário cadastrado com sucesso!' });
      }
    }, 1000);
  });
};

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string; 
  badges: {
    id: string;
    name: string;
    imageUrl: string; 
  }[];
}