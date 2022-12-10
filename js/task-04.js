
let counterValue = 0;

const displayCounter = document.querySelector('#value')
const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');

decBtn.addEventListener('click', () => {
	counterValue--
	displayCounter.textContent = counterValue
})

incBtn.addEventListener('click', () => {
	counterValue++
	displayCounter.textContent = counterValue
})