export enum CarTypes {
    BMW = "BMW",
    AUDI = "Audi",
    PORSCHE = "Porsche"
}

export type RequestQuote = {
    carType: CarTypes;
    purchasePrice: number;
    ageOfDriver: number;
}

export type Quote = {
    ageOfDriver: number;
    car: CarTypes;
    purchasePrice: number;
    quoteGlobal: number;
    quoteUniversal: number;
    maxDurationOfTravel: number; 
    medicalExpensesReimbursements: number;
    personalAssistanceAbroad: number;
    travelAssistanceAbroad: number;
    coverageDuration: number;
    yearly: boolean;
}

export type RequestQuoteResponse = {
    yearly: Quote,
    monthly: Quote,
}