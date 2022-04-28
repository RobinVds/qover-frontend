import * as React from 'react';
import Switch from './Switch';

type HeaderProps = {
    yearly: boolean;
    toggleYearly: () => void;
};

const Header: React.FC<HeaderProps> = ({ yearly, toggleYearly }) => {
    return (
        <div className="flex flex-col items-center justify-around h-1/5">
            <div className="text-white text-3xl font-semibold"> Select a plan </div>
            <Switch toggle={toggleYearly} active={yearly} leftLabel={'PAY MONTHLY'} rightLabel={'PAY YEARLY'} />
        </div>
    );
};

export default Header;
