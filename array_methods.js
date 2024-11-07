//create array methods that replicate built-in array methods(map, filter, reduce, foreach)

//map
function mapCallback(item) {
    //does an action to an element in the array
    item += 1
    return item
}
function myMap(mapCallback) {
    let arr = [1, 2, 3]
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(mapCallback(arr[i]))
    }

    return newArray
}

//filter
function filterCallback(item) {
    //specify condition to satisfy
    if (item < 5) return true
    return false
}
function myFilter(filterCallback) {
    let arr = [24, 5, 4, 6, 3]
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (filterCallback(arr[i])) {
            newArr.push(arr[i])
        }
    }

    return newArr
}

//reduce
function reduceCallback(accumulator, num) {
    return accumulator + num
}
function myReduce(reduceCallback, initialVal = null) {
    let arr = [1, 2, 3]
    let accumulator = initialVal || arr[0]
    let startIndex = 0

    if (initialVal !== null) {
        accumulator = initialVal
    } else {
        accumulator = arr[0]
        startIndex = 1
    }

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = reduceCallback(accumulator, arr[i])
    }

    return accumulator
}

//foreach
function myForEach() { }

//examples
console.log("mymap=>", myMap(mapCallback))
console.log("myFilter=>", myFilter(filterCallback))
console.log("myReduce=>", myReduce(reduceCallback))