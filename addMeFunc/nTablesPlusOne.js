// Create a function that takes a number n and returns the first 10 multiples of n with 1 added to it, separated by commas.

function nTablesPlusOne(n) {
    let result = '';
    for (let i = 1; i <= 10; i++) {
        const multiple = n * i + 1;
        result += multiple;
        if (i !== 10) {
            result += ', ';
        }
    }
    return result;
}

console.log(nTablesPlusOne(7)); 