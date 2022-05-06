export enum CarTypes {
    BMW = 'BMW',
    AUDI = 'Audi',
    PORSCHE = 'Porsche'
}

export type RequestQuote = {
    car: CarTypes;
    purchasePrice: number;
    ageOfDriver: number;
};

export type QuoteData = {
    maxDurationOfTravel: number;
    medicalExpensesReimbursements: number;
    personalAssistanceAbroad: number;
    travelAssistanceAbroad: number;
    coverageDuration: number;
    priceYearly: number;
    priceMonthly: number;
};

export type Quote = {
    universe: QuoteData;
    global: QuoteData;
    ageOfDriver: number;
    car: CarTypes;
    purchasePrice: number;
};

export interface RequestError {
    message: RequestErrorMessage;
}

export type RequestErrorMessage = {
    purchasePrice?: string[];
    ageOfDriver?: string[];
    carType?: string[];
    global?: string;
};
