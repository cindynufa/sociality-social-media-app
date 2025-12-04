export interface RegisterRequest {
  name: string;
  username: string;
  email: string;
  phone?: string;
  password: string;
}

export interface RegisterUser {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  avatar: string;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    user: RegisterUser;
  };
}
