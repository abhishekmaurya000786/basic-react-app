import {useFetchQuote} from '../Hooks/useFetchQuote';



const QuoteBox = () => {

    const {quote,error} = useFetchQuote(); 

    return (
        <div className='bg-indigo-100 dark:bg-indigo-800 text-gray-900 dark:text-white p-4 rounded-lg shadow-md'>
            { error ? (<p className='text-red-500'>{quote}</p>) : quote ? (<p>{quote}</p>) : (<p>Loading Quote...</p>)
            }
        </div>
    );
};

export default QuoteBox
