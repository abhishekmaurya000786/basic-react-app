export function throttling(fnc,delay) {
    let timer;

    return function(...args) {
        let now = Date.now();
        if (now - timer >=delay){
            timer=now;
            fnc(...args);
        }

    };
    
}