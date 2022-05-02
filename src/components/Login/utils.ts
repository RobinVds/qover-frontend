import { AxiosError } from 'axios';

export const formatErrorMessage = (error: AxiosError) => {
    if (error.response?.status === 401) return 'Password or username incorrect! Please try again.';
    return error.message;
};
