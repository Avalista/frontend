
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginSuccessResponse {
  token: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
}

export interface ApiErrorResponse {
  statusCode: number;
  message: string[];
  error: string;
}
