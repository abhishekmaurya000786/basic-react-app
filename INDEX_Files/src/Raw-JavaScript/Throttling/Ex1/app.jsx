import { throttling } from './index'
function printFunction(name){
    console.log("Hello, ", name);
}
const App = () => {
    let throttlePrint = throttling(printFunction,1000);
    return (
        <div>
            <input 
                type="text"
                placeholder='type anything...!'
                onInput={(e)=> throttlePrint(e.target.value)}
                className='border-4 border-blue-600 rounded-2xl animate-pulse'
             />
        </div>
    )
}
export default App