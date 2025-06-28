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