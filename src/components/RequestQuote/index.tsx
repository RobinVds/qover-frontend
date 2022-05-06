import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import NumberInput from './components/NumberInput';
import { CarTypes } from '../../types/quote';
import ErrorMessage from './components/ErrorMessage';
import SelectInput from './components/SelectInput';
import { requestQuote } from '../../store/slices/quotes/actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

type RequestQuoteProps = {};

const EmptyGridCell = () => <div />;

const RequestQuote: React.FC<RequestQuoteProps> = (props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const quotes = useAppSelector((state) => state.quotes);

    React.useEffect(() => {
        console.log(quotes);
        if (quotes.loading === 'succeeded') {
            navigate('/display-quotes');
        }
    }, [quotes, navigate]);

    const onSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formElements = form.elements as typeof form.elements & {
            purchasePrice: { value: number };
            car: { value: CarTypes };
            ageOfDriver: { value: number };
        };

        dispatch(
            requestQuote({
                purchasePrice: formElements.purchasePrice.value,
                car: formElements.car.value,
                ageOfDriver: formElements.ageOfDriver.value
            })
        );
    };

    return (
        <div className="flex justify-center relative items-center h-4/5 md:h-2/5">
            <form onSubmit={onSubmit} className="bg-white flex w-full flex-col rounded xl:mx-32 py-16">
                <div className=" grid grid-cols-3 gap-4 w-full px-8 xl:px-64">
                    <div className="mr-4 text-lg text-grayBrown-500 ">Age of the driver</div>
                    <div className=" col-span-2">
                        <NumberInput defaultValue={0} id="ageOfDriver" className="w-1/4" errors={quotes.error?.ageOfDriver} />
                    </div>

                    <div className="mr-4 text-lg text-grayBrown-500 ">Car</div>
                    <div className=" col-span-2 border-2 p-2 flex justify-between items-center rounded">
                        <SelectInput
                            options={[
                                { label: 'Audi', value: 'Audi' },
                                { label: 'Porsche', value: 'Porsche' },
                                { label: 'BMW', value: 'BMW' }
                            ]}
                        />
                    </div>

                    <div className="mr-4 text-lg text-grayBrown-500 ">Purchase Price</div>
                    <div className={`col-span-2 ${quotes.error?.purchasePrice && 'text-red-500'}`}>
                        <NumberInput defaultValue={0} id="purchasePrice" className="w-1/4" errors={quotes.error?.purchasePrice} extra="€" />
                    </div>

                    <button className="text-white bg-teal-300 py-3 px-6 rounded font-bold mt-4" disabled={quotes.loading === 'pending'} type="submit">
                        Get a price
                    </button>
                    <EmptyGridCell />

                    {quotes.error?.global && (
                        <>
                            <EmptyGridCell />
                            <div className="col-span-2">
                                <ErrorMessage message={quotes.error?.global} />
                            </div>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
};

export default RequestQuote;
