import * as React from 'react';

type LoginButtonProps = {
    secondary?: boolean;
    loading?: boolean;
};

const LoginButton: React.FC<LoginButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ secondary, loading, onClick, children, className }) => {
    const primaryColors = 'bg-blue-600 text-white';
    const secondaryColors = 'bg-transparent	border-white border-2';
    const loadingStyle = 'bg-gray-200';
    const colors = secondary ? secondaryColors : primaryColors;

    return (
        <button disabled={loading} className={`flex items-center justify-center p-4 rounded  font-semibold text-white ${loading && loadingStyle} ${colors} ${className}`}>
            {children}
        </button>
    );
};

export default LoginButton;
