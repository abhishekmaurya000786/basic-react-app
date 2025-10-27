import {useFetchQuote} from '../Hooks/useFetchQuote';



const QuoteBox = () => {

    const {quote,error} = useFetchQuote(); 

    return (
        <div className='p-4 text-gray-900 bg-indigo-100 rounded-lg shadow-md dark:bg-indigo-800 dark:text-white'>
            { error ? (<p className='text-red-500'>{                                                                                                                                }</p>) : quote ? (<p>{quote}</p>) : (<p>Loading Quote...</p>)
            }
        </div>
    );
};

export default QuoteBox
