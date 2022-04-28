import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import RequestQuote from '../components/RequestQuote';
import { useAuth } from '../hooks/useAuth';

type RequestQuotePageProps = {};

const RequestQuotePage: React.FC<RequestQuotePageProps> = (props) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        // if (!isAuthenticated) navigate('/login');
    }, [isAuthenticated]);

    return (
        <div className="bg-background-pattern h-full w-full bg-cover bg-no-repeat">
            <div className="container mx-auto h-full flex flex-col">
                <div className="flex justify-center flex-grow flex-col">
                    <RequestQuote />
                </div>
            </div>
        </div>
    );
};

export default RequestQuotePage;
