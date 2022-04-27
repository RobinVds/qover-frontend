import * as React from 'react';

type ButtonProps = {
    secondary?: boolean;
};

const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ secondary, onClick, children, className }) => {
    const primaryColors = 'bg-blue-600 text-white';
    const secondaryColors = 'bg-transparent	border-white border-2';

    const colors = secondary ? secondaryColors : primaryColors;

    return <button className={`flex items-center justify-center p-4 rounded  font-semibold text-white ${colors} ${className}`}>{children}</button>;
};

export default Button;
