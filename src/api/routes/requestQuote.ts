import { RequestQuote, Quote } from '../../types/quote';
import { api } from '../index';

export const requestQuote = async (input: RequestQuote): Promise<Quote> => {
    return (await api.post('/quote/request-quote', { ...input })).data;
};
