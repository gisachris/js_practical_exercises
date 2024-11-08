//object with null or undefined values

function convertNullableValues(object) {
    //use of the for of loop
    for (let key in object) {
        //null
        if (object[key] !== Object & object[key] === null) object[key] = 0

        //undefined
        if (object[key] === undefined) object[key] = ""
    }

    return object
}

//example
console.log(convertNullableValues({ num1: 1, num2: null, num3: undefined, num4: 4, num5: null, num6: undefined, num7: 7 }))


//notice
/*
I wanted to take it further and experiment with the possiblity of the Object being nested.
eg: {name: 'john', job: 'undefined', family: {parents: null} }

but for the possibility of the above object key "family" is not "null" or "undefined" but only its key is "null"

in the above case where nesting is involved there may be a better approach to use with Object entries, or recursion
*/
