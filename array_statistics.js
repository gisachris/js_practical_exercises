// array of numbers
// implement a function

const arrayStats = (arr) => {
    let statObject = {}

    //sum
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    statObject.sum = sum

    //average
    statObject.average = sum / arr.length

    //min
    statObject.min = Math.min(...arr)

    //max
    statObject.max = Math.max(...arr)

    return statObject
}

//examples
console.log(arrayStats([1, 2, 3, 4, 5]))
console.log(arrayStats([-10, -5, 0, 5, 10]))
console.log(arrayStats([1, 1, 1, 1, 1]))

//a better approach could have been to use the reduce method for sum and average.
/*
reduce method syntax:
for the sum it could have been

let sum  =  arr.reduce((accumulator,currentval)=>{accumulator + current val},0)

let average  =  arr.reduce((accumulator,currentval)=>{accumulator + current val},0)/arr.length

*/