function debounce(fnc,delay){
    let timer;
    return function (){
        clearTimeout(timer);
        setTimeout(() => {
            fnc();
            // fnc();
        }, delay);
        // setChar(e.target.value);
    }
}

function printFunction(value){
    console.log("Hello",value);
}

export { debounce,printFunction};