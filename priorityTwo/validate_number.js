// validate a number with these conditions
//takes a string
//return true or false
/*
- it must be exactly ten digits
- it can contain hypens(-) or spaces at the 3rd and 6th digits
*/

function validatePhoneNumber(number) {
    //check for reqs first
    let pattern1, pattern2, pattern3;
    pattern1 = /^\d{3}-\d{3}-\d{4}$/
    pattern2 = /^\d{10}$/
    pattern3 = /^\d{3} \d{3} \d{4}$/

    if (pattern1.test(number) || pattern2.test(number) || pattern3.test(number)) return true

    return false
}

//examples
console.log(validatePhoneNumber("1234567890")); // should return true
console.log(validatePhoneNumber("123-456-7890")); // should return true
console.log(validatePhoneNumber("123 456 7890")); // should return true
console.log(validatePhoneNumber("123-45-67890")); // should return false
console.log(validatePhoneNumber("1234-567890")); // should return false
