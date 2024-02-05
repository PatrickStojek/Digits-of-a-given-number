
function DigitsOfNumber(number) {
    const numberString = number.toString();
    const digitsArray = []
    
    for(let i = 0; i < numberString.length; i++) {
        digitsArray.push(Number(numberString[i]))
    }
    return digitsArray
}

function SortInAscedingOrder(digitsArray) {
   const sortedArray =  digitsArray.sort(function(a, b) {
     return a - b
   })
   return sortedArray
}

const DigitsNumberToggle = document.querySelector('.DigitsNumberToggle')
const digitsContainer = document.querySelector(".container")
const input = document.querySelector('input[type="text"]');
const digitsOfNumber = document.createElement('div');
const button = document.querySelector('.submit-button')


function DigitsNumberToggleActive() {
    digitsOfNumber.innerText = SortInAscedingOrder(DigitsOfNumber(InputValue));
        digitsContainer.appendChild(digitsOfNumber);
        input.value = "";
}

button.addEventListener('click', () => {
   const InputValue = parseFloat(input.value)

   if(isNaN(InputValue)) {
    alert("Please enter a valid Number");
    input.value = "";
   } else {
        if(DigitsNumberToggle.classList.contains(".active")) {
            DigitsNumberToggleActive()
        }
        
   }

})
