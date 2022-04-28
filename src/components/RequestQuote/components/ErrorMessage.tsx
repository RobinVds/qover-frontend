import * as React from 'react';

type ErrorBoxProps = {
    message: string;
};

const ErrorBox: React.FC<ErrorBoxProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = (props) => {
    const { className, message, ...allowedProps } = props;
    return (
        <div className={`w-full text-red-700 p-1 rounded ${className}`} {...allowedProps}>
            {message}
        </div>
    );
};

export default ErrorBox;
