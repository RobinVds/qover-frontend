import * as React from 'react';
import { FiCheckCircle, FiCircle } from 'react-icons/fi';

type CheckBoxProps = {
    selected?: boolean;
    onSelect?: () => void;
    label?: string;
};

const CheckBox: React.FC<CheckBoxProps> = ({ selected, onSelect, label }) => {
    return (
        <div className="flex items-center text-gray-500 cursor-pointer" onClick={onSelect}>
            {selected ? <FiCheckCircle className="mr-2 text-xl text-blue-500 " /> : <FiCircle className="mr-2 text-xl text-blue-500 " />} {label}
        </div>
    );
};

export default CheckBox;
