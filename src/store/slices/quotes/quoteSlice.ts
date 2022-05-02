import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Quote, QuoteData } from '../../../types/quote';

type InitialState = {
    universe?: QuoteData;
    global?: QuoteData;
};

const initialState: InitialState = {};

export const quoteSlice = createSlice({
    name: 'quote',
    initialState: initialState,
    reducers: {
        setQuotes: (state, action: PayloadAction<Quote>) => {
            state.universe = action.payload.universe;
            state.global = action.payload.global;
        }
    }
});

// Action creators are generated for each case reducer function
export const { setQuotes } = quoteSlice.actions;

export default quoteSlice.reducer;
