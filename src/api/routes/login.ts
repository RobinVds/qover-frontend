import { Auth, AuthResponse } from "../../types/auth";
import { api } from "../index";

export const login = async (input: Auth): Promise<AuthResponse> => {
  return (await api.post("/auth/login", { ...input })).data;
};