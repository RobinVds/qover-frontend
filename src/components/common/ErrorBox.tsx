import * as React from 'react';

type ErrorBoxProps = {
    message: string;
};

const ErrorBox: React.FC<ErrorBoxProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => {
    const { className, message, ...allowedProps } = props;
    return (
        <div className={`w-full bg-red-100 text-red-700 p-1 rounded text-center ${className}`} {...allowedProps}>
            {message}
        </div>
    );
};

export default ErrorBox;
