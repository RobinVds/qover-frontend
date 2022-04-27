import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

type DisplayQuotesPageProps = {};

const DisplayQuotesPage: React.FC<DisplayQuotesPageProps> = (props) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    React.useEffect(() => {
        if (!isAuthenticated) navigate('/login');
    }, []);
    return <div></div>;
};

export default DisplayQuotesPage;
