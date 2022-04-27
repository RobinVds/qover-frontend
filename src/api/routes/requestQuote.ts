import { RequestQuote, RequestQuoteResponse } from "../../types/quote";
import { api } from "../index";

export const requestQuote = async (input: RequestQuote): Promise<RequestQuoteResponse> => {
  return api.post("/auth/login", { ...input });
};