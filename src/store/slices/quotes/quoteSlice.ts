import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuoteData } from '../../../types/quote';
import { requestQuote } from './actions';

type RequestErrorMessage = {
    purchasePrice?: string[];
    ageOfDriver?: string[];
    carType?: string[];
    global?: string;
};

type InitialState = {
    universe?: QuoteData;
    global?: QuoteData;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error?: RequestErrorMessage;
};

const initialState: InitialState = {
    loading: 'idle'
};

export const quoteSlice = createSlice({
    name: 'quote',
    initialState: initialState,
    reducers: {
        setRequestQuoteError: (state, action: PayloadAction<RequestErrorMessage>) => {
            console.log('in action', action);
            state.error = action.payload;
            state.loading = 'failed';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(requestQuote.fulfilled, (state, action) => {
            if (action.payload) {
                state.error = undefined;
                state.loading = 'succeeded';
                state.universe = action?.payload?.universe;
                state.global = action?.payload?.global;
            }
        });
    }
});

// Action creators are generated for each case reducer function
export const { setRequestQuoteError } = quoteSlice.actions;

export default quoteSlice.reducer;
