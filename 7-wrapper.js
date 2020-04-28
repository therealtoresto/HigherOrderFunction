`use strict`;

const logable = fn => (...args) => {
    const res = fn(...args);
    console.log(`Call: ${fn.name}(${args.join(', ')}) Result: ${res}`);
    return res;
};

//Usage

const sum = (a, b) => (a + b);

const wrapped = logable(sum);
const a = wrapped(3, 5);
const b = wrapped(1, 4);
const c = wrapped(-3, 2);
console.dir({ a, b, c })