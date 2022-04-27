import { useState } from 'react';
import api from '../api';
import { RequestQuote, RequestQuoteResponse } from '../types/quote';
import { RequestHook } from './types';

export const useRequestQuote: RequestHook<RequestQuote, RequestQuoteResponse> = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [response, setResponse] = useState<RequestQuoteResponse>();

    const request = async (request: RequestQuote) => {
        try {
            setLoading(true);
            const response = await api.requestQuote(request);
            setResponse(response);
        } catch (error) {
            setErrors(errors);
        }
    };

    return { loading, errors, response, request };
};
