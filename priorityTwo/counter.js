
function createCounter() {
    let count = 0
    return function countfn() {
        return count += 1
    }
}

let countfn = createCounter()
console.log(countfn()) // count becomes 1
console.log(countfn()) // count becomes 2
console.log(countfn()) // count becomes 3
console.log(countfn()) // count becomes 4
console.log(countfn()) // count becomes 5
