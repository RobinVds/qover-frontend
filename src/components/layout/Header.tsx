import * as React from 'react';
import { FiChevronLeft } from 'react-icons/fi';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <div className="absolute w-screen h-8 top-0 left-0 z-10">
            <div className="bg-white bg-opacity-10 flex h-full z-10">
                <div className="container mx-auto text-white h-8 flex items-center text-xs">
                    <FiChevronLeft /> QOVER.ME
                </div>
            </div>
        </div>
    );
};

export default Header;
