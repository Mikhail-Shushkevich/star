'use strict'
let result = '';
const light = 7

for (let i = 1; i <light; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
        result += '\n';
}
console.log(result);


let result = '';
const lines = 5;

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++){
        result += " ";
    }

    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }

    result += '\n';
}

console.log(result);

