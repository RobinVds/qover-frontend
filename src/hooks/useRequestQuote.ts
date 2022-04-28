import { AxiosError } from 'axios';
import { useState } from 'react';
import api from '../api';
import { useAppDispatch } from '../store/hooks';
import { setQuotes } from '../store/slices/quotes/quoteSlice';
import { RequestQuote, Quote } from '../types/quote';
import { RequestHook } from './types';

type RequestErrorMessage = {
    purchasePrice?: string[];
    ageOfDriver?: string[];
    carType?: string[];
    global?: string;
};
interface RequestError {
    message: RequestErrorMessage;
}

export const useRequestQuote: RequestHook<RequestQuote, Quote, RequestErrorMessage> = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<RequestErrorMessage>();
    const [response, setResponse] = useState<Quote>();

    const dispatch = useAppDispatch();

    const request = async (request: RequestQuote) => {
        try {
            setLoading(true);
            setErrors(undefined);

            const response = await api.requestQuote(request);

            dispatch(setQuotes(response));
            setResponse(response);
        } catch (error) {
            console.log('Error: ', error);
            const typedError = error as AxiosError;
            const data = typedError.response?.data as RequestError;
            if (data) {
                setErrors(data.message);
            }
            setErrors({ global: typedError.message });

            setLoading(false);
        }
    };

    return { loading, errors, response, request };
};
