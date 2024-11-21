//given a string as a numerical expression how can one do the mathematical expression without using eval()

function calculateExpression(expression) {
    return new Function('return' + expression)()
}

console.log(calculateExpression("1+2"))
console.log(calculateExpression("5 + 4 * 3 / 2 - 1"))
console.log(calculateExpression("( 2 + 3 ) * ( 4 - 1 )"))