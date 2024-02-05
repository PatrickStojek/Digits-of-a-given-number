function PrimeFactors(number) {
    let PrimeFactors = [];
    let divider =  2;

    while(number > 1) {
        let isDividerAlreadyAdded = false;

        for(let i = 0; i < PrimeFactors.length; i++) {
            if(divider % PrimeFactors[i] === 0 ) {
                isDividerAlreadyAdded = true;
                break;
            }
        }
        if(!isDividerAlreadyAdded) {
            PrimeFactors.push(divider)
        }

        if(number % divider === 0 ) {
            number = number / divider
        } else {
            divider++
        }
    }
    return PrimeFactors
}

console.log(PrimeFactors(16))   