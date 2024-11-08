// remove a duplicate member from an array without using the set object

function removeDuplicate(arr) {
    let mapping = {}

    for (let i = 0; i < arr.length; i++) {
        mapping[arr[i]] = (mapping[arr[i]] || 0) + 1
    }

    return Object.keys(mapping)
}

//examples
console.log(removeDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))