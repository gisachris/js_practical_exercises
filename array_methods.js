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
function myFilter() { }

//reduce
function myreduce() { }

//foreach
function myForEach() { }

//examples