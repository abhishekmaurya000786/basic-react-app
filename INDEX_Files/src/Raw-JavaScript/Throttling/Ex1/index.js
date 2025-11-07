export function throttling(fnc,delay) {
    let timer = 0;

    return function(...args) {
        let now = Date.now();
        if (now - timer >= delay) {
            timer = now;
            fnc(...args);
        }

    };
    
}