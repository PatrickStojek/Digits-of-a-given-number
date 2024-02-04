function PrimeFactors(number) {
    let PrimeFactors = [];
    let divider =  2;

    while(number > 1) {
        if(number % divider == 0) {
            PrimeFactors.push(divider)
            number = number / divider
        } else {
            divider++
        }
        
    }
    return PrimeFactors
}

console.log(PrimeFactors(16))