import { useState } from 'react';
import api from '../api';
import { Auth, AuthResponse } from '../types/auth';
import { RequestHook } from './types';

export const useLogin: RequestHook<Auth, AuthResponse, any> = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<any>([]);

    const request = async (request: Auth) => {
        try {
            setLoading(true);
            const response = await api.login(request);
            localStorage.setItem('jwt', response.access_token);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setErrors([error]);
        }
    };

    return { loading, errors, request };
};
