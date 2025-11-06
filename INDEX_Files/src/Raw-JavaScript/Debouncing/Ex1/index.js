// utils.js
export function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // clear previous timer
    timer = setTimeout(() => func(...args), delay); // run after delay
  };
}
