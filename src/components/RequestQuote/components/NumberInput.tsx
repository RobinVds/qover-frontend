import * as React from 'react';
import ErrorMessage from './ErrorMessage';

type NumberInputProps = {
    errors?: string[];
    extra?: string;
};

const NumberInput: React.FC<NumberInputProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = (props) => {
    const { className, errors, extra, ...validProps } = props;
    const errorStyle = 'text-red-500 border-red-500';
    return (
        <>
            <div className="flex items-center">
                <input
                    className={`appearance-none focus:outline-none text-lg text-grayBrown-500 border-2 p-2 rounded ${errors && errorStyle} ${className}`}
                    type="number"
                    {...validProps}
                />
                <div className="ml-1">{extra}</div>
            </div>

            {errors && <ErrorMessage message={errors.join(', ')} className="mt-2" />}
        </>
    );
};

export default NumberInput;
