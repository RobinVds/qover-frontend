import { useEffect, useState } from 'react';
import api from '../api';

export const useAuth = () => {
    const accessToken = localStorage.getItem('jwt');
    const [isAuthenticated, setIsAuthenticated] = useState(!!accessToken);

    useEffect(() => {
        (async () => {
            try {
                const response = await api.validateJwt();
                setIsAuthenticated(response.data);
            } catch (error) {
                setIsAuthenticated(false);
                localStorage.removeItem('jwt');
            }
        })();
    }, [accessToken]);

    return { isAuthenticated };
};
