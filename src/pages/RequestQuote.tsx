import * as React from 'react';
import RequestQuote from '../components/RequestQuote';

type RequestQuotePageProps = {};

const RequestQuotePage: React.FC<RequestQuotePageProps> = (props) => {
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
