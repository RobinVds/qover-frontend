import * as React from 'react';
import { FiChevronDown } from 'react-icons/fi';

type SelectOption = {
    label: string;
    value: string;
};
type SelectInputProps = {
    options: SelectOption[];
};

const SelectInput: React.FC<SelectInputProps> = ({ options }) => {
    return (
        <>
            <select id="car" className="appearance-none focus:outline-none text-lg bg-white w-full">
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
            <FiChevronDown className="text-teal-300 text-2xl" />
        </>
    );
};

export default SelectInput;
