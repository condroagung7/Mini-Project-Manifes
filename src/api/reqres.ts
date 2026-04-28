import {
  UsersListResponse,
  SingleUserResponse,
  RegisterRequest,
  RegisterSuccessResponse,
  LoginRequest,
  LoginSuccessResponse,
} from "../types";

const BASE_URL = "https://reqres.in/api";


async function request<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { "Content-Type": "application/json",
      "x-api-key":"reqres_518884a775c34d7fb616c37af8ef1cde"
     },
    ...options,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Something went wrong");
  }

  return data as T;
}

// AUTH
export const registerUser = (body: RegisterRequest) =>
  request<RegisterSuccessResponse>("/register", {
    method: "POST",
    body: JSON.stringify(body),
  });

export const loginUser = (body: LoginRequest) =>
  request<LoginSuccessResponse>("/login", {
    method: "POST",
    body: JSON.stringify(body),
  });

// USERS
export const getUsers = (page: number = 1) =>
  request<UsersListResponse>(`/users?page=${page}`);

export const getSingleUser = (id: number) =>
  request<SingleUserResponse>(`/users/${id}`);
