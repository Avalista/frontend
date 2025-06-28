import { LoginSuccessResponse, ApiErrorResponse } from '../types/auth.types';

export const mockLoginSuccess: LoginSuccessResponse = {
  token: 'este-e-um-token-jwt-falso-gerado-localmente-12345',
};

export const mockLoginError: ApiErrorResponse = {
  statusCode: 401,
  message: ['Email ou senha inválidos. Por favor, tente novamente.'],
  error: 'Unauthorized',
};