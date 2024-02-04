const NumberDigitsBtn = document.querySelector(".DigitsNumberToggle")
const PrimeFactorsBtn = document.querySelector(".PrimeFactorsToggle")

NumberDigitsBtn.addEventListener('click', () => {
    NumberDigitsBtn.classList.toggle("active")
    PrimeFactorsBtn.classList.remove("active")
})

PrimeFactorsBtn.addEventListener("click", () => {
    PrimeFactorsBtn.classList.toggle("active")
    NumberDigitsBtn.classList.remove("active")
})
