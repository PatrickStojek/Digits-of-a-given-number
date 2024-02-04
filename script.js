
function DigitsOfNumber(number) {
    const numberString = number.toString();
    const digitsArray = []
    
    for(let i = 0; i < numberString.length; i++) {
        digitsArray.push(Number(numberString[i]))
    }
    return digitsArray
}
const digitsContainer = document.querySelector(".container")
const input = document.querySelector('input[type="text"]');
const digitsOfNumber = document.createElement('div');
const button = document.querySelector('.submit-button')
button.addEventListener('click', () => {
   const InputValue = parseFloat(input.value)

   if(isNaN(InputValue)) {
    alert("Please enter a valid Number");
    input.value = "";
   } else {
        console.log(DigitsOfNumber(InputValue));
        digitsOfNumber.innerText = DigitsOfNumber(InputValue);
        digitsContainer.appendChild(digitsOfNumber);
        input.value = "";
   }

})
