import axios from 'axios';
import { config, apiConfig } from './config';

// ROUTES
import { login } from './routes/login';
import { requestQuote } from './routes/requestQuote';
import { validateJwt } from './routes/validateJwt';

// API
const api = axios.create({
    baseURL: apiConfig.host,
    timeout: apiConfig.timeout
});

// INTERCEPTORS - For token config in header
api.interceptors.request.use(config);

export { api };

// ROUTES
export default {
    login,
    requestQuote,
    validateJwt
};
