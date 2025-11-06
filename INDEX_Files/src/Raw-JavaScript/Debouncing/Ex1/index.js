export function debounce(func, delay) {
  let timer;
  return function (...args) {    // ...args means "rest parameter" which collects all arguments into an array, it actually consists of all the arguments passed to the function like printFunction, name, delay and so on.. We actually need to do
        
    clearTimeout(timer); // clear previous timer
    timer = setTimeout(() => func(...args), delay); // run after delay
  };
}
