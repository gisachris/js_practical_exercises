//create a function that takes an object and a function that transforms all keys of that object fn(object, transfomationFunction)

function objectTransform(object, transformer) {
    let transformedObject = {}

    for (let [key, value] of Object.entries(object)) {
        transformedObject[transformer(key)] = value
    }

    return transformedObject
}

//examples
console.log(objectTransform({ name: 'john', age: 30 }, (key) => key.toUpperCase()))