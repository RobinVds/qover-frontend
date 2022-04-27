import { useState } from 'react';
import api from '../api';
import { Auth, AuthResponse } from '../types/auth';
import { RequestHook } from './types';
import { useAuth } from './useAuth';

export const useLogin: RequestHook<Auth, AuthResponse> = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<any>([]);
    const [response, setResponse] = useState<AuthResponse>();

    const request = async (request: Auth) => {
        try {
            setLoading(true);
            const response = await api.login(request);
            console.log('Response', response);
            localStorage.setItem('jwt', response.access_token);
            setResponse(response);
        } catch (error) {
            console.log('Error', error);
            setErrors([error]);
        }
    };

    return { loading, errors, response, request };
};
