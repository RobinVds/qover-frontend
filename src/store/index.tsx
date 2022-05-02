import { configureStore } from '@reduxjs/toolkit';
import quoteReducer from './slices/quotes/quoteSlice';

const store = configureStore({
    reducer: {
        quotes: quoteReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
