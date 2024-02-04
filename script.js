
function DigitsOfNumber(number) {
    const numberString = number.toString();
    const digitsArray = []
    
    for(let i = 0; i < numberString.length; i++) {
        digitsArray.push(Number(numberString[i]))
    }
    return digitsArray
}

console.log(DigitsOfNumber(123));  