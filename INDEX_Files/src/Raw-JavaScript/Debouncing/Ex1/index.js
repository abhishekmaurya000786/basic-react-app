function debounce(fnc,delay){
    let timer;
    return function (...args){
        clearTimeout(timer);
        setTimeout(() => {
            fnc(...args)
        }, delay);
    }
}

function printFunction(name){
    console.log("Hello",name);
}

// document.querySelector("input").addEventListener("input", ()=>debounce(printFunction("Abhishek"),1000));

export { debounce,printFunction};