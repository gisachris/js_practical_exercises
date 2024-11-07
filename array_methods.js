//create array methods that replicate built-in array methods(map, filter, reduce, foreach)

//map
function mymapCallback(item) {
    //does an action to an element in the array
    item++
    return item
}
function myMap(mymapCallback) {
    let arr = [1, 2, 3]
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(mymapCallback(arr[i]))
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
function myreduce() { }

//foreach
function myForEach() { }

//examples