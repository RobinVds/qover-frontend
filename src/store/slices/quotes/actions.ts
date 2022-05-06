import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import api from '../../../api';
import { RequestQuote } from '../../../types/quote';
import { RequestError } from '../../../types/quote';
import { setRequestQuoteError } from './quoteSlice';

const REQUEST_QUOTE = 'quote/request-quote';

export const requestQuote = createAsyncThunk(REQUEST_QUOTE, async (requestQuote: RequestQuote, thunkAPI) => {
    try {
        const response = await api.requestQuote(requestQuote);
        return response;
    } catch (error) {
        const typedError = error as AxiosError;
        const data = typedError.response?.data as RequestError;

        if (data) {
            thunkAPI.dispatch(setRequestQuoteError(data.message));
        } else {
            thunkAPI.dispatch(setRequestQuoteError({ global: typedError.message }));
        }
    }
});
