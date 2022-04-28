import * as React from 'react';

type PerkProps = {
    className?: string;
    message: string;
    amount: number;
    unit: string;
    extra?: string;
    duration?: boolean;
};

const Perk: React.FC<PerkProps> = ({ message, duration, amount, unit, extra, className }) => {
    const formattedAmount = amount.toLocaleString();
    return (
        <div className={`flex flex-col justify-center items-center py-4 ${className}`}>
            <div className={`flex justify-center  text-sm `}>
                <div className={`mr-1 font-semibold`}>{message} </div> {duration ? 'up to' : 'of'}
                <div className={`ml-1 font-semibold`}>
                    {formattedAmount} {unit}
                </div>
            </div>
            <div className="tex-xs">{extra}</div>
        </div>
    );
};

export default Perk;
