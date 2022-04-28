import * as React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { QuoteData } from '../../../types/quote';
import Perk from './Perk';

type ModalProps = {
    title: string;
    quote: QuoteData;
    yearly?: boolean;
    selected?: boolean;
    onSelect?: () => void;
    className?: string;
};

const Modal: React.FC<ModalProps> = ({ quote, title, selected, yearly, onSelect, className }) => {
    const bg = selected ? 'bg-teal-400' : 'bg-white';
    const text = selected ? 'text-white' : 'text-black text-sm';
    const titleTextStyle = selected ? 'text-white' : 'text-teal-400';
    const titleBg = selected ? 'bg-teal-400 bg-opacity-10' : 'bg-white bg-opacity-10';
    const button = selected ? 'bg-white text-teal-400' : 'bg-teal-400 text-white';
    const border = 'border-b-2 border-blueGray-500 border-opacity-10';

    const buttonText = selected ? 'Plan selected' : 'Choose this plan';
    const amount = (yearly ? quote.priceYearly : quote.priceMonthly).toLocaleString('nl-be', { maximumFractionDigits: 2 });

    return (
        <div className={`px-6 rounded shadow ${bg} ${text} ${className}`}>
            <div className={`w-full flex justify-center items-center py-4 text-xl font-bold ${border}`}>{title}</div>
            <div className={`flex flex-col items-center justify-center py-4 ${titleTextStyle} ${titleBg} ${border}`}>
                <div className={`text-4xl`}>
                    <b>{amount}</b> <sup>€</sup>
                </div>
                <div className={`text-sm`}>{yearly ? 'YEARLY' : 'MONTHLY'} INCL. TAXES</div>
            </div>
            <Perk message="Maximum duration travel" amount={quote.maxDurationOfTravel} unit="days" duration className={border} />
            <Perk message="Medical expenses reimbursement " amount={quote.medicalExpensesReimbursements} unit="€" className={border} />
            <Perk message="Personal assistance abroad " amount={quote.personalAssistanceAbroad} unit="€" className={border} />
            <Perk message="Travel assistance abroad" amount={quote.travelAssistanceAbroad} extra="per insured per travel" unit="€" className={border} />
            <Perk message="Coverage duration" amount={quote.coverageDuration} unit="year" duration className={border} />

            <div className={`flex justify-center py-8 px-4 text-lg font-normal`}>
                <button onClick={onSelect} className={`flex items-center justify-center w-full px-2 text-xl py-3 rounded ${button}`}>
                    {selected && <FaCheckCircle className="mr-4" />}
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default Modal;
