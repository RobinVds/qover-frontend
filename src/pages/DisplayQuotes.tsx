import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import background from '../assets/background-travel@3x.png';
import DisplayQuotes from '../components/DisplayQuotes';

type DisplayQuotesPageProps = {};

const DisplayQuotesPage: React.FC<DisplayQuotesPageProps> = (props) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    React.useEffect(() => {
        if (!isAuthenticated) navigate('/login');
    }, [isAuthenticated, navigate]);

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
