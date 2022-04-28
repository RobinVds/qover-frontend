import { RootState } from '../..';

export const universeQuoteSelector = (state: RootState) => state.quotes.universe;
export const globalQuoteSelector = (state: RootState) => state.quotes.global;
