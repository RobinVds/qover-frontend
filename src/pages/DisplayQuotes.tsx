import * as React from 'react';
import background from '../assets/background-travel@3x.png';
import DisplayQuotes from '../components/DisplayQuotes';

type DisplayQuotesPageProps = {};

const DisplayQuotesPage: React.FC<DisplayQuotesPageProps> = () => {
    return (
        <>
            <div className="absolute -z-10 bg-gray-100 w-full h-full">
                <img src={background} className="w-full" alt="background" />
            </div>
            <DisplayQuotes />
        </>
    );
};

export default DisplayQuotesPage;
