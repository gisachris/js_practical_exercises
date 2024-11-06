function oddSquares(arr) {
    let filtered = arr.filter(num => num % 2 !== 0)

    let squared = filtered.map(num => num ** 2)

    return squared;
}

//examples
console.log(oddSquares([1, 2, 3, 4, 5]))
console.log(oddSquares([-10, -5, 0, 5, 10]))
console.log(oddSquares([1, 1, 1, 1, 1]))