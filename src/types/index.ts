export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}

export interface UsersListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
}

export interface SingleUserResponse {
  data: User;
  support: Support;
}

export interface RegisterRequest {
  email: string;
  password: string;
}

export interface RegisterSuccessResponse {
  id: number;
  token: string;
}

export interface RegisterErrorResponse {
  error: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginSuccessResponse {
  token: string;
}

export interface LoginErrorResponse {
  error: string;
}

export interface AuthUser {
  token: string;
  email: string;
}
