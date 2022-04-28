import * as React from 'react';

type SwitchProps = {
    toggle: () => void;
    active: boolean;
    leftLabel?: string;
    rightLabel?: string;
};

const Switch: React.FC<SwitchProps> = ({ toggle, active, leftLabel, rightLabel }) => {
    return (
        <div className="flex text-white items-center">
            {leftLabel && <div className={`p-1 ${!active && 'font-bold'}`}>{leftLabel}</div>}
            <div
                className={`h-8 w-16 bg-slate-300 bg-opacity-20 rounded-2xl p-1 mx-4 cursor-pointer flex ${active ? 'justify-end' : 'justify-start'}`}
                onClick={toggle}
            >
                <div className="bg-white h-6 w-6 rounded-2xl" />
            </div>
            {rightLabel && <div className={`p-1 ${active && 'font-bold'}`}>{rightLabel}</div>}
        </div>
    );
};

export default Switch;
