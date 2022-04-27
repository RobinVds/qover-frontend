import { AxiosRequestConfig } from "axios";

export const apiConfig = {
    host: process.env.REACT_APP_API_HOST,
    timeout: 60000,
}

/**
 * This method adds the bearer token to the request headers of the axios request.
 */
export const config = async (cfg: AxiosRequestConfig) => {
  try {
    const token = localStorage.getItem("jwt");

    if(!cfg.headers) {
        cfg.headers = {}
    }

    cfg.headers.Authorization = `Bearer ${token}`;

    return cfg;
  } catch (error) {
    // Redirect the user to the login page. Something went wrong with retrieving the token.
    // TODO: log the issue.
    window.location.pathname = "/login"
  }
};