import { useRef, useState } from 'react';

type LoginInputProps = {
    label?: string;
    inputClassName?: string;
    containerClassName?: string;
    labelClassName?: string;
};
const LoginInput: React.FC<LoginInputProps & React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const { label, inputClassName, labelClassName, containerClassName, ...inputProps } = props;
    return (
        <div className={`flex flex-col ${containerClassName}`} onClick={() => inputRef.current?.focus()}>
            {label && (
                <label className={`text-gray-500 text-xs mb-2 ${labelClassName}`} htmlFor="username">
                    {label}
                </label>
            )}
            <input ref={inputRef} className={`appearance-none text-xl text-gray-600 focus:outline-none border-b-2 border-blue-300 focus:border-blue-500 ${inputClassName}`} {...inputProps} />
        </div>
    );
};

export default LoginInput;
