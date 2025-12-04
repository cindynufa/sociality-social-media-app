import { ENDPOINTS } from "../../config/api";
import { api } from "../axios";
import type { LoginRequest, LoginResponse } from "./LoginTypes";

export const loginRequest = async (data: LoginRequest) => {
    const loginResponse = await api.post<LoginResponse>(ENDPOINTS.auth.login, data);
    return loginResponse.data
}