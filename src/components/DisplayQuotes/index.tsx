import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { globalQuoteSelector, universeQuoteSelector } from '../../store/slices/quotes/selectors';
import Header from './components/Header';
import Modal from './components/Modal';

type DisplayQuotesProps = {};

const DisplayQuotes: React.FC<DisplayQuotesProps> = (props) => {
    const [yearly, setYearly] = React.useState(false);
    const [universe, setUniverse] = React.useState(false);

    const navigate = useNavigate();

    const toggleYearly = () => setYearly(!yearly);

    const globalQuote = useAppSelector(globalQuoteSelector);
    const universeQuote = useAppSelector(universeQuoteSelector);

    React.useEffect(() => {
        if (!globalQuote || !universeQuote) {
            navigate('/request-quote');
        }
    }, [globalQuote, universeQuote, navigate]);

    return (
        <div className="h-full container mx-auto">
            <Header yearly={yearly} toggleYearly={toggleYearly} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
                {globalQuote && (
                    <Modal
                        title="Global"
                        yearly={yearly}
                        quote={globalQuote}
                        onSelect={() => setUniverse(false)}
                        selected={!universe}
                        className="lg:place-self-end"
                    />
                )}
                {universeQuote && (
                    <Modal
                        title="Universe"
                        yearly={yearly}
                        quote={universeQuote}
                        onSelect={() => setUniverse(true)}
                        selected={universe}
                        className="lg:place-self-start"
                    />
                )}
            </div>
        </div>
    );
};

export default DisplayQuotes;
