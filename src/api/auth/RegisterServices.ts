import { ENDPOINTS } from "../../config/api";
import { api } from "../axios";
import type { RegisterResponse, RegisterRequest } from "./RegisterTypes";

export const registerRequest = async (data: RegisterRequest) => {
    const registerResponse = await api.post<RegisterResponse>(ENDPOINTS.auth.register, data);
    return registerResponse;
};