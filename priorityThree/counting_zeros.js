// take a number and return the amount of zeros present within it
function countZeros(n) {
    let count = 0;
    let powerOfTen = 10;

    while (powerOfTen <= n) {
        count += Math.floor(n / powerOfTen);
        powerOfTen *= 10;
    }

    // If n is 100, we need to account for the 100 itself
    if (n >= 100) {
        count += Math.floor(n / 100);
    }

    return count;
}

console.log('1', countZeros(100)) //should be 11
console.log('2', countZeros(50)) // should be 5
console.log('3', countZeros(200)) // should be 22
console.log('3', countZeros(1000))