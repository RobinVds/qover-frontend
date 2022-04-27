import { AxiosPromise } from 'axios';
import { api } from '../index';

export const validateJwt = async (): Promise<AxiosPromise> => {
    try {
        return await api.get('/auth/validate-jwt');
    } catch (e) {
        throw e;
    }
};
