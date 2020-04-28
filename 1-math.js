`use strict`

const { sin } = Math;
const inverse = f => x => 1 / f(x);
const consecant = inverse(sin);

const a = consecant(5);

console.log(a);