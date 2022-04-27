import * as React from 'react';
import LogoImage from '../../../assets/logo.png';

type LogoProps = {};

const Logo: React.FC<LogoProps> = () => {
    return (
        <div className="absolute flex justify-center items-center top-0 md:-mt-36 invisible sm:visible w-full ">
            <img src={LogoImage} className="h-24 sm:32 xl:h-36" />
        </div>
    );
};

export default Logo;
