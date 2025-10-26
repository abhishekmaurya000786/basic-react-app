import {useState,useEffect} from 'react'

const Journal = () => {
    const [entry, setEntry] = useState(localStorage.getItem("journal") || "");
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            localStorage.setItem("journal", entry);
            setSaved(true);
            setTimeout(() => {
                setSaved(false);    
            }, 1500);
        }, 2000);

        return clearTimeout(timer);
    }, [entry]);

    return (
        <div 
            onClickCapture={()=>console.log("Capturing Phase..")} 
            onClick={()=>console.log("Bubbling phase")}
            className='bg-white dark:text-white dark:bg-gray-900 p-6 rounded-xl shadow-xl w-full max-w-lg'
        >
            <h2 className='text-xl mb-6 font-bold'>📝 Your Journal..</h2>
            <textarea 
                className='w-full p-3 border rounded-lg text-black'
                rows="5"
                value={entry}
                onChange={(e)=>setEntry(e.target.value)}
                placeholder='Start writing your thoughts..!!'
             />
            { saved && (
                <p className='text-green-500 mt-3 transition-all' >Auto saved Successfully ..!!</p>
            )
            }
        </div>
    )
}

export default Journal
