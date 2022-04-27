import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

type RequestQuotePageProps = {};

const RequestQuotePage: React.FC<RequestQuotePageProps> = (props) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isAuthenticated) navigate('/login');
    }, [isAuthenticated]);

    return <div className="bg-background-pattern h-full bg-cover bg-no-repeat">Request Quote</div>;
};

export default RequestQuotePage;
