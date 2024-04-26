function makeRug(m, n, s) {
    const defaultChar = '#';
    const charToUse = s ? s : defaultChar;
    const result = [];

    for (let i = 0; i < m; i++) {
        result.push(charToUse.repeat(n));
    }

    return result;
}

// Test cases
console.log(makeRug(3, 5)); // Output: ["#####", "#####", "#####"]
console.log(makeRug(3, 5, '$')); // Output: ["$$$$$", "$$$$$", "$$$$$"]
